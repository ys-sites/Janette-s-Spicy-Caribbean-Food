import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  const address = "5B Av. 3e S, Roxboro, QC H8Y 2L3";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative min-h-[600px] flex items-end justify-end p-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/store.jpg?v=1')" }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Info Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white p-10 rounded-3xl shadow-xl max-w-lg text-center border border-gray-100 transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-[#F25C05]" />
        </div>
        <h3 className="text-3xl font-bold mb-3 text-gray-900 tracking-tight">JANETTE'S SPICY</h3>
        <p className="text-gray-600 mb-8 text-lg font-medium">{address}</p>
        <motion.a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-[#F25C05] text-white font-bold py-4 px-8 rounded-full hover:bg-[#d65204] transition-all shadow-lg hover:shadow-orange-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          OPEN IN MAPS
          <motion.div
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
