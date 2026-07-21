import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Home from '../pages/Home'
import Search from '../pages/Search'
import MedicineDetails from '../pages/MedicineDetails'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/medicine/:id" element={<MedicineDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
