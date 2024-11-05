import AppRoute from "./routes/AppRoute"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 

  return (
    <>
      <AppRoute />
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  )
}

export default App
