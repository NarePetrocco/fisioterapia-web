//import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from 'emailjs-com';




// Esquemas de validación
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});




// Componente del formulario de contacto mejorado
const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const sendEmail = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      // Usar EmailJS para enviar el formulario
      await emailjs.send(
        "service_l9o7ykf",  // Reemplaza con tu Service ID
        "template_0ulxo4d", // Reemplaza con tu Template ID
        {
          name: values.name,
          email: values.email,
          phone: values.phone || "No proporcionado",
          message: values.message,
        },      // Datos del formulario
        "0Xg_7VFbkIMsOVN4u"      // Reemplaza con tu User ID
      );
      toast.success("Mensaje enviado", {
        description: "Hemos recibido tu consulta. Te responderemos pronto.",
      });
      form.reset();
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Ocurrió un error al enviar tu mensaje. Por favor inténtalo de nuevo.",
      });
    }
  };

    // Función que se ejecuta cuando el formulario es enviado
    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
      await sendEmail(values);
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="tu@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="+34 123 456 789" type="tel" {...field} />
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
              <FormLabel>Tu mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe tu consulta aquí..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-[var(--custom-green)]"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm