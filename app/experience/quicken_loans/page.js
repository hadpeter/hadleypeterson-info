import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function QuickenLoans() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <ExperienceTitle name="Quicken Loans" image="/Quicken_loans.png" location="Detroit, Michigan"></ExperienceTitle>
            <JobHighlight title="Software Engineer Intern" focus="API Development" date="May 2019-August 2019"></JobHighlight>
            <ul class="list-disc mx-8">
                <li>Led agile team to develop an internal site providing visibility into test data, simplifying developer testing process</li>
                <li>Executed full stack engineering and automated end-to-end testing to deliver QL Partner Portal redesign</li>
            </ul>
        </div>
    )
}