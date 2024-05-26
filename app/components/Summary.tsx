"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IssueInterface } from '../IssueSchemas';

const Summary = () => {
	const [issues, setIssues] = useState<IssueInterface[]>([]);

	const getIssues = async () => {
		const issuesResponse = await axios.get(`http://localhost:3000/api/issues`, {})
		setIssues(issuesResponse.data)
	}

	useEffect(() => {getIssues()}, [])

	const count = {
		open: 0,
		processing: 0,
		closed: 0
	}

	issues.map((item) => {
		if (item.status === 'OPEN') count.open += 1;
		else if (item.status === 'CLOSED') count.closed += 1;
		else count.processing += 1;
	})
  
	return (
		<div className='bg-gray-100 max-w-lg p-3 space-y-2'>
			<div className='space-x-2 flex w-auto justify-between'>
				<div className='w-56 text-center font-bold text-lg'>
					Open Issues
				</div>
				<div className='w-56 text-center font-bold text-lg'>
					Processing Issues
				</div>
				<div className='w-56 text-center font-bold text-lg'>
					Closed Issues
				</div>
			</div>
			<div className='space-x-2 w-auto flex justify-between'>
				<div className='w-56 text-xl font-medium text-center text-red-500 underline'>
					{count.open}
				</div>
				<div className='w-56 text-xl font-medium text-center text-green-500 underline'>
					{count.processing}
				</div>
				<div className='w-56 text-xl font-medium text-center text-black underline'>
					{count.closed}
				</div>
			</div>
		</div>
	)
}

export default Summary;
