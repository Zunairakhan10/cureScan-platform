import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

function CTA() {
  return (
    <section id="contact" className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/60 bg-slate-950 px-6 py-10 text-center text-white shadow-[0_30px_100px_-30px_rgba(2,6,23,0.8)] sm:px-10 lg:px-14 lg:py-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-8%] h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-[650px] flex-col items-center">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-200 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Better medicine decisions start here
          </motion.div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Ready to make smarter healthcare choices?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Explore trusted medicine information and compare prices effortlessly with CureScan.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(16, 185, 129, 0.28)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/20"
          >
            Get Started
            <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Secure • Fast • Reliable
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
