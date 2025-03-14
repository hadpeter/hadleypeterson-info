import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function CapitalOne() {
    return (
        <div className="min-h-screen my-16 mx-6">
            <ExperienceTitle name="Capital One" image="/Capital_one.png" location="New York, New York"></ExperienceTitle>
            <section className="mb-16">
                <JobHighlight title="Principal Associate - Senior Software Engineer" focus="Search Engine Optimization" date="August 2024-Present"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Developed differentiated search experience to optimize search performance and eliminate irrelevant results; Improved search latency by 5x and reduced results by 100x for 60% of searches</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Piloted search evaluation and AB testing; empowered product partners with tools to quantify search performance; collaborated with data analytics team to create performance dashboards</li>
                    <li>Discovered and implemented solution to eliminate 500,000 API calls by reusing log data</li>
                    <li>Recruited 60+ new grads and interns at University of Michigan; onboarded 30+ new hires to Agile methodologies; conducted technical interviews for 20+ new graduate hires</li>
                    <li>Presented code review process at company-wide presentation to 400+ engineers; authored externally published article on how to produce quality code reviews</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Associate Software Engineer" focus="Machine Learning Opperations" date="August 2022-August 2023"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Developed ML feature calculator; improved container provisioning time by 1,000x and compute time by 10x; demo’ed to 200+ stakeholders, leading to adoption by 2 teams</li>
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