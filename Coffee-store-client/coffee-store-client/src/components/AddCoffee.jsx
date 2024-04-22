import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffe = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const photo = event.target.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo};

    // Send Data to server
    fetch('http://localhost:8000/coffee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
     .then(res => res.json())
     .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Add Success',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
     })
  }
  return (
    <div>
      <div className="bg-slate-100 p-5">
        <h3 className="text-3xl text-center font-bold">Add New Coffee</h3>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffe}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Coffee Quantity"
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <input className="btn btn-block mt-4 bg-blue-300" type="submit" value="Add Coffee" />
        </form>
      </div>
      <Link to="/">
        <button className="bg-slate-300 p-3 mt-16">Back to Home</button>
      </Link>
    </div>
  );
};

export default AddCoffee;
