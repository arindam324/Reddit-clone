import { useEffect, useState } from 'react'
import { DataStore,Predicates, SortDirection } from 'aws-amplify'
import { formatDistance } from 'date-fns'
import { Post as PostModel } from '../src/models'
import CreatePostButton from './CreatPostButton'
import Post from './Post'

const Main: React.FC = () => {
  const [posts, setPost] = useState<PostModel[]>([])

  const fetchPosts = async () => {
    const Data = await DataStore.query(PostModel, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    })
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
            time={item.createdAt}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
