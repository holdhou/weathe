import { HashRouter, Route, Routes } from "react-router-dom"
import { PageNotFound } from "./Pages/PageNotFound"
import { Home } from "./Pages/Home"

const Router=()=>{
  return<HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
  </HashRouter>
}

export default Router;