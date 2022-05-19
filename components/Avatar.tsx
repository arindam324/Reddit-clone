import Image from 'next/image'


const Avatar:React.FC<{img:string,size:number}> =({img,size}) =>{
	return (
		<Image className="rounded-full" src={img} width={size} height={size} />
	)
}

export default Avatar
