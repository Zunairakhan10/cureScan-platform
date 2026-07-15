import { motion } from 'framer-motion'
import { GitBranch, HeartPulse, Link2, Mail } from 'lucide-react'

const quickLinks = ['Home', 'Features', 'About', 'Get Started']

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111F] text-slate-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 p-2.5 shadow-lg shadow-blue-950/20">
                <HeartPulse className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg font-semibold text-white">CureScan</p>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Helping people compare medicine prices, discover affordable generic alternatives, and make smarter healthcare decisions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '/' : link === 'Get Started' ? '#contact' : `#${link.toLowerCase()}`}
                    className="transition duration-200 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:hello@curescan.com" className="transition duration-200 hover:text-white">
                  hello@curescan.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-slate-300" />
                <a href="https://github.com" target="_blank" rel="noreferrer" className="transition duration-200 hover:text-white">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-slate-300" />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition duration-200 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 CureScan. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-rose-400">❤️</span> by Zunaira Khan Pathan
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
