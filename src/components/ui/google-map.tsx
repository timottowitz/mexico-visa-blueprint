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
        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted/20 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Mexico Immigration Lawyer</h3>
          <p className="text-sm text-muted-foreground mb-4">{address}</p>
          <a 
            href={`https://maps.google.com/?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View on Google Maps
          </a>
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