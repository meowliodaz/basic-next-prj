"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoBugSharp } from "react-icons/io5";
import classnames from "classnames";


const NavBar = () => {
	const currentPath = usePathname();
	console.log(currentPath)

	const links = [
		{ label: "Dashboard", href: "/"},
		{ label: "Issues", href: "/issues"}
	];
	return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href="/"><IoBugSharp /></Link>
			<ul className='flex space-x-6'>
				{links.map(item => {
					return (
						<li key={item.href} className='group'>
							<Link
								href={item.href}
								className={classnames({
									'text-gray-900': item.href !== currentPath,
									'text-blue-500 font-semibold': item.href === currentPath,
									'group-hover:opacity-50 transition-opacity': true
								})}
							>
								{item.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavBar