import Avatar from './avatar'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../classes/author.js'

export default function PostHeader(props) {
  return (
    <>
      <PostTitle>{props.title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={props.author.name} picture={props.author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage slug={props.slug} title={props.title} src={props.coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={props.author.name} picture={props.author.picture} />
        </div>
        <div className="mb-6 text-lg">
          {props.date}
        </div>
      </div>
    </>
  )
}

