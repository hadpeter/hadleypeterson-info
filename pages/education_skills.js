import PageTitleComponet from "../app/components/pageTitle.js"
import DoubleListComponent from "../app/components/doubleList.js"

export default function EducationAndSkills() {

    return (
        <div>
            <PageTitleComponet title="Education & Skills"></PageTitleComponet>
            <h2>Education</h2>
            <h2>Skills</h2>
            <DoubleListComponent folder="skills"></DoubleListComponent>
        </div>
        
    );
  }