import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GoogleMapProps {
  address: string;
  title?: string;
}

const GoogleMap = ({ address, title = "Our Location" }: GoogleMapProps) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <Card className="card-professional">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.520329585927!2d-99.16138992317408!3d19.3899115818805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff08db4acbe1%3A0x8fc4df742311fa57!2sC.%20J.%20Enrique%20Pestalozzi%20635%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1758423750958!5m2!1sen!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p className="font-medium">{address}</p>
          <a 
            href={`https://maps.google.com/?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-hover transition-colors inline-flex items-center mt-2"
          >
            Open in Google Maps →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMap;