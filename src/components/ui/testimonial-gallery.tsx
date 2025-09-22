import { motion } from "framer-motion";
import { Star } from "lucide-react";
import client1 from "@/assets/testimonials/client-1.jpg";
import client2 from "@/assets/testimonials/client-2.jpg";
import client3 from "@/assets/testimonials/client-3.jpg";
import client4 from "@/assets/testimonials/client-4.jpg";
import client5 from "@/assets/testimonials/client-5.jpg";
import client6 from "@/assets/testimonials/client-6.jpg";

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Austin → Mexico City",
    image: client1,
    rating: 5
  },
  {
    name: "James Chen",
    location: "Vancouver → Playa del Carmen",
    image: client2,
    rating: 5
  },
  {
    name: "Sarah Thompson",
    location: "Chicago → Guadalajara",
    image: client3,
    rating: 5
  },
  {
    name: "Robert Martinez",
    location: "Phoenix → Puerto Vallarta",
    image: client4,
    rating: 5
  },
  {
    name: "Jennifer Kim",
    location: "Seattle → Tulum",
    image: client5,
    rating: 5
  },
  {
    name: "David Wilson",
    location: "Toronto → Merida",
    image: client6,
    rating: 5
  }
];

export default function TestimonialGallery() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            ✨ Recent Mexican Residency Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of Americans & Canadians who trusted us with their Mexico immigration journey
          </p>
        </motion.div>
      </div>
      
      <div className="relative">
        {/* Auto-scrolling testimonial strip */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "200%" }}
        >
          {/* First set of testimonials */}
          <div className="flex space-x-6" style={{ width: "50%" }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 bg-card rounded-xl p-6 shadow-lg border w-80"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Mexico residency success story`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-medium text-center text-sm">
                    ✅ APPROVED IN 90 DAYS
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-6" style={{ width: "50%" }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 bg-card rounded-xl p-6 shadow-lg border w-80"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Mexico residency success story`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-medium text-center text-sm">
                    ✅ APPROVED IN 90 DAYS
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}