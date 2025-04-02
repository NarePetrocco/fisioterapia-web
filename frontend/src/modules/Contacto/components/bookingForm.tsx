//import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
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
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FiLoader } from "react-icons/fi";





const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  phone: z.string().min(9, { message: "El teléfono es requerido" }),
  date: z.date({
    required_error: "Por favor selecciona una fecha",
  }),
  time: z.string({
    required_error: "Por favor selecciona un horario",
  }),
  reason: z.string().min(10, { message: "Por favor describe el motivo de tu consulta" }),
});

// Componente del formulario de reserva mejorado
const BookingForm = () => {
    const form = useForm<z.infer<typeof bookingFormSchema>>({
      resolver: zodResolver(bookingFormSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        reason: "",
      },
    });
  
    async function onSubmit(values: z.infer<typeof bookingFormSchema>) {
      try {
        const loadingToast = toast.loading("Procesando tu reserva...");
        
        // Transformación de datos al formato que espera el backend
        const requestBody = {
          nombrePaciente: values.name,
          email: values.email,
          telefono: values.phone,
          fecha: values.date.toISOString().split('T')[0], // Formato YYYY-MM-DD
          hora: values.time,
          motivo: values.reason
        };
    
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/citas`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error en la reserva");
        }
    
        toast.dismiss(loadingToast);
        toast.success("Cita reservada", {
          description: `Tu cita ha sido agendada para el ${format(values.date, "PPP")} a las ${values.time}`,
          action: {
            label: "Ver",
            onClick: () => console.log("Ver cita"),
          },
        });
        
        form.reset();
        
      } catch (error) {
        toast.dismiss();
        toast.error("Error al reservar", {
          description: error instanceof Error ? error.message : "Ocurrió un error inesperado",
        });
        console.error("Error en reserva:", error);
      }
    }
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sección Calendario y Horarios */}
            <div>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha de la cita</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Selecciona una fecha</span>
                            )}
                            <FaCalendarAlt className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Horario disponible</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-3 gap-2">
                        {['10:00', '11:00','12:00','13:00','14:00','15:30','16:30', '17:30', '18:30', '19:30'].map(time => (
                          <Button
                            variant={field.value === time ? "default" : "outline"}
                            type="button"
                            key={time}
                            onClick={() => field.onChange(time)}
                            disabled={form.formState.isSubmitting}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Sección Datos del Paciente */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Tu nombre" 
                        {...field} 
                        disabled={form.formState.isSubmitting}
                      />
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
                      <Input 
                        placeholder="tu@email.com" 
                        type="email" 
                        {...field} 
                        disabled={form.formState.isSubmitting}
                      />
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
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+34 123 456 789" 
                        type="tel" 
                        {...field} 
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motivo de la consulta</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe el motivo de tu visita" 
                        rows={3} 
                        {...field} 
                        disabled={form.formState.isSubmitting}
                      />
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
                {form.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <FiLoader className="h-4 w-4 animate-spin" />
                    Procesando...
                  </div>
                ) : "Confirmar reserva"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    );
  };

export default BookingForm