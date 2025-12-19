"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
}

export const Slide = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -30, y: 0 };
      case "right":
        return { x: 30, y: 0 };
      case "down":
        return { x: 0, y: 30 };
      case "up":
      default:
        return { x: 0, y: -30 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
