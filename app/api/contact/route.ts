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
    const timestamp = new Date().toISOString();

    const formattedInquiry = {
      recipient: recipientEmail,
      senderName: name.trim(),
      senderEmail: email.trim(),
      selectedPlan: plan || "General Support",
      deviceType: deviceType || "Smart TV / Streaming Device",
      message: message.trim(),
      receivedAt: timestamp,
    };

    // If Resend API key is configured in process.env, forward via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Premium IPTV Support <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email.trim(),
            subject: `[Premium IPTV] New Support Inquiry from ${name.trim()}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nPlan: ${plan || "General Inquiry"}\nDevice: ${deviceType || "Not specified"}\n\nMessage:\n${message.trim()}`,
          }),
        });
      } catch (sendErr) {
        console.error("Failed to forward via Resend API:", sendErr);
      }
    }

    // Log the contact inquiry for server observability
    console.log("=== NEW CONTACT INQUIRY RECEIVED ===", JSON.stringify(formattedInquiry, null, 2));

    return NextResponse.json({
      success: true,
      message: `Your inquiry has been successfully sent to support (${recipientEmail}).`,
      data: {
        recipient: recipientEmail,
        senderEmail: email.trim(),
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
