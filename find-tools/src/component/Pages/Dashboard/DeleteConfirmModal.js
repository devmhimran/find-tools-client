import React from 'react';

const DeleteConfirmModal = ({cancelOrder, refetch}) => {
    const {_id, productName, productPrice, quantity} = cancelOrder;
    const total = productPrice * quantity;
    return (
        <div className='z-50'>
            

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle top-0 z-50">
                <div class="modal-box relative">
                <label htmlFor="delete-confirm-modal" class="btn btn-sm absolute right-2 top-2 btn-error">✕</label>
                    <h3 class="font-bold text-lg capitalize text-red-500">Are you sure to cancel {productName}?</h3>
                    <p className='capitalize'>quantity: {quantity}</p>
                    <p className='capitalize'>Total Price: ${total}</p>
                    <div class="modal-action">
                        <label htmlFor="delete-confirm-modal" class="btn  btn-error">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;