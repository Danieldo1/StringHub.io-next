import Image from "next/image"

interface Props {
    accountId: string
    authUserId: string
    name: string
    username: string
    imgUrl: string
    bio: string
}


function ProfileHeader({
    accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio
}: Props) {
    
    return(
        <div className="flex w-full flex-col justify-start">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative h-20 w-20 object-cover">
                        <Image src={imgUrl} alt='profile image' fill className="rounded-full object-cover shadow-2xl" />
                    </div>

                    <div className="flex-1 ">
                        <h2 className="text-left text-heading3-bold text-light-1">{name}</h2>
                        <p className="text-base-medium text-gray-1 text-left">
                        <span className="text-indigo-400  text-[20px]">{'{ '}</span>
                            @{username}
                            <span className="text-indigo-400  text-[20px]">{' }'}</span>
                        </p>
                    </div>
                </div>
            </div>

                {/* bio */}
                <p className="text-base-medium text-gray-1 text-left mt-5">About: </p>
                <p className="mt-2 max-w-lg text-base-regular text-light-2">{bio}</p>
                <div className="mt-12 h-0.5 w-full bg-dark-3"/>
        </div>
    )
}

export default ProfileHeader;