import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";



const PageLayouts = lazy(() => import("../layouts/PageLayouts"))
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Services = lazy(() => import("../pages/Services"))
const WhyUs = lazy(() => import("../pages/WhyUs"))
const Contact = lazy(() => import("../pages/Contact"))



export const router = createBrowserRouter([
    {
        path: "/", element: <PageLayouts />, children: [
            { index: true, element: <Home />, },
            { path: "about-us", element: <About />, },
            { path: "our-services", element: <Services />, },
            { path: "why-us", element: <WhyUs />, },
            { path: "contact-us", element: <Contact />, },
        ]
    }

])