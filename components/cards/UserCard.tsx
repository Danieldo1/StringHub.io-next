'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
}

const UserCard = ({
    id,
    name,
    username,
    imgUrl,
    personType
}: Props) => {

    const router = useRouter()
  return (
    <article className="user-card">
        <div className="user-card_avatar">
            <Image 
            src={imgUrl}
            alt='logo'
            width={48}
            height={48}
            className="rounded-full"
            />
            <div className="flex-1 text-ellipsis">
                <h4 className="text-base-semibold text-light-1">{name}</h4>
                <p className="text-small-medium text-gray-1">
                <span className="text-indigo-400 mr-2 text-[20px]">{'{'}</span>
                            @{username}
                <span className="text-indigo-400 ml-2 text-[20px]">{'}'}</span>
                </p>
            </div>
        </div>
        <Button className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
        >View</Button>
    </article>
  )
}

export default UserCard