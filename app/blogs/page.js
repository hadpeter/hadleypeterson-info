import BlogPreview from '../components/blogPostPreview.js'
import PageTitleComponet from "../components/pageTitle.js"

export default function Blogs() {
    // TODO: populate posts with blogPost class objects based on the blog post information in that folder
    var author = {
        "name": "Hadley Peterson",
        "picture": "../headshot.jpg"
    }
    var posts = [
        {
            "title": "The Evolution of Search: How the search space has transformed and what the use cases are for each innovation",
            "coverImage": "/search.jpg",
            "date": "May 2024",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/the-evolution-of-search-how-the-search",
            "excerpt": "Flash back to 100 years ago: you need to look up a question and what do you do? Flip open an encyclopedia? Spend hours parsing"
        },
        {
            "title": "Code review best practices: How to complete a pull request",
            "coverImage": "/code_review.jpg",
            "date": "December 2023",
            "author": author,
            "link": "https://www.capitalone.com/tech/software-engineering/pull-request-best-practices/",
            "excerpt": "Reviewing pull requests (PRs) is a fundamental part of a developer’s day-to-day. Throughout your technology career, reviewing"
        },
        {
            "title": "Demystifying Kubernetes: Exploring the Key Components of Kubernetes",
            "coverImage": "/kubernetes.jpg",
            "date": "August 2023",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/demystifying-kubernetes-exploring",
            "excerpt": "Ever faced a daunting task, like orchestrating a move, landing a job, or crafting a gourmet dinner? Imagine having an organizer"
        },
        {
            "title": "To buy or build? A discussion on the key factors impacting this decision and trend toward third parties.",
            "coverImage": "/buy_v_build.jpg",
            "date": "November 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/to-buy-or-build-a-discussion-on-the",
            "excerpt": "Tinkering on a side project or trying to launch a company? Need a complex cloud or AI service? Unsure if you should pull up your"
        },
        {
            "title": "What’s all the fuss about cloud technology? An introduction to the cloud and its use cases.",
            "coverImage": "/cloud.jpg",
            "date": "August 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/whats-all-the-fuss-about-cloud-technology",
            "excerpt": "Terrified of losing a cherished family photo? In the past you may have uploaded it to a hard drive and stored a printed copy. Now"
        },
        {
            "title": "Does blockchain technology support more secure communication than the internet?",
            "coverImage": "/blockchain_security.jpg",
            "date": "July 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/does-blockchain-technology-support",
            "excerpt": "We’ve all heard about the blockchain by now, whether through an eager Gen Zer, the news, or even a financial advisor bullish on"
        },
        {
            "title": "How are our communications securely sent over the internet? A deep dive into public-key cryptography.",
            "coverImage": "/public_encryption.jpg",
            "date": "June 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/how-are-our-communications-securely",
            "excerpt": "Remember when you could turn to tell your friend a secret in class, or pass your bestie a note? Nowadays many of us are"
        },
        {
            "title": "Will technology security implode? A discussion on P vs NP.",
            "coverImage": "/p_v_np.jpg",
            "date": "June 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/will-technology-security-implode",
            "excerpt": "We log into bank accounts without any concern. We send emails with confidence that our data is protected. And we share"
        },
        {
            "title": "How fast is fast enough? A discussion on computer efficiency.",
            "coverImage": "/efficiency.jpg",
            "date": "June 2022",
            "author": author,
            "link": "https://hadleypeterson.substack.com/p/how-fast-is-fast-enough-a-discussion",
            "excerpt": "When interacting with computers, we want them to work fast. After typing 18/3, we expect the answer - 6 - to be outputted"
        }
    ]
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <PageTitleComponet title="Blogs"></PageTitleComponet>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {posts.map((post) => (
                <BlogPreview
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    link={post.link}
                    excerpt={post.excerpt}
                />
                ))}
            </div>
        </div>
    );
  }