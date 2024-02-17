import type Author from './author'

type Blog = {
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  link: string
}

export default Blog
