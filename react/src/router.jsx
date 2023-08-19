import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/signup";
import Funcionarios from "./views/funcionarios/Funcionarios";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Notfund from "./views/Notfund";
import Dashboard from "./views/dashboard";
import CreateFuncionario from "./views/funcionarios/CreateFuncionario";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/funcionarios',
                element: <Funcionarios />
            },
            {
                path: '/funcionario/novo',
                element: <CreateFuncionario />
            }
        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

])


export default router;
