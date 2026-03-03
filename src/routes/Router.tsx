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
const NotFound = lazy(() => import("../pages/NotFound"))



export const router = createBrowserRouter([
    {
        path: "/", element: <PageLayout />, children: [
            { index: true, element: <Home />, },
            {
                element: <OtherLayout />, children: [
                    { path: "about-us", element: <About />, handle: { title: "About Us", cta: true } },
                    {
                        path: "our-services", children: [
                            { index: true, element: <Services />, handle: { title: "Our Services", cta: true } },
                            { path: "consultancy", element: <Consultancy />, handle: { title: "Consultancy", cta: true } },
                            { path: "environmental-sustainability", element: <Enviromental />, handle: { title: "Enviromental Sustainability", cta: true } },
                            { path: "training", element: <Training />, handle: { title: "Training", cta: true } },
                            { path: "commercial-procurement", element: <Commercial />, handle: { title: "Commercial/Procurement", cta: true } },
                            { path: "technical", element: <Technical />, handle: { title: "Technical", cta: true } },
                            { path: "management-systems", element: <Management />, handle: { title: "Management Systems", cta: true } },
                            { path: "facilities-management", element: <Facilities />, handle: { title: "Facilities Management", cta: true } },
                        ]
                    },
                    { path: "why-us", element: <WhyUs />, handle: { title: "Why TAB HSE Services", cta: true } },
                    { path: "contact-us", element: <Contact />, handle: { title: "Contact Us", cta: false } },
                ]
            },
            { path: '*', element: <NotFound /> }

        ]

    },

])