import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CircleDollarSign } from "lucide-react";

const MedicineCard = ({ medicine }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-[1.4rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.55)] backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {medicine.type}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{medicine.name}</h3>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 p-3 text-white shadow-lg">
          <CircleDollarSign className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 flex-1 space-y-3 text-sm text-slate-600">
        <div className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50/80 p-3">
          <span className="font-medium text-slate-500">Manufacturer</span>
          <span className="text-right font-semibold text-slate-800">{medicine.manufacturer}</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 p-3">
          <span className="font-medium text-slate-500">Price</span>
          <span className="text-lg font-semibold text-slate-900">₹{medicine.price}</span>
        </div>
        <p className="leading-7 text-slate-600">{medicine.description}</p>
      </div>

      <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-[1rem] bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-200 hover:shadow-xl">
        View Details
        <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.article>
  );
};

export default MedicineCard;
