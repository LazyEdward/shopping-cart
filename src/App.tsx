import DefaultLayout from "layout/defaultLayout"
import Home from "pages/home"
import Login from "pages/login"
import { Routes, Route, Navigate } from "react-router-dom"
import { normalPageRoutes } from "routes"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultLayout/>}>
          {normalPageRoutes.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
