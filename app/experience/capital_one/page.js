import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function CapitalOne() {
    return (
        <div className="min-h-screen my-16 mx-6">
            <ExperienceTitle name="Capital One" image="/Capital_one.png" location="New York, New York"></ExperienceTitle>
            <section className="mb-16">
                <JobHighlight title="Principal Associate - Senior Software Engineer" focus="Search Engine Optimization" date="August 2024-Present"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Accelerated search latency by 2x and improved result relevance by 30% across 22% of query volume by architecting a new index and leveraging OpenSearch templates</li>
                    <li>Rearchitected search process to improve performance and eliminate noise, achieving 5x faster results and reducing result volume by 100x for 60% of searches</li>
                    <li>Partnered with UI, product, and design teams to redesign the search results page, increasing keyword search click through rate by 10%</li>
                    <li>Led 20+ technical interviews for early career candidates, shaping hiring outcomes</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Established feature evaluation and A/B testing framework, built custom tools that enabled product teams to quantify the impact of changes on search performance</li>
                    <li>Eliminated 500,000+ API calls by engineering a log-driven search suggestion system, reducing backend load and cost</li>
                    <li>Presented effective code review process to 400+ engineers at technical conference; authored article published on Capital One’s Medium on producing high-quality code reviews</li>
                    <li>Recruited 60+ interns and new grads, and led Agile onboarding for 30+ new hires</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Associate Software Engineer" focus="Machine Learning Opperations" date="August 2022-August 2023"></JobHighlight>
                <ul class="list-disc mx-8">
                    <li>Developed ML feature calculator; improved container provisioning time by 1,000x and compute time by 10x; presented to 200+ stakeholders, resulting in adoption across 2+ teams</li>
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