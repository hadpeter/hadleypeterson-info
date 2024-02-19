import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function TappanHill() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <ExperienceTitle name="Tappan Hill" image="/Tappan_hill.png" location="Ann Arbor, Michigan"></ExperienceTitle>
            <JobHighlight title="Analyst" focus="" date="February 2019-February 2020"></JobHighlight>
            <ul class="list-disc mx-8">
                <li>Performed diligence across multiple investment opportunities; outputs included competitor analysis, market sizing, financial forecasting, customer references and valuation</li>
                <li>Advised partnership to pass on nine evaluated investment opportunities across the cybersecurity, blockchain, and asset management sectors</li>
                <li>Recommended exit strategies to a cybersecurity startup and met with the CEO to investigate their market position</li>
            </ul>
        </div>
    )
    }