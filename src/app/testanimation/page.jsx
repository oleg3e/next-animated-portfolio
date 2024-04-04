"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-500 rounded-xl"
        initial={{ x: -100 }}
        animate={{ x: 400, y: 300, rotate: 180 }}
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
