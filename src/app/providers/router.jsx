import { createBrowserRouter, Outlet, redirect } from "react-router-dom"
import { Login } from "../../pages"
import { ChatsPage } from "../../pages"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                index: true,
                loader: () => redirect("/chats")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/chats",
                element: <ChatsPage />
            }
        ]
    }

])  