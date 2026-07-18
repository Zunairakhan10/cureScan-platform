import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Search from '../pages/Search'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
