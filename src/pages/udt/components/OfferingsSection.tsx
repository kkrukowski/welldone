
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface OfferingProps {
  trackCTAClick: (ctaName: string, destinationId?: string) => void;
}

const OfferingsSection: React.FC<OfferingProps> = ({ trackCTAClick }) => {
  const offerings = [
    {
      title: "Wózki widłowe",
      description: "Szkolenia na wszystkie kategorie wózków jezdniowych podnośnikowych",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      alt: "Operator wózka widłowego podczas pracy w magazynie",
      features: ["Kategorie I WJO", "Kategorie II WJO", "Kategorie III WJO"]
    },
    {
      title: "Podesty ruchome",
      description: "Szkolenia na podesty przejezdne, wolnobieżne i przewoźne",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      alt: "Podest ruchomy nożycowy używany podczas prac na wysokości",
      features: ["Podesty nożycowe", "Podesty przejezdne", "Podesty montowane"]
    },
    {
      title: "Suwnice",
      description: "Pełne szkolenia na obsługę suwnic hakowych i specjalistycznych",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      alt: "Suwnica przemysłowa w hali produkcyjnej",
      features: ["Suwnice sterowane z kabiny", "Suwnice sterowane z poziomu", "Suwnice specjalistyczne"]
    },
    {
      title: "Układnice magazynowe",
      description: "Profesjonalne szkolenia z obsługi układnic wysokiego składowania",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      alt: "Układnica magazynowa wysokiego składowania w nowoczesnym magazynie",
      features: ["Układnice półautomatyczne", "Układnice automatyczne", "Układnice specjalistyczne"]
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Dostępne szkolenia UDT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksowe szkolenia na wszystkie rodzaje urządzeń transportu bliskiego objętych nadzorem UDT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard 
              key={index} 
              offering={offering} 
              trackCTAClick={trackCTAClick} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Nie znalazłeś interesującego Cię szkolenia? Skontaktuj się z nami!
          </p>
          <Button 
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => trackCTAClick('see-more-offerings', 'contact-form')}
          >
            Sprawdź wszystkie szkolenia
          </Button>
        </div>
      </div>
    </section>
  );
};

interface OfferingCardProps {
  offering: {
    title: string;
    description: string;
    image: string;
    alt: string;
    features: string[];
  };
  trackCTAClick: (ctaName: string, destinationId?: string) => void;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ offering, trackCTAClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-48">
      <img 
        src={offering.image} 
        alt={offering.alt} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
        {offering.title}
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-6">
        {offering.description}
      </p>
      <ul className="space-y-2 mb-6">
        {offering.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full bg-orange-600 hover:bg-orange-700 mt-2"
        onClick={() => trackCTAClick(`offering-${offering.title}`, 'contact-form')}
      >
        Zapisz się na szkolenie
      </Button>
    </div>
  </div>
);

export default OfferingsSection;
