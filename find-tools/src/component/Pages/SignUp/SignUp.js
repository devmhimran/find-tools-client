import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import singUpImg from "../../../Assets/find-tools-singUp.gif";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import useToken from "../../Hooks/useToken";
import PageTitle from "../PageTitle/PageTitle";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, emailError] =
    useSendEmailVerification(auth);
  const [updateProfile, updating, userUpdateError] = useUpdateProfile(auth);
  const [passWordError, setPasswordError] = useState("");
  const [token] = useToken(user || gUser);
  const navigate = useNavigate();
  const location = useLocation();
  let userError;
  // const [userImage, setUserImage] = useState(null);
  // const imageApi = '5b01dc41485f68cbd575874e6d5aeeed';

  const onSubmit = async (data) => {
    const email = data.email;
    const name = data.name;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    // const photoURL = data.profileImage[0];
    const photoURL = data.profileImage;

    const formData = new FormData();
    formData.append("image", photoURL);
    if (password !== confirmPassword) {
      setPasswordError("Password doesn't matched");
    }

    // const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(res => res.json())
    //     .then((result) => {
    //         const userProfileImage = result.data.image.url
    //         setUserImage(userProfileImage);

    //         console.log('result image', result.data.image.url)
    //     })

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, photoURL: photoURL });
    await sendEmailVerification();
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (error || gError) {
    userError = error?.message;
  }
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container mx-auto">
      <PageTitle title="Sign Up" />
      <div className="hero p-8 lg:p-20 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="register__image">
            <img className="w-9/12 mx-auto" src={singUpImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h1 className="text-3xl font-extrabold">Sign up</h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name Required",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Enter valid name",
                      },
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email Required",
                      },
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Enter valid email",
                      },
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="profileImage"
                    className="input input-bordered"
                    {...register("profileImage", {
                      required: {
                        value: true,
                        message: "Image Required",
                      },
                    })}
                  />
                  {errors.profileImage?.type === "required" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.profileImage.message}
                    </span>
                  )}
                  {errors.profileImage?.type === "pattern" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.profileImage.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm password required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <span className="text-sm text-red-500 mt-2">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                  <span className="text-sm text-red-500 mt-2">{userError}</span>
                  <span className="text-sm text-red-500 mt-2">
                    {passWordError}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign up</button>
                </div>
              </form>

              <div className="divider">OR</div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"
                >
                  <span className="mr-2 text-2xl">
                    <AiOutlineGoogle></AiOutlineGoogle>
                  </span>{" "}
                  Google Sign In
                </button>
              </div>
              <div className="creat__account__Link mt-4 text-center">
                <p>Already have account?</p>{" "}
                <Link
                  to="/signin"
                  className="link link-primary no-underline font-medium"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
