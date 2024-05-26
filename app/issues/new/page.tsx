"use client"

import "easymde/dist/easymde.min.css";
import { Button, Callout, Select, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

import { IssueSchema } from "@/app/IssueSchemas";
import { ErrorMessage } from "@/app/components/ErrorMessages";
import Spinner from "@/app/components/Spinner";


type IssueForm = z.infer<typeof IssueSchema>

const NewIssuePage = () => {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IssueForm>();

	const [error, setError] = useState('');
	const [isSubmitting, setSubmitting] = useState(false)
	
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
						setSubmitting(true);
						data.status = "OPEN"
						await axios.post("/api/issues", data);		// POST new issue here
						router.push("/issues");						// Redirect here
					} catch (error) {
						console.log(error);
						setSubmitting(false);
						setError("An unexpected error has occured!");
					}
				})}
			>
				<div>
					<ErrorMessage>
						{errors.title?.message}
					</ErrorMessage>
					<TextField.Root>
						<TextField.Input
							placeholder='Title'
							className='max-w-xl'
							{...register('title')}
							/>
					</TextField.Root>
				</div>
				<div>
					<ErrorMessage>
						{errors.description?.message}
					</ErrorMessage>
					<Controller
						name="description"
						control={control}
						render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
					/>
				</div>
				<Button
					disabled={isSubmitting}
				>
					{!isSubmitting && "Submit new issue"}{isSubmitting && <Spinner />}
				</Button>
			</form>
		</div>
	)
}

export default NewIssuePage
