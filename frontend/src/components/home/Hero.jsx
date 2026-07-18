import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Pill, Search, ShieldCheck } from 'lucide-react'

function Hero() {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState('idle')
  const [query, setQuery] = useState("");

  const handleSearch = () => {
  if (!query.trim()) {
    alert("Please enter a medicine name")
    return
  }

  navigate(`/search?medicine=${query}`)
}

  return (
    <section className="hero-surface relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-mesh absolute inset-0" />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -16, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-blob hero-blob-blue"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-blob hero-blob-emerald"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur"
          >
            <BadgeCheck className="h-4 w-4" />
            AI Powered Medicine Search Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.12 }}
            className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Find the Right Medicine at the Right Price.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Compare medicine prices, discover affordable generic alternatives, and make smarter healthcare decisions.
          </motion.p>
          <div className="mt-8 max-w-md">
  <input
    type="text"
    placeholder="Search medicine..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
  />
</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(59, 130, 246, 0.24)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-100"
            >
              Search Medicines
              <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Search className="h-4 w-4" />
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Explore Platform
              <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.12 }}
          className="relative"
        >
          <motion.div
            animate={searchState === 'searching' ? { y: [0, -10, 0], scale: [1, 1.01, 1], rotate: [0, 0.8, 0] } : { y: [0, -10, 0], scale: 1, rotate: 0 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ y: -6, scale: 1.01, rotate: -1 }}
            className="relative rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-8"
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
                  <span className="font-semibold">₹180</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Safety rating</span>
                  <span className="flex items-center gap-2 font-semibold text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    Verified
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/90 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {searchState === 'searching' ? 'Searching...' : searchState === 'found' ? '✔ Medicine Found' : 'Ready to search'}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {searchState === 'found' ? 'Generic Available' : 'Compare trusted options instantly'}
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    {searchState === 'found' ? '₹18' : 'Live'}
                  </div>
                </div>
                {searchState === 'found' && (
                  <p className="mt-3 text-sm font-semibold text-blue-700">Estimated Savings ₹18</p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
