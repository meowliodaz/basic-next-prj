import { Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

import IssuesDisplay from '../components/IssuesDisplay'


const IssuesPage = () => {
	return ( 
		<div>
			<h1 className="text-3xl font-bold mb-5">Issues Page</h1>
			<div>
				<Button>
					<Link href="/issues/new">New Issue</Link>
				</Button>
			</div>
			<div className='mt-10'>
				<IssuesDisplay />
			</div>
		</div>
	)
}

export default IssuesPage