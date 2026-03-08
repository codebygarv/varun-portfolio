import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"

const App = () => {
  return (
    <div className="h-screen w-screen bg-black/90 text-white">
      <Routes> 
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} />   */}
      </Route>
    </Routes>
    </div>
  )
}

export default App  