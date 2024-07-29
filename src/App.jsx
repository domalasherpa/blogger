import { RouterProvider } from 'react-router-dom'
import './App.css'
import RootRoute from './routes/RootRoute'

function App() {
  return (<RouterProvider router={RootRoute} />)
}

export default App
