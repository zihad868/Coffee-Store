import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl'>Vite + React</h1>
      <Link to='/addCoffee'> <button className='bg-slate-300 p-3'>Add Coffee</button></Link>
      <Link to='/updateCoffee'> <button className='bg-slate-300 p-3'>Update Coffee</button></Link>
    </>
  )
}

export default App
