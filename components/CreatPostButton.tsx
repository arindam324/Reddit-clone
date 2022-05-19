import Avatar from './Avatar'
import { BsImage, BsLink } from 'react-icons/bs'
import { useRouter } from 'next/router'

const CreatePostButton = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/submit')}
      className="flex items-center w-full px-2 py-4 my-2 bg-white cursor-pointer rounded-md"
    >
      <Avatar img="https://i.pravatar.cc/150?img=37" size={40} />
      <input
        placeholder="create Post"
        className="w-full p-2 mx-4 bg-gray-100"
      />
      <div className="flex space-x-5">
        <BsImage className="text-2xl" />
        <BsLink className="text-2xl" />
      </div>
    </div>
  )
}

export default CreatePostButton
