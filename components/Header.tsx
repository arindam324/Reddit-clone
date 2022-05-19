import Image from 'next/image'
import { BiSearch, BiBell } from 'react-icons/bi'
import Avatar from './Avatar'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 px-20 py-2 bg-white ">
      <div className="flex items-center">
		  <Image 
          src="/reddit-logo.png"
          width={80}
          objectFit="contain"
          height={50}
        />
        <h2 className="text-2xl font-bold">reddit</h2>
      </div>
      <div className="flex items-center space-x-5">
        <BiSearch className="text-2xl cursor-pointer" />
        <BiBell className="text-2xl cursor-pointer" />
        <div className="flex">
          <Avatar img="https://i.pravatar.cc/150?img=37" size={40} />
        <div className="ml-4">
          <h2 className="font-semibold">Nanny tuks</h2>
          <p className="text-sm text-gray-700">@nayny55</p>
        </div>
		  
        </div>
      </div>
    </header>
  )
}

export default Header
