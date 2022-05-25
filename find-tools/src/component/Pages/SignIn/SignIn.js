import React from 'react';
import { useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { AiOutlineGoogle } from 'react-icons/ai';
import Loading from '../Loading/Loading';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let userError;
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error) {
        userError = error?.message;
    }
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mx-auto'>
            <div className="card mx-auto mt-10 lg:mt-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <div className="card-body">
                    <div className="card-title">
                        <h1 className='text-3xl font-extrabold'>Sign in</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Email" className="input input-bordered"
                                {...register("email", {
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Provide a valid email"
                                    },
                                    required: {
                                        value: true,
                                        message: "Email required"
                                    }
                                })

                                } />
                            {errors.email?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered"  {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'Password required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters' // JS only: <p>error message</p> TS only support string
                                    }

                                })} />
                            {errors.password?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-sm text-red-500 mt-2'>{errors.password.message}</span>}
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <span className='mt-2 text-red-500'>{userError}</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"><span className='mr-2 text-2xl'><AiOutlineGoogle></AiOutlineGoogle></span> Google Sign In</button>
                    </div>
                    <div className="creat__account__Link mt-4 text-center">
                        <Link to='/signup' className="link link-primary no-underline font-medium">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;