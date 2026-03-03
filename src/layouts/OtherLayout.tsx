// import { Outlet, useMatches } from "react-router-dom"
// import PageHeader from "../components/PageHeader"
// import PreFooterCTA from "../components/PreFooterCTA";

// const OtherLayout = () => {
//     const matches = useMatches();
//     const current = matches[matches.length - 1]
//     const pageTitle = current?.handle?.title
//     const cta = current?.handle?.cta
//     return (
//         <div>
//             {pageTitle && <PageHeader title={pageTitle} />}
//             <Outlet />
//             {cta && <PreFooterCTA />}
//         </div>
//     )
// }

// export default OtherLayout

import { Outlet, useMatches, type UIMatch } from "react-router-dom";
import PageHeader from "../components/PageHeader"
import PreFooterCTA from "../components/PreFooterCTA";

interface AppRouteHandle {
    title?: string;
    cta?: boolean;
}

const OtherLayout = () => {
    const matches = useMatches() as UIMatch<unknown, AppRouteHandle>[];
    const current = matches.at(-1);

    const pageTitle = current?.handle?.title;
    const cta = current?.handle?.cta;

    return (
        <div>
            {pageTitle && <PageHeader title={pageTitle} />}
            <Outlet />
            {cta && <PreFooterCTA />}
        </div>
    );
};

export default OtherLayout
