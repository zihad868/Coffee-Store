import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, taste, category, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" bg-base-200">
      <div className="grid grid-cols-3">
        <div>
          <img src={photo} className="rounded-lg shadow-2xl w-60 h-80" />
        </div>
        <div className="">
          <p>
            <span className="font-bold">Name: </span> {name}
          </p>
          <p>
            <span className="font-bold">Quantity: </span> {quantity}
          </p>
          <p>
            <span className="font-bold">Taste: </span> {taste}
          </p>
          <p>
            <span className="font-bold">Category: </span> {category}
          </p>
        </div>

        <div>
          <div className="join join-vertical space-y-4">
            <button className="btn bg-purple-300">View</button>
            <Link to={`/updateCoffee/${_id}`}><button className="btn bg-secondary">Edit</button></Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;

CoffeCard.propTypes = {
  coffee: PropTypes.object.isRequired
};
