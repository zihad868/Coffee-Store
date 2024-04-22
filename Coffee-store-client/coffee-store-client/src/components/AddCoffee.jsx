import { Link } from "react-router-dom";

const AddCoffee = () => {
    return (
        <div>
            <h3 className="text-2xl">Add Coffee</h3>

            <Link to='/'> <button className='bg-slate-300 p-3'>Home</button></Link>
        </div>
    );
};

export default AddCoffee;