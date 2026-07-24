import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, CircleDollarSign, Cpu, Sparkles } from 'lucide-react'
import medicines from '../data/medicines'

const infoAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const MedicineDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const medicine = medicines.find((m) => String(m.id) === String(id))

  if (!medicine) {
    return (
      <div className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-8 text-center shadow-[0_24px_60px_-36px_rgba(15,23,42,0.25)] backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-slate-900">Medicine not found</h2>
          <p className="mt-3 text-sm text-slate-600">We couldn't find the medicine you requested.</p>
          <div className="mt-6">
            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
              <ArrowLeft className="h-4 w-4" /> Go back
            </button>
          </div>
        </div>
      </div>
    )
  }

  const related = medicine.relatedMedicines
    .map((relatedId) => medicines.find((item) => item.id === relatedId))
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <motion.article
          initial="hidden"
          animate="visible"
          variants={infoAnim}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.25)] backdrop-blur-xl"
        >
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.6fr_1fr] lg:px-10 lg:py-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  {medicine.type}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {medicine.availability ? 'In Stock' : 'Limited Stock'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {medicine.genericName} alternative
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{medicine.name}</h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {medicine.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Brand price</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">₹{medicine.price}</p>
                  <p className="mt-2 text-sm text-slate-600">{medicine.manufacturer}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Generic price</p>
                  <p className="mt-3 text-3xl font-semibold text-emerald-700">₹{medicine.genericPrice}</p>
                  <p className="mt-2 text-sm text-slate-600">{medicine.genericName}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.2)]">
                  <h2 className="text-sm font-semibold text-slate-900">Dosage</h2>
                  <p className="mt-2 text-sm text-slate-600">{medicine.dosage}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.2)]">
                  <h2 className="text-sm font-semibold text-slate-900">Manufacturer</h2>
                  <p className="mt-2 text-sm text-slate-600">{medicine.manufacturer}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-sky-500/10 via-cyan-50 to-emerald-50/10 p-6 shadow-[0_28px_80px_-42px_rgba(14,165,233,0.28)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">AI Recommendation</p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">{medicine.aiRecommendation}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/80 text-sky-600 shadow-lg shadow-sky-200/50">
                    <Cpu className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-5 rounded-[1.5rem] bg-gradient-to-r from-sky-600/10 via-cyan-50 to-emerald-100/30 p-4 text-sm text-slate-700 ring-1 ring-slate-200/70">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    <Sparkles className="h-3.5 w-3.5" /> Smart guidance
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Availability</p>
                    <p className="mt-2 text-sm text-slate-600">Nearby pharmacies with real-time inventory.</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Verified partners</span>
                </div>

                <div className="mt-5 space-y-3">
                  {medicine.pharmacies.map((pharmacy) => (
                    <div key={pharmacy.name} className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900">{pharmacy.name}</p>
                          <p className="text-sm text-slate-600">{pharmacy.status === 'In Stock' ? 'Available now' : 'Limited supply'}</p>
                        </div>
                      </div>
                      <span className={
                        `rounded-full px-3 py-1 text-sm font-semibold ${pharmacy.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-100 text-amber-800'}`
                      }>
                        {pharmacy.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/70 bg-slate-50/80 px-6 py-8 sm:px-10">
            <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-6 rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Generic alternative</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">{medicine.genericName}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Recommended Alternative
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Brand medicine</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">{medicine.name}</p>
                    <p className="mt-1 text-sm text-slate-600">₹{medicine.price}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Generic alternative</p>
                    <p className="mt-2 text-base font-semibold text-emerald-700">{medicine.genericName}</p>
                    <p className="mt-1 text-sm text-slate-600">₹{medicine.genericPrice}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[1.5rem] bg-emerald-50/90 p-4 text-sm text-emerald-900 shadow-sm">
                  <span className="font-semibold">Save ₹{medicine.savings}</span>
                  <span className="text-slate-600">compared to brand price</span>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.18)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick overview</h2>
                <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="space-y-2 rounded-2xl bg-slate-50/80 p-4">
                    <p className="font-semibold text-slate-900">Composition</p>
                    <p>{medicine.composition.join(', ')}</p>
                  </div>
                  <div className="space-y-2 rounded-2xl bg-slate-50/80 p-4">
                    <p className="font-semibold text-slate-900">Key uses</p>
                    <p>{medicine.uses}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/70 px-6 py-8 sm:px-10">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Related medicines</h2>
                <p className="mt-2 text-sm text-slate-600">Explore other trusted options in the same therapeutic area.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {related.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-5 shadow-[0_22px_48px_-30px_rgba(15,23,42,0.22)] backdrop-blur-xl"
                  >
                    <Link to={`/medicine/${item.id}`} className="group block h-full">
                      <div className="flex items-start justify-between gap-3">
                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                          {item.type}
                        </span>
                        <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          ₹{item.price}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-slate-900 transition group-hover:text-sky-600">{item.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.manufacturer}</p>
                      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>{item.availability ? 'In stock' : 'Limited stock'}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">View</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}

export default MedicineDetails
