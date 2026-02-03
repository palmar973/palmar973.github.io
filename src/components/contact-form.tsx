"use client";

import { useForm as useFormRHF } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";

import { contactFormSchema } from "@/lib/schemas";
import { toast } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [formspreeState, formspreeSubmit, formspreeReset] = useFormspree<ContactFormValues>("meezbrkd");

  const form = useFormRHF<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot: si viene con valor, asumimos bot
    if (values._gotcha) {
      toast.success("Mensaje enviado correctamente. Te responderé pronto.");
      form.reset();
      return;
    }

    const result = await formspreeSubmit(values);

    if (formspreeState.succeeded) {
      toast.success("Mensaje enviado correctamente. Te responderé pronto.");
      form.reset();
      formspreeReset();
    } else if (result?.response?.status && result.response.status >= 400) {
      toast.error("No se pudo enviar el mensaje. Intenta de nuevo.");
    }
  };

  const isSubmitting = form.formState.isSubmitting || formspreeState.submitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@correo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Cuéntame en qué puedo ayudarte"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot: visible para bots, oculto para humanos */}
        <FormField
          control={form.control}
          name="_gotcha"
          render={({ field }) => (
            <input type="text" className="hidden" aria-hidden="true" tabIndex={-1} {...field} />
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </Form>
  );
};
