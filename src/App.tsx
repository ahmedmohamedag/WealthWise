import { RouterProvider } from "react-router-dom"
import router from "./routers"
const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
export default App