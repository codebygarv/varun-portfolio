import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import ProjectDetails from "./pages/ProjectDetails"
import Contact from "./pages/Contact"
import Certificates from "./pages/Certificates"

const App = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<ProjectDetails />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App