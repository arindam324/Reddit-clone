import { useEffect, useState } from 'react'
import { DataStore } from 'aws-amplify'
import { formatDistance } from 'date-fns'
import { Post as PostModel } from '../src/models'
import CreatePostButton from './CreatPostButton'
import Post from './Post'

const Main: React.FC = () => {
  const [posts, setPost] = useState<PostModel[]>([])

  const fetchPosts = async () => {
    const Data = await DataStore.query(PostModel)
    setPost(Data)
  }

  useEffect(() => {
    fetchPosts()
  }, [posts])

  return (
    <div className="mx-auto h-[calc(100vh-64px)] max-w-[800px] overflow-x-scroll scrollbar-hide">
      <CreatePostButton />
      <div>
        {posts.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            username={item.user}
            community={item.community}
            content={item.text}
			image={item.media}
            time={formatDistance(new Date(item.createdAt), new Date(), {
              addSuffix: true,
            })}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
