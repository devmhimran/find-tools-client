import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdminCheck from '../../Hooks/useAdminCheck';
import Loading from '../Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoader] = useAdminCheck(user);
    const location = useLocation();
    if(loading || adminLoader){
        return <Loading></Loading>
    }
    
    if(!user || !admin){
        return <Navigate to='/dashboard/' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;