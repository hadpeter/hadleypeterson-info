import PageTitleComponet from "../components/pageTitle.js"
import PageSubTitleComponet from "../components/pageSubTitle.js"
import DoubleListComponent from "../components/doubleList.js"
import JobHighlight from "../components/JobHighlight.js"

export default function EducationAndSkills() {
    var languages = ["C++", "Python", "JavaScript", "React", "Next.js", "Svelte", "Go", 
    "YAML", "SQL", "C"]
    var technologies = ["Splunk", "OpenSearch", "Lambda", "DynamoDB", "AWS ECS", "AWS CodeDeploy", "Load Balancers", "EMR", "Route53", "Snowflake", "Kubernetes", "Docker", "Jenkins", "Git"]

    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <PageTitleComponet title="Education & Skills"></PageTitleComponet>
            </section>
            <section className="mb-16">
                <PageSubTitleComponet title="Education"></PageSubTitleComponet>
                <JobHighlight title="University of Michigan" focus="College of Engineering" date="September 2017-May 2021"></JobHighlight>
                <ul>
                    <li>
                        Bachelor of Science in Computer Science Engineering
                    </li>
                    <li>
                        <b>Instructional Aide:</b> EECS 376: Foundations of Computer Science
                    </li>
                    <li>
                        <b>Relevant Courses:</b> EECS 482: Operating Systems, EECS 485: Web Systems, EECS 388: Computer Security & EECS 498: Applied Machine Learning 
                    </li>
                </ul>
            </section>
            <section className="mb-16">
                <PageSubTitleComponet title="Skills"></PageSubTitleComponet>
                <h4>Languages and Frameworks</h4>
                <DoubleListComponent items={languages}></DoubleListComponent>
                <h4>Technologies</h4>
                <DoubleListComponent items={technologies}></DoubleListComponent>
            </section>
        </div>
        
    );
  }