import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', textDecoration: 'none' }}>
          CureScane
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: '#334155', textDecoration: 'none' }}>Home</Link>
          <a href="#features" style={{ color: '#334155', textDecoration: 'none' }}>Features</a>
          <a href="#about" style={{ color: '#334155', textDecoration: 'none' }}>About</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
