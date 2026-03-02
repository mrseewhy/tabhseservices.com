import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";


const PageLayout = lazy(() => import("../layouts/PageLayout"))
const OtherLayout = lazy(() => import("../layouts/OtherLayout"))


const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Services = lazy(() => import("../pages/Services"))
const WhyUs = lazy(() => import("../pages/WhyUs"))
const Contact = lazy(() => import("../pages/Contact"))
const Consultancy = lazy(() => import("../pages/Consultancy"))
const Enviromental = lazy(() => import("../pages/Enviromental"))
const Training = lazy(() => import("../pages/Training"))
const Commercial = lazy(() => import("../pages/Commercial"))
const Technical = lazy(() => import("../pages/Technical"))
const Management = lazy(() => import("../pages/Management"))
const Facilities = lazy(() => import("../pages/Facilities"))



export const router = createBrowserRouter([
    {
        path: "/", element: <PageLayout />, children: [
            { index: true, element: <Home />, },
            {
                element: <OtherLayout />, children: [
                    { path: "about-us", element: <About />, handle: { title: "About Us" } },
                    {
                        path: "our-services", children: [
                            { index: true, element: <Services />, handle: { title: "Our Services" } },
                            { path: "consultancy", element: <Consultancy />, handle: { title: "Consultancy Services" } },
                            { path: "environmental-sustainability", element: <Enviromental />, handle: { title: "Enviromental Sustainability Services" } },
                            { path: "training", element: <Training />, handle: { title: "Training Services" } },
                            { path: "commercial-procurement", element: <Commercial />, handle: { title: "Commercial/Procurement Services" } },
                            { path: "technical", element: <Technical />, handle: { title: "Technical Services" } },
                            { path: "management-systems", element: <Management />, handle: { title: "Management Systems Services" } },
                            { path: "facilities-management", element: <Facilities />, handle: { title: "Facilities Management Services" } },
                        ]
                    },
                    { path: "why-us", element: <WhyUs />, handle: { title: "Why TAB HSE Services" } },
                    { path: "contact-us", element: <Contact />, handle: { title: "Contact Us" } },
                ]
            },

        ]
    }

])