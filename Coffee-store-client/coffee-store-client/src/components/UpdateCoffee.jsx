import { Link } from "react-router-dom";

const UpdateCoffee = () => {
    return (
        <div>
            <h3 className="text-2xl">Update Coffee</h3>

            <Link to='/'> <button className='bg-slate-300 p-3'>Home</button></Link>
        </div>
    );
};

export default UpdateCoffee;