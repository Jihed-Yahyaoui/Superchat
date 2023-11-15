"use client";
import { motion } from "framer-motion";
import { animate } from "framer-motion";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: "2rem" }} // Initial style
      whileInView={{ opacity: 1, y: "0" }} // Target animation style
      viewport={{ once: true }} // Animation will happen once
      transition={{ ease: "easeInOut", duration: 0.7 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.35 },
      }}
      className={clsx(
        "shadow-lg hover:shadow-xl transition-shadow rounded-md sm:rounded-lg bg-slate-900 p-4 sm:p-6 flex flex-col items-center text-center w-full min-h-full max-h-fit gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
