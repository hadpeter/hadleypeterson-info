import BlogPreview from '../app/components/blogPostPreview.js'
import PageTitleComponet from "../app/components/pageTitle.js"
import BlogPost from '../classes/blogPost.js'

export default function Blogs() {
    // TODO: populate posts with blogPost class objects based on the blog post information in that folder
    var posts = []
    return (
        <div>
            <PageTitleComponet title="Blogs"></PageTitleComponet>
            <section>
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