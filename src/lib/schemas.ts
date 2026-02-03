import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10).max(500),
  _gotcha: z.string().optional().default(""),
});
