import PageTitleComponet from "../components/pageTitle.js"
import PageSubTitleComponet from "../components/pageSubTitle.js"
import DoubleListComponent from "../components/doubleList.js"

export default function EducationAndSkills() {

    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <PageTitleComponet title="Education & Skills"></PageTitleComponet>
            </section>
            <PageSubTitleComponet title="Education"></PageSubTitleComponet>
            <PageSubTitleComponet title="Skills"></PageSubTitleComponet>
            <DoubleListComponent folder="skills"></DoubleListComponent>
        </div>
        
    );
  }