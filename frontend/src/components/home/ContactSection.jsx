import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto flex min-h-[300px] max-w-5xl items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/10 px-6 py-10 shadow-[0_30px_90px_-35px_rgba(2,6,23,0.75)] backdrop-blur-xl sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />
        <div className="absolute left-[-8%] top-[-8%] h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-8%] h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-200 backdrop-blur">
            <Mail className="h-4 w-4 text-emerald-400" />
            hello@curescan.com
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Better Healthcare Together
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Questions, feedback, or partnership ideas? We&apos;d love to hear from you.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(16, 185, 129, 0.28)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/20"
          >
            Contact Us
            <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
