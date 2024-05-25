"use client"

import "easymde/dist/easymde.min.css";
import { Button,  Callout,  Text,  TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver} from "@hookform/resolvers/zod";

import { createIssueSchema } from "@/app/ValidationSchema";


type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IssueForm>({
		resolver: zodResolver(createIssueSchema)
	});
	const [error, setError] = useState('');
	
	return (
		<div className="max-w-xl">
			{error && <Callout.Root color="red" className="mb-2">
				<Callout.Text>{error}</Callout.Text>
			</Callout.Root>
				}
			<form
				className="space-y-5"
				onSubmit={handleSubmit(async (data) => {
					try {
						await axios.post("/api/issues", data);
						router.push("/issues");
					} catch (error) {
						setError("An unexpected error has occured!");
					}
				})}
			>
				<div className="space-y-2">
					{errors.title && <Text color="red" as="p">
							{errors.title.message}
						</Text>
					}
					<TextField.Root>
						<TextField.Input
							placeholder='Title'
							className='max-w-xl'
							{...register('title')}
							/>
					</TextField.Root>
				</div>
				<div>
					{errors.description && <Text color="red" as="p">
							{errors.description.message}
						</Text>
					}
					<Controller
						name="description"
						control={control}
						render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
					/>
				</div>
				<Button>Submit new issue</Button>
			</form>
		</div>
	)
}

export default NewIssuePage
