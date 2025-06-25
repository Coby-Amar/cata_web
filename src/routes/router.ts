import { createBrowserRouter } from "react-router"

import DashboardLayout from "../layouts/Dashboard/Dashboard.layout";
import HomeRoute from "./Home.route";
import appAxios from "../api/axios";
import BookRoute from "./Book.route";
import SettingsRoute from "./Settings.route";

const router = createBrowserRouter([
    {
        Component: DashboardLayout,
        async loader() {
            try {
                const { data } = await appAxios.get('/user')
                return data
            } catch {
                return null
            }
        },
        children: [
            {
                index: true,
                path: '/',
                Component: HomeRoute,
            },
            {
                path: '/books',
                Component: BookRoute,
            },
            {
                path: '/settings',
                Component: SettingsRoute,
            },
        ],
    }
]);

export default router