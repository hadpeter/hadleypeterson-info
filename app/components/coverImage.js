import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage(props) {
    var title = props.title
    var src = props.src
    var link = props.link
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': link,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      <Link href={link} aria-label={title}>
        {image}
      </Link>
    </div>
  )
}
