import PageTitleComponet from "../components/pageTitle.js"
import PageSubTitleComponet from "../components/pageSubTitle.js"
import DoubleListComponent from "../components/doubleList.js"

export default function Interests() {
    var prof_interests = ["Cloud Computing", "Distributed Systems", "Networking", "The Dark Web", "P vs NP Problem", "Cryptography", "FinTech", "Entrepreneurship", "Venture Capital", "Technical Writing"]
    var lifestyle_intersts = ["Yoga", "Meditation", "Water Skiing", "Gardening", "Reading", "Cooking", "Baking", "Fashion"]

    return (
        <div className="min-h-screen my-6 mx-6">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <PageTitleComponet title="Interests"></PageTitleComponet>
        </section>
        <PageSubTitleComponet title="Professional"></PageSubTitleComponet>
        <DoubleListComponent items={prof_interests}></DoubleListComponent>
        <PageSubTitleComponet title="Lifestyle"></PageSubTitleComponet>
        <DoubleListComponent items={lifestyle_intersts}></DoubleListComponent>
    </div>
    );
  }