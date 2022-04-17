import { Suspense, useContext } from "react"
import "antd/dist/antd.dark.less"
import "antd/dist/antd.less"
import "react-loading-skeleton/dist/skeleton.css"
import { BrowserRouter } from "react-router-dom"

import { Fallback, AnimatedRoutes } from "./shared/components"
import AuthContext from "./shared/context/AuthContext"

const App = () => {
  const authContextData = useContext(AuthContext)

  return (
    <Suspense fallback={<Fallback />}>
      <AuthContext.Provider value={authContextData}>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </Suspense>
  )
}

export default App
