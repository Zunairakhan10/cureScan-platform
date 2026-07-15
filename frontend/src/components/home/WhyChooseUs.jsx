import { motion } from 'framer-motion'
import { CheckCircle2, HeartHandshake } from 'lucide-react'

const benefits = [
  'Fast, intuitive searches for everyday medicine needs.',
  'Transparent price comparisons that save money and time.',
  'Reliable, easy-to-understand medicine information for better choices.'
]

function WhyChooseUs() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-blue-50/70 p-8 shadow-[0_25px_80px_-30px_rgba(37,99,235,0.35)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Why CureScan</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            A smarter way to choose medicines with confidence.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            CureScan brings clarity, price transparency, and trusted guidance into one elegant experience designed for modern healthcare decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)]"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-700">
            <HeartHandshake className="h-6 w-6" />
            <p className="font-semibold">Built for clearer, more affordable care choices</p>
          </div>
          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
