"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";

const leadSchema = z
  .object({
    fullName: z.string().min(2, "Ingresa tu nombre completo."),
    company: z.string().optional(),
    email: z
      .string()
      .email("Correo invalido.")
      .or(z.literal(""))
      .optional(),
    phone: z.string().min(7, "Ingresa un telefono valido."),
    service: z.string().min(2, "Selecciona una necesidad."),
    message: z.string().min(10, "Cuentanos brevemente el objetivo del proyecto."),
    source: z.string().min(1),
  })
  .superRefine((value, context) => {
    if (!value.email && !value.phone) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes ingresar correo o telefono.",
        path: ["email"],
      });
    }
  });

type LeadSchema = z.infer<typeof leadSchema>;

const serviceOptions = [
  "IA y automatizacion",
  "Sistema humedo / NFPA 25",
  "Alarmas contra incendio",
  "Instalacion de camaras",
  "Integracion de sistemas",
  "Redes y cableado",
];

type LeadFormProps = {
  source?: string;
  compact?: boolean;
};

export function LeadForm({ source = "contacto_general", compact = false }: LeadFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const defaultValues = useMemo<LeadSchema>(
    () => ({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "IA y automatizacion",
      message: "",
      source,
    }),
    [source]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadSchema>({
    resolver: zodResolver(leadSchema),
    defaultValues,
  });

  const onSubmit = async (values: LeadSchema) => {
    setSubmitError(null);
    setIsSuccess(false);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSubmitError("No pudimos enviar el formulario. Intenta nuevamente.");
      return;
    }

    trackEvent("form_submit", { source: values.source, service: values.service });
    setIsSuccess(true);
    reset({ ...defaultValues, source: values.source });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="hidden" value={source} {...register("source")} />
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Nombre</label>
          <Input placeholder="Nombre y apellido" {...register("fullName")} />
          {errors.fullName ? <p className="text-xs text-red-300">{errors.fullName.message}</p> : null}
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Empresa</label>
          <Input placeholder="Empresa o proyecto" {...register("company")} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Correo</label>
          <Input placeholder="correo@empresa.com" type="email" {...register("email")} />
          {errors.email ? <p className="text-xs text-red-300">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Telefono</label>
          <Input placeholder="+507 ..." {...register("phone")} />
          {errors.phone ? <p className="text-xs text-red-300">{errors.phone.message}</p> : null}
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Servicio de interes</label>
        <select
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          {...register("service")}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service ? <p className="text-xs text-red-300">{errors.service.message}</p> : null}
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Objetivo del proyecto</label>
        <Textarea
          placeholder="Cuéntanos qué quieres mejorar: seguridad, automatización, trazabilidad, cumplimiento, etc."
          {...register("message")}
        />
        {errors.message ? <p className="text-xs text-red-300">{errors.message.message}</p> : null}
      </div>
      {submitError ? <p className="text-sm text-red-300">{submitError}</p> : null}
      {isSuccess ? <p className="text-sm text-emerald-300">Formulario enviado. Te contactaremos pronto.</p> : null}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Solicitar diagnostico
      </Button>
      <p className="text-xs text-slate-500">Al enviar, aceptas el tratamiento de datos conforme a nuestra politica de privacidad.</p>
    </form>
  );
}
