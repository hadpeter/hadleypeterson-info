import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../app/components/container.js'
import PostBody from '../../components/blogPostBody.js'
import PostHeader from '../../components/blogPostHeader.js'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import BlogPost from '../../classes/blgPost.js'


// post is a BlogPost object, morePosts is a list of BlogPost objects and preview is a bool
export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  const title = `${post.title}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Head>
          <title>Loading ...</title>
        </Head>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

// returns a dictionary mapping slug to a string
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'signupForm',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
