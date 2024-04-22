import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffe = (event) => {
        event.preventDefault();
    
        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const taste = event.target.taste.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;
    
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
    
        // Send Data to server
        fetch(`http://localhost:8000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
         .then(res => res.json())
         .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Update Success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })
      }
    return (
        <div>
        <div className="bg-slate-100 p-5">
          <h3 className="text-3xl text-center font-bold">Update Coffee</h3>
          <form onSubmit={handleUpdateCoffe}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Coffee Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
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
                    defaultValue={supplier}
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
                    defaultValue={category}
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
                      defaultValue={quantity}
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
                      defaultValue={taste}
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
                      defaultValue={details}
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
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>
            <input className="btn btn-block mt-4 bg-blue-300" type="submit" value="Updated Coffee" />
          </form>
        </div>
        <Link to="/">
          <button className="bg-slate-300 p-3 mt-16">Back to Home</button>
        </Link>
      </div>
    );
};

export default UpdateCoffee;