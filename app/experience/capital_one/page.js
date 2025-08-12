import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function CapitalOne() {
    return (
        <div className="min-h-screen my-16 mx-6">
            <ExperienceTitle name="Capital One" image="/Capital_one.png" location="New York, New York"></ExperienceTitle>
            <section className="mb-16">
                <JobHighlight title="Principal Associate - Senior Software Engineer" focus="Search Engine Optimization" date="August 2024-Present"></JobHighlight>
                <ul class="visible_list">
                    <li>Increased search CTR by 10%, sped searches 5×, and reduced irrelevant results 100× by analyzing query patterns and leading cross-functional launch of “exact search” experience.</li>
                    <li>Improved search explainability for 60%+ of queries by collaborating with product, design and UI to surface views as top-level results and reduce confusion.</li>
                    <li>Raised offline recall by 12.5% on suggested results by identifying drop-off and delivering LLM-powered personalization with data science, analytics and product partners</li>
                    <li>Accelerated confidence and validation of 20+ features by building an online experimentation framework; defined success metrics with product and analytics partners</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
                <ul class="visible_list">
                    <li>Secured leadership buy-in for hybrid search upgrade after researching AWS OpenSearch trends and pitching to product and technology leaders.</li>
                    <li>Enabled rapid, risk-free testing with offline evaluation tool adopted by 20+ engineers.</li>
                    <li>Reduced backend costs and improved efficiency by eliminating 500K+ weekly API calls through log-driven data pipeline optimization.</li>
                    <li>Presented code review best practices to 400+ engineers at conference</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Associate Software Engineer" focus="Machine Learning Opperations" date="August 2022-August 2023"></JobHighlight>
                <ul class="visible_list">
                    <li>Boosted provisioning speed 1,000× and efficiency 10× by leading development of optimized ML compute solution presented to 200+ engineers and adopted across teams.</li>
                </ul>
            </section>
            <section className="mb-16">
                <JobHighlight title="Software Engineer Intern" focus="API Development" date="May 2020-August 2020"></JobHighlight>
                <ul class="visible_list">
                    <li>Engineered scalable serverless system with minimal costs, failover ability, and high performance</li>
                    <li>Designed and built API with 100 ms response times, 85% code coverage and CI/CD pipeline</li>
                </ul>
            </section>
        </div>
    )
}