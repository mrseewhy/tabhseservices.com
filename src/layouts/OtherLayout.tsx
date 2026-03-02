import { Outlet, useMatches } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PreFooterCTA from "../components/PreFooterCTA";

const OtherLayout = () => {
    const matches = useMatches();
    const current = matches[matches.length - 1]
    const pageTitle = current?.handle?.title
    return (
        <div>
            {pageTitle && <PageHeader title={pageTitle} />}
            <Outlet />
            <PreFooterCTA />
        </div>
    )
}

export default OtherLayout