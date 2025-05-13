
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { Building, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

const Office = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps script
    const loadMap = () => {
      if (!mapLoaded && mapRef.current) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        
        // Define the callback function in the global scope
        window.initMap = () => {
          setMapLoaded(true);
          if (mapRef.current) {
            const location = { lat: 40.7128, lng: -74.0060 }; // New York coordinates
            const map = new google.maps.Map(mapRef.current, {
              center: location,
              zoom: 15,
              styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
              ],
            });
            
            const marker = new google.maps.Marker({
              position: location,
              map: map,
              title: "AskSpace Headquarters"
            });
          }
        };
        
        document.head.appendChild(script);
        
        // Show a toast message while map loads
        toast({
          title: "Loading map",
          description: "The map is being loaded, please wait...",
        });
      }
    };

    loadMap();

    // Clean up
    return () => {
      // Clean up global initMap function
      if (window.initMap) {
        // @ts-ignore
        window.initMap = undefined;
      }
      
      const mapScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (mapScript) {
        mapScript.remove();
      }
    };
  }, [mapLoaded]);

  return (
    <MinimalLayout>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-askspace-red mb-2">Our Office</h1>
          <p className="text-gray-400 mb-10">Visit us at our headquarters</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-askspace-darkgray rounded-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Building className="mr-3 text-askspace-red" />
                  <h2 className="text-xl font-medium">Headquarters</h2>
                </div>
                <p className="mb-6 text-gray-300">Our main office is located in the heart of New York City, easily accessible by public transportation.</p>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-askspace-red mt-1 flex-shrink-0" />
                    <p>350 Fifth Avenue, New York, NY 10118, United States</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 text-askspace-red mt-1 flex-shrink-0" />
                    <p>+1 (212) 555-1234</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 text-askspace-red mt-1 flex-shrink-0" />
                    <div>
                      <p><a href="mailto:hello@askspace.com" className="hover:text-askspace-red transition-colors">hello@askspace.com</a></p>
                      <p><a href="mailto:careers@askspace.com" className="hover:text-askspace-red transition-colors">careers@askspace.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Office Hours</h3>
                <div className="bg-askspace-darkgray rounded-md p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday - Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-askspace-darkgray rounded-md overflow-hidden">
              <div ref={mapRef} className="w-full h-full">
                {!mapLoaded && (
                  <div className="w-full h-full flex items-center justify-center bg-askspace-darkgray">
                    <p className="text-gray-400">Map loading...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-4">Plan a Visit</h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">Interested in learning more about AskSpace? Schedule a visit to our office by contacting us today.</p>
            <Button className="bg-askspace-red hover:bg-askspace-red/80">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </MinimalLayout>
  );
};

export default Office;

// Note: Replace 'YOUR_API_KEY' with a valid Google Maps API key
// For production, implement proper API key handling

// Add TypeScript declaration for the global window
declare global {
  interface Window {
    initMap?: () => void;
  }
}
