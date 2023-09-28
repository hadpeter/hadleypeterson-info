import PageTitleComponet from "../app/components/pageTitle.js"
import DoubleListComponent from "../app/components/doubleList.js"

export default function EducationAndSkills() {

    return (
        <div>
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <PageTitleComponet title="Education & Skills"></PageTitleComponet>
                <h2>Education</h2>
                <h2>Skills</h2>
                <DoubleListComponent folder="skills"></DoubleListComponent>
            </section>
        </div>
        
    );
  }