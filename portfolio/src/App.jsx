import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Metrics } from './components/sections/Metrics'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectProvider } from './data/projectStore'
import './App.css'

function App() {
  return (
    <ProjectProvider><BrowserRouter><Routes><Route path="/" element={<PortfolioLayout />} /><Route path="/projets" element={<PageLayout><ProjectsPage /></PageLayout>} /><Route path="/projets/:slug" element={<PageLayout><ProjectDetailPage /></PageLayout>} /><Route path="/admin" element={<Navigate to="/" replace />} /></Routes></BrowserRouter></ProjectProvider>
  )
}

function PortfolioLayout() {
  return <PageLayout><main><Hero /><About /><Skills /><Education /><Projects /><Metrics /><Contact /></main></PageLayout>
}

function PageLayout({ children }) {
  return <div className="site-shell"><Navbar />{children}<Footer /></div>
}

export default App
