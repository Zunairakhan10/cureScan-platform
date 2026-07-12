import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

function CTA() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-12 text-center text-white shadow-[0_30px_100px_-30px_rgba(2,6,23,0.8)] sm:px-10 lg:px-14 lg:py-16"
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-200">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Better medicine decisions start here
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to make smarter healthcare choices?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Explore trusted medicine information and compare prices effortlessly with CureScan.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(16, 185, 129, 0.35)' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
