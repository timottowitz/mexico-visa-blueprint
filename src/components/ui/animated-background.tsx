import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  const floatingShapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
          }}
          initial={{
            x: shape.initialX,
            y: shape.initialY,
            opacity: 0,
          }}
          animate={{
            x: [
              shape.initialX,
              shape.initialX + 200,
              shape.initialX - 100,
              shape.initialX
            ],
            y: [
              shape.initialY,
              shape.initialY - 150,
              shape.initialY + 100,
              shape.initialY
            ],
            opacity: [0, 0.4, 0.2, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export const ParallaxText = ({ 
  children, 
  speed = 0.5,
  className = ""
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: -20 * speed }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnHover = ({ 
  children,
  scale = 1.05,
  className = ""
}: {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};