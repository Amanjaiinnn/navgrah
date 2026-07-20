"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { brand, services } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  service: z.string().min(1, "Please choose a service."),
  message: z.string().min(10, "Please share a short message."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const endpoint =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://api.web3forms.com/submit";
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: services[0].title,
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("idle");

    if (!accessKey) {
      const body = encodeURIComponent(
        `Name: ${values.name}\nPhone: ${values.phone}\nService: ${values.service}\n\n${values.message}`,
      );
      window.location.href = `mailto:${brand.email}?subject=Consultation request from ${encodeURIComponent(
        values.name,
      )}&body=${body}`;
      reset();
      return;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New consultation request - Navgrah by Raani",
        from_name: values.name,
        email: brand.email,
        ...values,
      }),
    });

    if (response.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-md border border-maroon/10 bg-white p-6 shadow-[0_20px_55px_rgba(73,38,25,0.08)]"
    >
      <div className="grid gap-2">
        <label className="text-sm font-bold uppercase tracking-[0.14em] text-maroon">
          Name
        </label>
        <input
          {...register("name")}
          className="min-h-12 rounded-md border border-maroon/15 bg-cream/45 px-4 outline-none transition focus:border-gold"
          placeholder="Your name"
        />
        {errors.name && <p className="text-sm text-maroon">{errors.name.message}</p>}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold uppercase tracking-[0.14em] text-maroon">
          Phone
        </label>
        <input
          {...register("phone")}
          className="min-h-12 rounded-md border border-maroon/15 bg-cream/45 px-4 outline-none transition focus:border-gold"
          placeholder="Your phone number"
        />
        {errors.phone && <p className="text-sm text-maroon">{errors.phone.message}</p>}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold uppercase tracking-[0.14em] text-maroon">
          Service Interested In
        </label>
        <select
          {...register("service")}
          className="min-h-12 rounded-md border border-maroon/15 bg-cream/45 px-4 outline-none transition focus:border-gold"
        >
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-sm text-maroon">{errors.service.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold uppercase tracking-[0.14em] text-maroon">
          Message
        </label>
        <textarea
          {...register("message")}
          className="min-h-32 rounded-md border border-maroon/15 bg-cream/45 px-4 py-3 outline-none transition focus:border-gold"
          placeholder="Tell us what you would like guidance for."
        />
        {errors.message && (
          <p className="text-sm text-maroon">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-maroon px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-[#651823] disabled:cursor-not-allowed disabled:opacity-65"
      >
        <Send size={18} /> {isSubmitting ? "Sending..." : "Send Request"}
      </button>

      {status === "success" && (
        <p className="text-sm font-semibold text-green">
          Thank you. Your request has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-maroon">
          Something went wrong. Please call or WhatsApp directly.
        </p>
      )}
    </form>
  );
}
