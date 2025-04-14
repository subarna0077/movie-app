import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Components/Login"
import { Dashboard } from "./Components/Dashboard"
import { PageNotFound } from "./Components/PageNotFound"
function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path ="/" element={<Login/>}></Route>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>

}

export default App
