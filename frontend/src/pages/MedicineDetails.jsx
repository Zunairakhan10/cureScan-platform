import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CircleDollarSign } from 'lucide-react'
import medicines from '../data/medicines'

const MedicineDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const medicine = medicines.find((m) => String(m.id) === String(id))

  if (!medicine) {
    return (
      <div className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-[1.25rem] border border-slate-200/80 bg-white/80 p-8 text-center">
          <h2 className="text-xl font-semibold">Medicine not found</h2>
          <p className="mt-3 text-sm text-slate-600">We couldn't find the medicine you requested.</p>
          <div className="mt-6">
            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white">Go back</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-600">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <article className="mt-6 rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-md">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                {medicine.type}
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-slate-900">{medicine.name}</h1>
              <p className="mt-2 text-sm text-slate-600">by {medicine.manufacturer}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-700">
                  {medicine.availability ? 'In stock' : 'Out of stock'}
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">₹{medicine.price}</span>
                  <CircleDollarSign className="h-4 w-4 text-slate-500" />
                </div>

                {medicine.generic && (
                  <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white/60 px-3 py-1 text-sm font-medium text-slate-700">
                    Generic: <span className="font-semibold">{medicine.generic}</span>
                  </div>
                )}

                {medicine.savings != null && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-800">
                    Estimated savings: ₹{medicine.savings}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="h-28 w-28 rounded-2xl bg-slate-100" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-4 text-slate-700">
              <p className="text-sm leading-7">{medicine.description}</p>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Dosage</h3>
                <p className="mt-1 text-sm text-slate-600">{medicine.dosage}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Composition</h3>
                <ul className="mt-1 list-inside list-disc text-sm text-slate-600">
                  {medicine.composition.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Uses</h3>
                <p className="mt-1 text-sm text-slate-600">{medicine.uses}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Side effects</h3>
                <ul className="mt-1 list-inside list-disc text-sm text-slate-600">
                  {medicine.sideEffects.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Alternatives</h3>
                <p className="mt-1 text-sm text-slate-600">{medicine.alternatives.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-[1rem] bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white">Buy</button>
            <button onClick={() => navigate('/search')} className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">Back to search</button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default MedicineDetails
