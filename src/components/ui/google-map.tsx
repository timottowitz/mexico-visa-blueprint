import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GoogleMapProps {
  address: string;
  title?: string;
}

const GoogleMap = ({ address, title = "Our Location" }: GoogleMapProps) => {
  // Simple Google Maps embed (no API key needed)
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const encodedAddress = encodeURIComponent(address);

  return (
    <Card className="card-professional">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
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