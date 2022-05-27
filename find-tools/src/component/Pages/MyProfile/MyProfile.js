import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
// import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL, email } = user;
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
        console.log(updateProfile)
        // fetch(`http://localhost:5000/update/${email}`, {
        //     method: "PUT",
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(updateProfile)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        // e.target.reset();
        toast.success('Successfully Updated!')
    }
    return (
        <div className='container'>
            <div className="card w-1/2 bg-base-100 shadow-xl">
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
                            <input type="text" name='education' placeholder="Education" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Location</p>
                            <input type="text" name='location' placeholder="Location" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Phone Number</p>
                            <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>LinkedIn Profile</p>
                            <input type="text" name='linkedInProfile' placeholder="LinkedIn Profile" className="input input-bordered w-full " required />
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