import { Blob, Squiggle } from "@/components/doodles/intex";
import { SparkCluster } from "@/components/doodles/SparkCluster";
import { motion } from "framer-motion";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
    >
      <div className="relative h-[320vh] w-full">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute right-[-8rem] top-[80px] h-[420px] w-[420px]"
        >
          <Blob className="text-pink/25 h-full w-full" />
        </motion.div>

        <motion.div
          className="absolute left-[6%] top-[140px]"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SparkCluster className="h-28 w-28 text-orange/50 rotate-12" />
        </motion.div>

        {/* PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute left-[-10rem] top-[120vh] w-[900px]"
        >
          <Squiggle className="text-orange/12 w-full" />
        </motion.div>

        <motion.div
          className="absolute left-[-6rem] top-[180vh] h-[520px] w-[520px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Blob className="text-orange/12 h-full w-full" />
        </motion.div>

        <div className="absolute right-[10%] top-[175vh]">
          <SparkCluster className="h-20 w-20 text-pink/40 rotate-150" />
        </div>

        {/* PROJECTS */}
        <motion.div
          className="absolute right-[-12rem] top-[245vh] w-[850px]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Squiggle className="text-pink/10 w-full" />
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[265vh] h-70 w-70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Blob className="text-pink/30 h-full w-full" />
        </motion.div>

        <motion.div
          className="absolute left-[10%] top-[280vh]"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SparkCluster className="h-28 w-28 text-orange/30" />
        </motion.div>

      </div>
    </div>
  );
}