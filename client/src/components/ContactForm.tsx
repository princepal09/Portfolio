import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
    toast.success("Message sent successfully");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col gap-2">
        <label>Name</label>
        <Input type="text" className="bg-secondary/50  hover:border-primary/70 py-5" placeholder="Your Name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Email</label>
        <Input className="bg-secondary/50 hover:border-primary/70 py-5"
          type="email"
          placeholder="example@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2"  >
        <label>Message</label>
        <Textarea 
        className="bg-secondary/50 hover:border-primary/70 min-h-37.5 py-5"
          placeholder="Your message..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-5 w-full" type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;