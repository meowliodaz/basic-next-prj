"use client"

import { Button,  TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
	return (
		<div className='max-w-xl space-y-2'>
			<TextField.Root>
				<TextField.Input
					placeholder='Title'
					className='max-w-xl'
					/>
			</TextField.Root>
			<SimpleMDE placeholder='Description' />
			<Button>Submit new issue</Button>
		</div>
	)
}

export default NewIssuePage
