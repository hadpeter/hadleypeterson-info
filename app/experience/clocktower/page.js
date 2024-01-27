import JobHighlight from "../../components/JobHighlight.js"
import PageTitleComponet from "../../components/pageTitle.js"

export default function Clocktower() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex-col mt-16 mb-16 md:mb-12">
                <div>
                    <PageTitleComponet title="Clocktower Technology Ventures"></PageTitleComponet>
                </div>
                <div>
                    Remote
                </div>
            </section>
            <JobHighlight title="Technology Consultant" focus="Portfolio analysis" date=""></JobHighlight>
            <ul>
                <li>
                    Developed Tableau dashboards to visualize performance metrics for portfolio companies
                </li>
            </ul>
        </div>
    )
}