import PageTitleComponet from "../components/pageTitle.js"
import PageSubTitleComponet from "../components/pageSubTitle.js"
import DoubleListComponent from "../components/doubleList.js"

export default function Interests() {
    var prof_interests = [
        {"name": "Cloud Computing", "image": "/interests/cloud_computing.webp"},
        {"name": "Distributed Systems", "image": "/interests/distributed_systems.webp"},
        {"name": "Networking", "image": "/interests/networking.webp"},
        {"name": "P vs NP", "image": "/interests/p_v_np.jpg"},
        {"name": "The Dark Web", "image": "/interests/dark_web.webp"},
        {"name": "Cryptography", "image": "/interests/public_encryption.jpg"},
        {"name": "Technical Writing", "image": "/interests/tech_writing.webp"},
        {"name": "FinTech", "image": "/interests/fintech.webp"},
        {"name": "Entrepreneurship", "image": "/interests/entrepreneurship.webp"},
        {"name": "Venture Capital", "image": "/interests/venture_capital.webp"}
    ]
    
    var lifestyle_intersts = [
        {"name": "Yoga", "image": "/interests/yoga.webp"},
        {"name": "Meditation", "image": "/interests/meditation.webp"},
        {"name": "Water Skiing", "image": "/interests/water_skiing.webp"},
        {"name": "Gardening", "image": "/interests/gardening.webp"},
        {"name": "Reading", "image": "/interests/reading.webp"},
        {"name": "Cooking", "image": "/interests/cooking.webp"},
        {"name": "Baking", "image": "/interests/baking.webp"},
        {"name": "Fashion", "image": "/interests/fashion.webp"},
    ]

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