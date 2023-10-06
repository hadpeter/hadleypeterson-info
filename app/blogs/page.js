import BlogPreview from '../components/blogPostPreview.js'
import PageTitleComponet from "../components/pageTitle.js"
import BlogPost from '../classes/blogPost.js'

export default function Blogs() {
    // TODO: populate posts with blogPost class objects based on the blog post information in that folder
    var posts = []
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <PageTitleComponet title="Blogs"></PageTitleComponet>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {posts.map((post) => (
                    <BlogPreview
                        key=''
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        signupForm={post.signupForm}
                    />
                    ))}
                </div>
            </section>
        </div>
    );
  }