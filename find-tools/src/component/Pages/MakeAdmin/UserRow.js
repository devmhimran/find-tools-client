import React from 'react';

const UserRow = ({ userData, index }) => {
    const {email} = userData;
    return (
        <tr className="hover" >
            <th>{index + 1}</th>
            <th>{email}</th>
            <th><div className="btn btn-primary">Make Admin</div></th>
            <th><div className="btn btn-primary">Delete User</div></th>
        </tr>
    );
};

export default UserRow;