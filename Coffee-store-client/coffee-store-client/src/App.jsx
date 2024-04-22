import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './components/CoffeCard';
import { useState } from 'react';

function App() {
  const loderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loderCoffees);

  return (
    <>
      <h1 className='text-3xl font-bold text-center text-purple-300'>Coffee Shop</h1>

      <div className='grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee} />)
        }
      </div>
      <Link to='/addCoffee'> <button className='bg-slate-300 p-3'>Add Coffee</button></Link>
      <Link to='/updateCoffee'> <button className='bg-slate-300 p-3'>Update Coffee</button></Link>
    </>
  )
}

export default App
