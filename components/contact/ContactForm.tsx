"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
    deviceType: "smart-tv",
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
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } catch {
      setErrors({ message: "An error occurred while sending. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-emerald-400 text-center space-y-4 shadow-xl shadow-emerald-500/10">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-2xl font-black text-slate-950">Message Received!</h3>

        <p className="text-slate-700 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
          Thank you for reaching out to <strong className="text-brand-700">Premium IPTV Support</strong>. Our technical support team has received your message and will respond to{" "}
          <span className="text-brand-700 font-bold underline">{formData.email}</span> within 15 minutes.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                plan: "",
                deviceType: "smart-tv",
                message: "",
              });
            }}
            className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold transition-all hover:scale-105"
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
          Fill out the form below and our technical specialists will assist you promptly.
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
            <option value="1-month">1 Month Subscription</option>
            <option value="3-months">3 Months Subscription</option>
            <option value="6-months">6 Months Subscription</option>
            <option value="12-months">12 Months Subscription (Best Value)</option>
            <option value="setup-help">Setup & Device Configuration Help</option>
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
            <option value="smart-tv">Smart TV (Samsung/LG/Android TV)</option>
            <option value="firestick">Amazon Firestick / Fire TV</option>
            <option value="apple-tv">Apple TV</option>
            <option value="android-mobile">Android Phone / Tablet</option>
            <option value="ios-mobile">Apple iPhone / iPad</option>
            <option value="computer">Windows PC / macOS</option>
            <option value="other">Other Streaming Hardware</option>
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
