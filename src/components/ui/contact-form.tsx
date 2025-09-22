import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service_type?: string;
  preferred_contact: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      preferred_contact: 'email'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://nvcswkvuomgiyokjbvii.supabase.co/functions/v1/airtable-contact-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Y3N3a3Z1b21naXlva2pidmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MzcxOTAsImV4cCI6MjA3NDAxMzE5MH0.AojAwcCayIXzqrcnWe5LHfHS7Jt5tm3z1YxJkJ9c9CM`
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="card-professional">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          We offer an initial 30-minute consultation to assess your options and provide a transparent quote.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_type">Service Needed</Label>
            <Select onValueChange={(value) => setValue("service_type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="temporary-residency">Temporary Residency</SelectItem>
                <SelectItem value="permanent-residency">Permanent Residency</SelectItem>
                <SelectItem value="mexican-citizenship">Mexican Citizenship</SelectItem>
                <SelectItem value="work-visas">Work Visas</SelectItem>
                <SelectItem value="family-immigration">Family-Based Immigration</SelectItem>
                <SelectItem value="corporate-immigration">Corporate Immigration</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred_contact">Preferred Contact Method</Label>
            <Select 
              defaultValue="email" 
              onValueChange={(value) => setValue("preferred_contact", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Please describe your immigration needs and any specific questions you have..."
              className="min-h-[120px]"
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
        
        <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg mt-4">
          <strong>Privacy Notice:</strong> Your information is confidential and used only to contact you about your case. 
          We never share personal information with third parties.
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;