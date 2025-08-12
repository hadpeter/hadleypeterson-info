import JobHighlight from "../../components/JobHighlight.js"
import ExperienceTitle from "../../components/experienceTitle.js"

export default function Clocktower() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <ExperienceTitle name="Clocktower Technology Ventures" image="/Clocktower_tech_ventures.png" location="Remote"></ExperienceTitle>
            <JobHighlight title="Technology Consultant" focus="Portfolio analysis" date=""></JobHighlight>
            <ul class="visible_list">
                <li>Developed Tableau dashboards to visualize performance metrics for portfolio companies</li>
                <li>Demoed product internally to spread adoption; product used for sharing performance and analyzing areas of opportunity</li>
            </ul>
        </div>
    )
}