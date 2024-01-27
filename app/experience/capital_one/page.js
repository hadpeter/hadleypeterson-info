import JobHighlight from "../../components/JobHighlight.js"
import PageTitleComponet from "../../components/pageTitle.js"

export default function CapitalOne() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex-col mt-16 mb-16 md:mb-12">
                <div>
                    <PageTitleComponet title="Capital One"></PageTitleComponet>
                </div>
                <div>
                    New York, New York
                </div>
            </section>
            <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
            <ul>
                <li>

                </li>
            </ul>
            <JobHighlight title="Associate Software Engineer" focus="Machine Learning Opperations" date="August 2022-August 2023"></JobHighlight>
            <ul>
                <li>
                    
                </li>
            </ul>
            <JobHighlight title="Software Engineer Intern" focus="API Development" date="May 2020-August 2020"></JobHighlight>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    )
}