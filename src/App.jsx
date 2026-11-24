import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Main from './pages/Main'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
