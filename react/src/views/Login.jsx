import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";


export default function Login() {
    const emailRef = useRef();
    const passswordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState([]);
    const [loading, isLoading] = useState(false);


    const onSubmit = (e) => {

        e.preventDefault();

        isLoading(true)
        const payload = {

            email: emailRef.current.value,
            password: passswordRef.current.value

        }
        console.log(payload);
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setToken(data.token)
                setUser(data.user)
                setErrors(null)
                isLoading(false)
            })
            .catch(err => {
                isLoading(false)
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
                if (response.data.mensagem) {
                    setErrors(response.data.mensagem);

                }
            })
    }

    return (
        <div className="w-full h-screen flex bg-violet-200 justify-center items-center ">
            <form action="" className="w-full sm:w-[300px] bg-violet-800 px-4 py-8 shadow space-y-6" onSubmit={onSubmit}>
                <h1 className="text-xl font-semibold text-white text-center">Login</h1>
                {errors && <div>

                    {Object.keys(errors).map(index => (
                        <span key={index} className="text-[#db2929] b text-[15px] py-1">
                            {errors[index][0]}
                        </span>
                    ))}
                </div>
                }

                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        ref={emailRef}
                    />
                </div>
                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        required
                        ref={passswordRef}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 hover:underline">Forgot Password?</span>
                    <Link to="/signup">   <span className="text-sm text-gray-400 hover:underline"> Signup</span></Link>

                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-white px-4 py-2 font-medium text-center text-violet-600 transition-colors duration-200 rounded-md  hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
                    >
                        login
                    </button>
                </div>
            </form>
        </div >
    )
}
