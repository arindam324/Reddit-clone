import CreatePostButton from  './CreatPostButton'
import Post from './Post'

const Main: React.FC = () => {
  return (
    <div className="mx-auto max-w-[800px]">
		<CreatePostButton />
      <Post
        time="2 days"
		image="https://images.pexels.com/photos/12172608/pexels-photo-12172608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        community="javascript"
        username="robin9079#"
        content="One core difference between these two types of functions is whether or not they have side effects.In this article, you will learn what side effects are and we'll discuss the differences between pure and impure functions.Without any further ado, let's get started with side effects."
        title="Pure Component vs impure function "
      />
    </div>
  )
}

export default Main
