import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function Signup() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passswordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {

            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passswordRef.current.value

        }
        console.log(payload);
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setToken(data.token)
                setUser(data.user)
                console.log(data);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }


    return (
        <div className="w-full h-screen flex bg-violet-200 justify-center items-center ">
            <form action="" className="w-full sm:w-[300px] bg-violet-800 px-4 py-8 shadow space-y-6" onSubmit={onSubmit}>
                <h1 className="text-xl font-semibold text-white text-center">Sign up</h1>
                {errors && <div className="bg-white">

                    {Object.keys(errors).map(index => (
                        <span key={index} className="text-red-700">
                            {errors[index][0]}
                        </span>
                    ))}
                </div>
                }
                <div>
                    <input
                        ref={firstNameRef}
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="firstname"
                        name="firstname"
                        placeholder="Type your Firstname"
                    />
                </div>
                <div>
                    <input
                        ref={lastNameRef}
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="lastname"
                        name="lastname"
                        placeholder="Type your Lastname"
                    />
                </div>

                <div>
                    <input
                        ref={emailRef}
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <input
                        ref={passswordRef}
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Link to="/login">  <span className="text-sm text-gray-400 hover:underline">Login</span>
                    </Link>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-white px-4 py-2 font-medium text-center text-violet-600 transition-colors duration-200 rounded-md  hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
                    >
                        sign up
                    </button>
                </div>
            </form>
        </div>
    )
}
