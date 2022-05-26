import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeAdmin = () => {
    const [usersData, setUsersData] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsersData(data))
    },[user]);
    return (
        <div className='container'>
            <h1>All users</h1>
            <div className="overflow-x-auto border rounded-lg">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            usersData.map((data, index) => 
                                <tr className="hover" key={data._id}>
                                <th>{index+1}</th>
                                <th>{data.email}</th>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;