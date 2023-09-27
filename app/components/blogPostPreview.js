import Avatar from './avatar'
import CoverImage from './coverImage'
import Link from 'next/link'
import Author from '../../classes/author.js'

export default function BlogPreview(props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={props.slug} title={props.title} src={props.coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${props.slug}`}
          href="/posts/"
          className="hover:underline"
        >
          {props.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        {props.date}
      </div>
      <p className="text-lg leading-relaxed mb-4">{props.excerpt}</p>
      <Avatar name={props.author.name} picture={props.author.picture} />
    </div>
  )
}
