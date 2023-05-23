import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function GradiantAppear({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <motion.div
        initial={false}
        animate={
          isInView
            ? { WebkitMaskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
