
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { Building, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

const Office = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  
  useEffect(() => {
    // Keep track of whether the component is mounted
    let isMounted = true;
    
    // Define the initialization function
    function initializeMap() {
      try {
        if (!mapRef.current || !window.google?.maps) return;
        
        const location = { lat: 40.7128, lng: -74.0060 }; // New York coordinates
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
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
        
        markerRef.current = new google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          title: "AskSpace Headquarters"
        });
        
        if (isMounted) {
          setMapLoaded(true);
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        if (isMounted) {
          toast({
            title: "Map error",
            description: "There was a problem displaying the map.",
            variant: "destructive",
          });
        }
      }
    }

    // Setup Google Maps
    function loadGoogleMaps() {
      // If Google Maps is already loaded, initialize map directly
      if (window.google?.maps) {
        initializeMap();
        return;
      }
      
      // Don't create duplicate script if one already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // If script exists but Google Maps isn't ready yet, wait for it
        const checkGoogleMaps = setInterval(() => {
          if (window.google?.maps && isMounted) {
            clearInterval(checkGoogleMaps);
            initializeMap();
          }
        }, 100);
        
        return () => {
          clearInterval(checkGoogleMaps);
        };
      }

      // Create our own callback function name to avoid collisions
      const callbackName = `initMap_${Date.now()}`;
      
      // Set global callback that Google Maps will call when loaded
      window[callbackName] = () => {
        if (isMounted) {
          initializeMap();
          // Clean up the callback once it's used
          delete window[callbackName];
        }
      };

      try {
        // Show loading indicator
        if (isMounted) {
          toast({
            title: "Loading map",
            description: "The map is being loaded, please wait...",
          });
        }
        
        // Create and load the script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=${callbackName}&loading=async`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          if (isMounted) {
            toast({
              title: "Map loading error",
              description: "Could not load the map. Please try again later.",
              variant: "destructive",
            });
            // Clean up callback on error
            delete window[callbackName];
          }
        };
        
        document.head.appendChild(script);
        
        // No need to store the script reference for removal since we're using a unique callback
      } catch (err) {
        console.error("Error loading Google Maps:", err);
      }
    }

    // Load the map
    loadGoogleMaps();

    // Cleanup function
    return () => {
      isMounted = false;
      
      // Clean up map instance references
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      
      mapInstanceRef.current = null;
    };
  }, []);

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
            {/* Office information side */}
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
              
              {/* Office hours */}
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
            
            {/* Map side */}
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
          
          {/* Contact section */}
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

// Add TypeScript declaration for the global window
declare global {
  interface Window {
    [key: string]: any;
    google?: typeof google;
  }
}
