import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL, email } = user;
    const [userData, setUserData] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    },[]);
    // const { data: userData, isLoading, refetch } = useQuery('users', () =>
    //     fetch(`http://localhost:5000/users/${email}`,
    //     ).then(res => {
    //         return res.json()
    //     })
    // );
    const {education, location, phoneNumber, linkedInProfile} = userData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const education = e.target.education.value;
        const location = e.target.location.value;
        const phoneNumber = e.target.phoneNumber.value;
        const linkedInProfile = e.target.linkedInProfile.value;

        const updateProfile = {
            education: education,
            location: location,
            phoneNumber: phoneNumber,
            linkedInProfile: linkedInProfile
        };
        fetch(`http://localhost:5000/update/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Successfully Updated!')
                }else{
                    toast.error("Already Updated!")
                }
            })
        e.target.reset();
        
        
    }
    return (
        <div className='container'>
            <div className="card w-full md:w-3/4 lg:w-2/4 lg:m-0 md:mx-auto bg-base-100 shadow-xl">
                <div className="userImage p-3">
                    <img src={photoURL} alt={displayName} className="rounded-xl w-1/3 mt-8 mx-auto" />
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Name</p>
                            <input type="text" defaultValue={displayName} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Email</p>
                            <input type="text" defaultValue={email} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Education</p>
                            <input type="text" name='education' defaultValue={education} placeholder="Education" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Location</p>
                            <input type="text" name='location' defaultValue={location} placeholder="Location" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Phone Number</p>
                            <input type="text" name='phoneNumber' defaultValue={phoneNumber} placeholder="Phone Number" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>LinkedIn Profile</p>
                            <input type="text" name='linkedInProfile' defaultValue={linkedInProfile} placeholder="LinkedIn Profile" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <input type="submit" value='Update' className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MyProfile;