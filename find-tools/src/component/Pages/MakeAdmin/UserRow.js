import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ userData, index, refetch }) => {
    const {email, role} = userData;
    const handleMakeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success('Successfully Make an Admin!')
        })
    }
    return (
        <tr className="hover" >
            <th>{index + 1}</th>
            <th>{email}</th>
            <th>
                {
                    role ? '' :<div onClick={handleMakeAdmin} className="btn btn-primary">Make Admin</div> 
                }
                </th>
            <th><div className="btn btn-primary">Delete User</div></th>
        </tr>
    );
};

export default UserRow;