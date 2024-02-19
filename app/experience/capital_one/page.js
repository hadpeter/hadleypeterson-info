import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function CapitalOne() {
    return (
        <div className="min-h-screen my-16 mx-6">
            <ExperienceTitle name="Capital One" image="/Capital_one.png" location="New York, New York"></ExperienceTitle>
            <section className="mb-16">
                <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Owned API and data ingestion pipelines with 800+ users</li>
                    <li>Built backend to unify cross platform search results; improved 700+ users’ experiences parsing search results</li>
                    <li>Researched and pitched transition to semantic search; won internal buy-in and engineered solution</li>
                    <li>Piloted search evaluation and AB testing; empowered product partners with tools to quantify search performance</li>
                    <li>Engineered internal data collection tool used for onboarding across 30+ teams</li>
                    <li>Enabled data standardization to promote reuse and joining of data</li>
                    <li>Recruited new grads and interns at University of Michigan; onboarded 30+ new hires to Agile methodologies</li>
                    <li>Presented code review process to 400+ engineers; authored article on how to produce quality code reviews</li>
                    <li>Conducted 4 technical interviews for new graduate hires</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Associate Software Engineer" focus="Machine Learning Opperations" date="August 2022-August 2023"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Developed Kubernetes feature calculator; demo’ed to 200+ stakeholders, leading to adoption by 2 teams</li>
                    <li>Designed feature calculator to simplify customer onboarding, reduce storage, and improve speed by 10x</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Software Engineer Intern" focus="API Development" date="May 2020-August 2020"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Engineered scalable serverless system with minimal costs, failover ability, and high performance</li>
                    <li>Designed and built API with 100 ms response times, 85% code coverage and CI/CD pipeline</li>
                </ul>
            </section>
        </div>
    )
}