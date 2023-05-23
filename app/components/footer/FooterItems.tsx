"use client"

const footerItems = [
	{
		title: "Product",
		children: [
			{
				title: "Download",
				href: "/download",
			},
			{
				title: "Nitro",
				href: "/nitro",
			},
			{
				title: "Status",
				href: "https://discordstatus.com",
			},
		],
	},
	{
		title: "Company",
		children: [
			{
				title: "About",
				href: "/company",
			},
			{
				title: "Jobs",
				href: "/jobs",
			},
			{
				title: "Brand",
				href: "/branding",
			},
			{
				title: "Newsroom",
				href: "/newsroom",
			},
		],
	},
	{
		title: "Resources",
		children: [
			{
				title: "College",
				href: "/college",
			},
			{
				title: "Support",
				href: "https://support.discord.com/hc/en-us",
			},
			{
				title: "Safety",
				href: "/safetycenter",
			},
			{
				title: "Blog",
				href: "/blog",
			},
			{
				title: "Feedback",
				href: "https://feedback.discord.com",
			},
			{
				title: "Build",
				href: "/build",
			},
			{
				title: "StreamKit",
				href: "/streamkit",
			},
			{
				title: "Creators",
				href: "/creators",
			},
			{
				title: "Community",
				href: "/community",
			},
			{
				title: "Official 3rd Part Merch",
				href: "https://discordmerch.com/evergreenfooter",
			},
		],
	},
	{
		title: "Policies",
		children: [
			{
				title: "Terms",
				href: "/terms",
			},
			{
				title: "Privacy",
				href: "/privacy",
			},
			{
				title: "Cookie Settings",
				href: "/",
			},
			{
				title: "Guidelines",
				href: "/guidelines",
			},
			{
				title: "Acknowledgements",
				href: "/acknowledgements",
			},
			{
				title: "Licenses",
				href: "/licenses",
			},
			{
				title: "Moderation",
				href: "/moderation",
			},
			{
				title: "Company Information",
				href: "/company-information",
			},
		],
	},
]

const FooterItems = () => {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-14">
			{footerItems.map((item, index) => (
				<div key={index} className="flex flex-col gap-4">
					<p className="text-[#5865f2] ">{item.title}</p>
					<div className="flex flex-col gap-4">
						{item.children.map((child, cIndex) => (
							<a
								key={cIndex}
								className="hover:underline hover:underline-offset-2 text-[#fff] transition-all"
								href={child.href}
								title={`Go to ${child.title}`}>
								{child.title}
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default FooterItems
