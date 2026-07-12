import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Pill, Search, ShieldCheck } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -16, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-8%] top-[-6%] -z-10 h-44 w-44 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-8%] right-[-4%] -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/25 to-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, 6, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[12%] top-[18%] -z-10 h-20 w-20 rounded-full border border-white/60 bg-white/20 backdrop-blur-xl"
      />
      <motion.div
        animate={{ rotate: [0, -8, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[16%] left-[8%] -z-10 h-16 w-16 rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/50 to-cyan-50/20 backdrop-blur-xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Trusted by modern healthcare seekers
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the Right Medicine at the Right Price.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Compare medicine prices, discover affordable generic alternatives, and make smarter healthcare decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-100"
            >
              Search Medicines
              <Search className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-emerald-500/10" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Medicine overview</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-900">Paracetamol 500mg</h2>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <Pill className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-2xl bg-slate-900/95 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Generic alternative</span>
                  <span className="font-semibold">Acetaminophen</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Average price</span>
                  <span className="font-semibold">$4.20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Safety rating</span>
                  <span className="flex items-center gap-2 font-semibold text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    Verified
                  </span>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Best value</p>
                  <p className="mt-1 font-semibold text-slate-900">$2.90 at City Pharmacy</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Availability</p>
                  <p className="mt-1 font-semibold text-slate-900">In stock today</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
