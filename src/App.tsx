import { HashRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { ProfileSidebar } from '@/components/layout/ProfileSidebar'
import { Home } from '@/pages/Home'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <LenisProvider>
          <ScrollToTop>
            <ProfileSidebar />
            <div className="flex min-h-screen flex-col md:pl-[clamp(380px,40vw,640px)]">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project/:slug" element={<ProjectDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ScrollToTop>
        </LenisProvider>
      </HashRouter>
    </HelmetProvider>
  )
}

export default App
