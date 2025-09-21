import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  return (
    <Card className="card-professional">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          We offer an initial 30-minute consultation to assess your options and provide a transparent quote.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <iframe 
          className="airtable-embed w-full" 
          src="https://airtable.com/embed/appOngYuxgEaPUzAW/pagh1KZUjKLq03hGP/form" 
          frameBorder="0" 
          width="100%" 
          height="533" 
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
        
        <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg mt-4">
          <strong>Privacy Notice:</strong> Your information is confidential and used only to contact you about your case. 
          We never share personal information with third parties.
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;