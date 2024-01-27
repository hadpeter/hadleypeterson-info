import JobHighlight from "../../components/JobHighlight.js"
import PageTitleComponet from "../../components/pageTitle.js"

export default function QuickenLoans() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex-col mt-16 mb-16 md:mb-12">
                <div>
                    <PageTitleComponet title="Quicken Loans"></PageTitleComponet>
                </div>
                <div>
                    Detroit, Michigan
                </div>
            </section>
            <JobHighlight title="Software Engineer Intern" focus="API Development" date="May 2019-August 2019"></JobHighlight>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    )
}