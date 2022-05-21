import Image from 'next/image'
import { formatDistance } from 'date-fns'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'

interface PostProps {
  community: string
  username: string
  time: string | undefined
  title: string
  content: string | undefined
  image?: string | undefined
}

const Post: React.FC<PostProps> = ({
  community,
  username,
  title,
  time,
  content,
  image,
}) => {
  return (
    <article className="my-4 w-[800px] rounded-md bg-white p-4 shadow-lg">
      <p>
        <span className="font-semibold">{community}</span> is posted by{' '}
        <span className="font-semibold">{username}</span>{' '}
        {time &&
          formatDistance(new Date(time), new Date(), { addSuffix: true })}
      </p>
      <div>
        <div className="mr-3">
          <BiUpArrow className="text-2xl cursor-pointer" />
          <BiDownArrow className="text-2xl cursor-pointer" />
        </div>
        <div>
          <h2 className="py-2 text-2xl font-semibold">{title}</h2>
          <p className="text-sm leading-6">{content}</p>

          {image && (
            <Image
              src={image}
              objectFit="cover"
              className="rounded-md"
              width={650}
              height={300}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default Post
