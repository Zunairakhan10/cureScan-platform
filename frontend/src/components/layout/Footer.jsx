import { HeartPulse, ShieldCheck } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950/95 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 p-2.5">
              <HeartPulse className="h-5 w-5 text-white" />
            </div>
            <p className="text-lg font-semibold text-white">CureScan</p>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Helping people find the right medicine at the right price with clarity and confidence.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Trusted medicine insights for better care decisions.
        </div>
      </div>
    </footer>
  )
}

export default Footer
