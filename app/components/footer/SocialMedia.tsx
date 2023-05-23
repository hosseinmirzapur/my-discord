"use client"

import { IconType } from "react-icons/lib"
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoYoutube,
	IoLogoTiktok,
} from "react-icons/io5"

interface SocialMediaItem {
	title: string
	Icon: IconType
	link: string
}

const smItems: SocialMediaItem[] = [
	{
		title: "Discord on Twitter",
		link: "https://twitter.com/discord",
		Icon: IoLogoTwitter,
	},
	{
		title: "Discord on Instagram",
		link: "https://instagram.com/discord",
		Icon: IoLogoInstagram,
	},
	{
		title: "Discord on Facebook",
		link: "https://facebook.com/discord",
		Icon: IoLogoFacebook,
	},
	{
		title: "Discord on Youtube",
		link: "https://youtube.com/discord",
		Icon: IoLogoYoutube,
	},
	{
		title: "Discord on TikTok",
		link: "https://tiktok.com/@discord",
		Icon: IoLogoTiktok,
	},
]

const SocialMedia = () => {
	return (
		<div className="flex flex-row gap-6">
			{smItems.map((item, index) => (
				<a
					href={item.link}
					key={index}
					target="_blank"
					rel="noreferrer"
					className="flex flex-row gap-2 items-center"
					title={item.title}>
					<item.Icon size={28} />
				</a>
			))}
		</div>
	)
}

export default SocialMedia
