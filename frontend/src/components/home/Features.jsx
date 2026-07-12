import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeDollarSign, SearchCheck, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Smart Medicine Search',
    description: 'Find prescriptions and over-the-counter medicines instantly with a fast, intelligent search experience.',
    icon: SearchCheck,
    accent: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Generic Alternatives',
    description: 'Discover affordable, equivalent alternatives to brand-name medicines without compromising quality.',
    icon: Sparkles,
    accent: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Price Comparison',
    description: 'Compare medicine prices across trusted pharmacies and choose the best value in seconds.',
    icon: BadgeDollarSign,
    accent: 'from-violet-600 to-indigo-500'
  },
  {
    title: 'Trusted Medicine Information',
    description: 'Access verified, clear medicine guidance to make confident and informed health decisions.',
    icon: ShieldCheck,
    accent: 'from-amber-500 to-orange-500'
  }
]

function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Features</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Everything you need to compare and choose smarter.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] transition duration-300 hover:shadow-[0_25px_70px_-20px_rgba(37,99,235,0.25)]"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${feature.accent} p-3 text-white`}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
