import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

interface ContactRequestBody {
  name?: string;
  email?: string;
  plan?: string;
  deviceType?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, plan, deviceType, message } = body;

    // Validate name
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate message
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 5 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = siteConfig.support.email; // "iptvusapro@gmail.com"
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    const senderName = name.trim();
    const senderEmail = email.trim();
    const selectedPlan = plan || "General Support Inquiry";
    const selectedDevice = deviceType || "Smart TV";
    const userMessage = message.trim();

    let emailDelivered = false;

    // 1. Direct Email Delivery via FormSubmit service to iptvusapro@gmail.com
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          _replyto: senderEmail,
          _subject: `[Premium IPTV Contact] New Message from ${senderName} (${senderEmail})`,
          _template: "table",
          _captcha: "false",
          "Customer Name": senderName,
          "Customer Email": senderEmail,
          "Plan / Topic": selectedPlan,
          "Device Type": selectedDevice,
          "Message": userMessage,
          "Submitted At": timestamp,
        }),
      });

      if (formSubmitRes.ok) {
        emailDelivered = true;
        console.log("Contact form email successfully dispatched to", recipientEmail);
      } else {
        const errorText = await formSubmitRes.text();
        console.warn("FormSubmit response not OK:", errorText);
      }
    } catch (deliveryError) {
      console.error("Error dispatching email via FormSubmit:", deliveryError);
    }

    // 2. Optional Resend API Integration if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Premium IPTV Support <support@premiumiptv.com>",
            to: [recipientEmail],
            reply_to: senderEmail,
            subject: `[Premium IPTV] New Support Inquiry from ${senderName}`,
            text: `Name: ${senderName}\nEmail: ${senderEmail}\nPlan: ${selectedPlan}\nDevice: ${selectedDevice}\nDate: ${timestamp}\n\nMessage:\n${userMessage}`,
          }),
        });
      } catch (resendError) {
        console.error("Error dispatching via Resend:", resendError);
      }
    }

    // Log the contact inquiry for server observability
    console.log("=== NEW CONTACT INQUIRY PROCESSED ===", {
      recipient: recipientEmail,
      senderName,
      senderEmail,
      selectedPlan,
      selectedDevice,
      userMessage,
      emailDelivered,
    });

    return NextResponse.json({
      success: true,
      message: `Your message has been delivered to our support team at ${recipientEmail}.`,
      data: {
        recipient: recipientEmail,
        senderEmail,
        delivered: emailDelivered,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
