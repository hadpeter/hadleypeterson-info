import PageTitleComponet from "../components/pageTitle.js"
import PageSubTitleComponet from "../components/pageSubTitle.js"
import DoubleListComponent from "../components/doubleList.js"
import JobHighlight from "../components/JobHighlight.js"

export default function EducationAndSkills() {
    var languages = [
        {name: "C++", image: "/skills/c++.png"}, 
        {name: "Python", "image": "/skills/python.png"},
        {name: "JavaScript", "image": "/skills/javascript.png"},
        {name: "React", "image": "/skills/react.png"},
        {name: "Next.js", "image": "/skills/next.png"},
        {name: "Svelte", "image": "/skills/svelte.png"},
        {name: "Go", "image": "/skills/go.png"},
        {name: "YAML", "image": "/skills/yaml.png"},
        {name: "SQL", "image": "/skills/sql.svg"},
        {name: "C", "image": "/skills/c.png"}
    ]
    var technologies = [
        {name:"OpenSearch", "image": "/skills/opensearch.png"},
        {name:"Lambda", "image": "/skills/lambda.png"},
        {name:"EMR", "image": "/skills/emr.png"},
        {name:"ECS", "image": "/skills/ecs.png"},
        {name:"DynamoDB", "image": "/skills/dynamo.png"},
        {name:"Load Balancers", "image": "/skills/loadbalancer.png"},
        {name:"Route 53", "image": "/skills/route53.svg"},
        {name:"Fargate", "image": "/skills/fargate.png"},
        {name:"Snowflake", "image": "/skills/snowflake.png"},
        {name:"Kubernetes", "image": "/skills/kubernetes.png"},
        {name:"Jenkins", "image": "/skills/jenkins.png"},
        {name:"Splunk", "image": "/skills/splunk.jpeg"},
        {name:"Docker", "image": "/skills/docker.webp"},
        {name:"Git", "image": "/skills/git.png"},
    ]

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