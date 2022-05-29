import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {
    const imageApi = 'ef367f576eca302d4916e3889c6e0cc6';

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.image.files[0];
        const shortDescription = e.target.shortDescription.value;
        const quantity = e.target.quantity.value;
        const minimumQuantity = e.target.minimumQuantity.value;
        const price = e.target.price.value;
        const formData = new FormData();
        formData.append('image', photoURL);
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imageApi}`;
        fetch(imgUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const productImage = result.data.image.url;
                const product = {
                    productName: name,
                    productImage: productImage,
                    productDescription: shortDescription,
                    productQuantity: quantity,
                    productMinimumQuantity:minimumQuantity,
                    productPrice: price
                }
                fetch('https://desolate-shelf-92508.herokuapp.com/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId) {
                            console.log(data)
                            // toast.success('Successfully toasted!');
                        }
                    })
            })

        e.target.reset();
        toast.success('Successfully Product Added!');
    }
    return (
        <div className='container'>
            <h1 className='text-2xl mb-5 lg:mb-10 font-bold'>Add A Product</h1>
            <div className="card bg-white lg:w-6/12">
                <div className="card-body">
                    <form onSubmit={handleAddProduct}>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Name</p>
                            <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full" required />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Image</p>
                            <input type="file" name='image' placeholder="Type here" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100" required />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Short Description</p>
                            <textarea name='shortDescription' className="textarea textarea-bordered w-full h-24" placeholder="Short Description" required></textarea>
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Quantity</p>
                            <input type="number" name='quantity' placeholder="Type here" className="input input-bordered w-full" required />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Minimum Quantity</p>
                            <input type="number" name='minimumQuantity' placeholder="Type here" className="input input-bordered w-full" required />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Price</p>
                            <input type="number" name='price' placeholder="Type here" className="input input-bordered w-full" required />
                        </div>
                        <div className='product-input my-5'>
                            <input type="submit" className="btn btn-primary" value='Add' required />
                        </div>
                    </form>
                </div>
            </div>
            <div className='z-50'>
                <Toaster
                    position="bottom-center"
                    reverseOrder={true}
                />
            </div>
        </div>
    );
};

export default AddProduct;