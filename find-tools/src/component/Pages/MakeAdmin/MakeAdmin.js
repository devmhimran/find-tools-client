import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: userData, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users',
            // {
            //     method: 'GET',
            //     headers: {
            //         'content-type': 'application/json',
            //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
        ).then(res => {
            console.log(res)
            return res.json()
        })
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    // const [usersData, setUsersData] = useState([]);
    // const [user] = useAuthState(auth);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res => res.json())
    //     .then(data => setUsersData(data))
    // },[user]);
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
                            userData.map((user, index) => <UserRow key={user._id} userData={user} refetch={refetch} index={index}></UserRow>)
                        }

                    </tbody>
                </table>
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

export default MakeAdmin;