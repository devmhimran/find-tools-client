import React from 'react';
import toast from 'react-hot-toast';

const DeleteConfirmModal = ({cancelOrder, refetch, setCancelOrder}) => {
    const {_id, productName, productPrice, quantity} = cancelOrder;
    const total = productPrice * quantity;
    const handleCancel = () =>{
        fetch(`https://desolate-shelf-92508.herokuapp.com/order/${_id}` , {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                toast.success('Successfully Cancelled!')
                setCancelOrder(null);
                refetch();
            }
        })
    }
    return (
        <div className='z-50'>
            

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle top-0 z-50">
                <div className="modal-box relative">
                <label htmlFor="delete-confirm-modal" className="btn btn-sm absolute right-2 top-2 btn-error">✕</label>
                    <h3 className="font-bold text-lg capitalize text-red-500">Are you sure to cancel {productName}?</h3>
                    <p className='capitalize'>quantity: {quantity}</p>
                    <p className='capitalize'>Total Price: ${total}</p>
                    <div className="modal-action">
                        <label onClick={handleCancel} htmlFor="delete-confirm-modal" className="btn  btn-error">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;