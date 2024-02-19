import PageTitleComponet from "./pageTitle.js"
import ExperienceHeaderImage from "./experienceHeaderImage.js"

export default function ExperienceTitle(props){
    return (
        <section className="flex-col md:flex-row flex-col mt-16 mb-16 md:mb-12">
            <div className="flex items-center">
                <PageTitleComponet title={props.name}></PageTitleComponet>
                <ExperienceHeaderImage image={props.image} name={props.name}></ExperienceHeaderImage>
            </div>
            <div>
                {props.location}
            </div>
        </section>
    );
}