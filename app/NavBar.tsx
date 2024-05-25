import Link from 'next/link';
import React from 'react';
import { IoBugSharp } from "react-icons/io5";


const NavBar = () => {
	const links = [
		{ label: "Dashboard", href: "#"},
		{ label: "Issues", href: "#"}
	];
	return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href="/"><IoBugSharp /></Link>
			<ul className='flex space-x-6'>
				{links.map(nav_item => {
					return (
						<li key={nav_item.href} className='group'>
							<Link
								href={nav_item.href}
								className="text-gray-900 group-hover:opacity-50 transition-opacity"
							>
								{nav_item.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavBar