import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Stethoscope, Menu } from 'lucide-react'

const navLinks = ['Home', 'Features', 'About', 'Contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${scrolled ? 'border-slate-200/80 bg-white/75 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.24)]' : 'border-slate-200/60 bg-white/70'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.06, rotate: 4 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 p-2.5 shadow-lg shadow-blue-100"
          >
            <Stethoscope className="h-5 w-5 text-white" />
          </motion.div>
          <div>
            <p className="text-lg font-semibold text-slate-900">CureScan</p>
            <p className="text-xs text-slate-500">Smart medicine insights</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const href = link === 'Home' ? '/' : `#${link.toLowerCase()}`
            return (
              <motion.a
                key={link}
                href={href}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="group relative text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 22px rgba(59, 130, 246, 0.18)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(16, 185, 129, 0.24)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-100"
          >
            Get Started
          </motion.button>
        </div>

        <button className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </motion.header>
  )
}

export default Navbar
