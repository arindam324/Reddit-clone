import { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { DataStore, Storage } from 'aws-amplify'
import { IoIosDocument } from 'react-icons/io'
import { GoFileMedia } from 'react-icons/go'
import { BsLink } from 'react-icons/bs'

import Header from '../components/Header'
import { Post } from '../src/models'
import { useRouter } from 'next/router'

interface TabsProps {
  id: number
  name: string
  icon: ReactNode
}

const Tabs: TabsProps[] = [
  {
    id: 0,
    name: 'post',
    icon: <IoIosDocument className="text-2xl" />,
  },
  {
    id: 1,
    name: 'Images & Videos',
    icon: <GoFileMedia className="text-2xl" />,
  },
  {
    id: 2,
    name: 'Links',
    icon: <BsLink className="text-2xl" />,
  },
]

const Submit: NextPage = () => {
  const [tab, setTab] = useState<TabsProps>(Tabs[0])
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [media, setMedia] = useState<File | null>(null)

  const router = useRouter()

  const onSubmit = async () => {
    if (media) {
      const { key } = await Storage.put(media.name, media)
      const Url = await Storage.get(key)

      const data = await DataStore.save(
        new Post({
          title: title,
          user: 'ironman478&',
          community: 'Javascript',
          text: content,
          media: Url,
        })
      )
    } else {
      const data = await DataStore.save(
        new Post({
          title: title,
          user: 'ironman478&',
          community: 'Javascript',
          text: content,
        })
      )
		console.log(data)
    }
    router.push('/')
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <div className="mx-auto my-2 w-full max-w-[800px]">
        <h2 className="pb-2 text-2xl font-semibold border-b-2 ">
          Create A Post
        </h2>

        <label
          htmlFor="countries"
          className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select a Community
        </label>
        <select
          id="countries"
          className="block px-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="Javascript">Javascript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="NextJs">NextJs</option>
        </select>
        <div className="flex my-2 space-x-5 divide-x-2 divide-black">
          {Tabs.map((item) => (
            <div
              key={item.id}
              onClick={() => setTab(item)}
              className={`flex cursor-pointer space-x-2 p-2 ${
                tab.id === item.id ? 'font-bold text-red-600' : null
              }`}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="p-4 my-4 bg-gray-300 space-y-4 rounded-md">
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-md ring-red-400 hover:ring-2 focus:outline-none"
          />
          {tab.id === 0 && (
            <textarea
              rows={8}
              placeholder="text(optional)"
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none"
            />
          )}

          {tab.id === 1 && (
            <>
              <input
                className="w-full px-8 py-6 bg-white appearance-none"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setMedia(e.target.files[0])
                  }
                }}
              />
              {media && (
                <Image
                  src={URL.createObjectURL(media)}
                  width={800}
                  objectFit="cover"
                  height={450}
                />
              )}
            </>
        
		  )		  }
          {tab.id === 2 && (
            <input
              type="text"
              className="w-full px-8 py-4 font-bold text-indigo-600 bg-white focus:outline-none "
              placeholder="Link"
            />
          )}
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 text-white bg-gray-500 rounded-md">
              Save Draft
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 text-white bg-red-500 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submit
