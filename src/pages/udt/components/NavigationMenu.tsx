
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';

interface NavigationMenuProps {
  trackLinkClick: (linkName: string) => void;
  trackCTAClick: (ctaName: string, destinationId?: string) => void;
}

const UDTNavigationMenu: React.FC<NavigationMenuProps> = ({ trackLinkClick, trackCTAClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-bold text-orange-600"
              onClick={() => trackLinkClick('logo')}
            >
              Well-done
            </a>
            <span className="ml-2 text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">
              Szkolenia UDT
            </span>
          </div>
          
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    onClick={() => trackLinkClick('home')}
                    href="#"
                  >
                    Strona główna
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Szkolenia</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem 
                        title="Wózki widłowe" 
                        href="#offerings"
                        onClick={() => trackLinkClick('forklift')}
                      >
                        Szkolenia na wszystkie kategorie wózków jezdniowych
                      </ListItem>
                      <ListItem 
                        title="Podesty ruchome" 
                        href="#offerings"
                        onClick={() => trackLinkClick('platforms')}
                      >
                        Podesty przejezdne i wolnobieżne
                      </ListItem>
                      <ListItem 
                        title="Suwnice" 
                        href="#offerings"
                        onClick={() => trackLinkClick('cranes')}
                      >
                        Suwnice hakowe i specjalistyczne
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    onClick={() => trackCTAClick('nav-process', 'process')}
                    href="#process"
                  >
                    Proces
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    onClick={() => trackCTAClick('nav-faq', 'faq')}
                    href="#faq"
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    onClick={() => trackCTAClick('nav-contact', 'contact-form')}
                    href="#contact-form"
                  >
                    Kontakt
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="ml-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-orange-600" />
              <a href="tel:+48123456789" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">
                +48 123 456 789
              </a>
            </div>
            
            <Button 
              className="ml-4 bg-orange-600 hover:bg-orange-700"
              onClick={() => trackCTAClick('nav-contact-button', 'contact-form')}
            >
              Zapisz się na szkolenie
            </Button>
          </div>
          
          <Button 
            size="sm"
            className="md:hidden bg-orange-600 hover:bg-orange-700"
            onClick={() => trackCTAClick('mobile-nav-contact', 'contact-form')}
          >
            Kontakt
          </Button>
        </div>
      </div>
    </div>
  );
};

// Extension component for styled links
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-700 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default UDTNavigationMenu;
