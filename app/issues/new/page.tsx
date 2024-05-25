"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
	return (
		<div className='max-w-xl space-y-2'>
			<TextField.Root>
				<TextField.Input
					placeholder='Title'
					className='max-w-xl'
					/>
			</TextField.Root>
			<TextArea placeholder='Description' />
			<Button>Submit new issue</Button>
		</div>
	)
}

export default NewIssuePage
