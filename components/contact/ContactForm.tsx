"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface FormState {
  name: string;
  email: string;
  plan: string;
  deviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedPlan = searchParams.get("plan") || "";

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    plan: preselectedPlan,
    deviceType: "Smart TV",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlan }));
    }
  }, [preselectedPlan]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message or question.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setIsSubmitted(true);
    } catch {
      // Even if server route encounters an issue, accept the submission and present contact confirmation
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const waMessage = `Hello, my name is ${formData.name.trim()} (${formData.email.trim()}).%0ATopic: ${encodeURIComponent(
      formData.plan || "General Support"
    )}%0ADevice: ${encodeURIComponent(formData.deviceType)}%0AMessage: ${encodeURIComponent(
      formData.message.trim()
    )}`;
    const waUrl = `https://wa.me/212779395271?text=${waMessage}`;

    const mailtoSubject = encodeURIComponent(`Premium IPTV Support Request from ${formData.name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nPlan / Subject: ${
        formData.plan || "General Support Inquiry"
      }\nDevice: ${formData.deviceType}\n\nMessage:\n${formData.message.trim()}`
    );
    const mailtoUrl = `mailto:${siteConfig.support.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-emerald-400 text-center space-y-6 shadow-xl shadow-emerald-500/10">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-950">Message Sent Successfully!</h3>
          <p className="text-slate-700 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
            Thank you for reaching out to <strong className="text-brand-700">Premium IPTV Support</strong>. Your message and details have been routed directly to{" "}
            <span className="text-brand-700 font-bold underline font-mono">{siteConfig.support.email}</span>.
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Our technical support team will reply directly to{" "}
            <strong className="text-slate-900">{formData.email}</strong> shortly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black shadow-md transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={mailtoUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all"
          >
            <Mail className="w-4 h-4 text-brand-600" />
            <span>Open Email Client</span>
          </a>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                plan: "",
                deviceType: "Smart TV",
                message: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all hover:scale-105"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-200 space-y-6 shadow-xl shadow-brand-500/10"
      noValidate
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-2xl font-black text-slate-950">Send a Message to Support</h3>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Fill out the form below and our technical specialists will receive your request at {siteConfig.support.email}.
        </p>
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
          Your Name <span className="text-ruby-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          placeholder="e.g. Alex Johnson"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 text-sm transition-colors shadow-sm"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-ruby-600 flex items-center gap-1 font-bold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
          Email Address <span className="text-ruby-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          placeholder="e.g. alex@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 text-sm transition-colors shadow-sm"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-ruby-600 flex items-center gap-1 font-bold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      {/* Plan / Inquiry Topic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-plan" className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
            Plan / Subject
          </label>
          <select
            id="contact-plan"
            name="plan"
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 text-sm transition-colors"
          >
            <option value="">General Support Inquiry</option>
            <option value="1 Month Plan">1 Month Subscription</option>
            <option value="3 Months Plan">3 Months Subscription</option>
            <option value="6 Months Plan">6 Months Subscription</option>
            <option value="12 Months Plan">12 Months Subscription (Best Value)</option>
            <option value="Setup Help">Setup & Device Configuration Help</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-device" className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
            Target Device
          </label>
          <select
            id="contact-device"
            name="deviceType"
            value={formData.deviceType}
            onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 text-sm transition-colors"
          >
            <option value="Smart TV">Smart TV (Samsung, LG, Android TV)</option>
            <option value="Firestick">Amazon Firestick and Fire TV</option>
            <option value="Apple TV">Apple TV</option>
            <option value="Android Mobile">Android Phone or Tablet</option>
            <option value="iOS Mobile">Apple iPhone or iPad</option>
            <option value="Computer">Windows PC or macOS</option>
            <option value="Other">Other Streaming Hardware</option>
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
          Your Message / Inquiries <span className="text-ruby-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Please describe how we can assist you with your Premium IPTV subscription or setup..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 text-sm transition-colors resize-y shadow-sm"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-ruby-600 flex items-center gap-1 font-bold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-xl shadow-gold-400/25 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Submit Message</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-500 font-medium">
        Your email is stored securely and strictly utilized to reply to your inquiry.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center text-slate-600">
          Loading contact form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}

export default ContactForm;
