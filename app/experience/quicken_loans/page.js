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
            <ul class="list-disc mx-8">
                <li>Led agile team to develop an internal site providing visibility into test data, simplifying developer testing process</li>
                <li>Executed full stack engineering and automated end-to-end testing to deliver QL Partner Portal redesign</li>
            </ul>
        </div>
    )
}