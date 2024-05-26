
import { Button, Select, TextField } from "@radix-ui/themes";
import { IssueInterface, IssueSchema } from "../IssueSchemas";
import Link from "next/link";
import classnames from "classnames";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessages";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/app/components/Spinner";
import SimpleMDE from "react-simplemde-editor";

type IssueForm = z.infer<typeof IssueSchema>


const IssueEditForm = ({ id, title, description, status, createdAt, updatedAt}:IssueInterface) => {
	const [isSubmitting, setSubmitting] = useState(false)
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IssueForm>();

	return (
		<form
			className="space-y-5"
			onSubmit={handleSubmit(async (data) => {
				try {
					setSubmitting(true);
					await axios.put(`/api/issues/${id}`, data);		// PUT updated issue here
					router.refresh();								// Redirect/Refresh here
				} catch (error) {
					setSubmitting(false);
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
						defaultValue={title}
					/>
				</TextField.Root>
			</div>
			<div>
				{/* TODO: Set defaultValue to issue's old value */}
				<Select.Root defaultValue={status} {...register('status')}>		
					<Select.Trigger className="w-28" />
					<Select.Content>
						<Select.Group>
							<Select.Item value="OPEN">OPEN</Select.Item>
							<Select.Item value="PROCESSING">PROCESSING</Select.Item>
							<Select.Item value="CLOSED">CLOSED</Select.Item>
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
			<div>
				<ErrorMessage>
					{errors.description?.message}
				</ErrorMessage>
				<Controller
					name="description"
					control={control}
					render={({field}) => <SimpleMDE placeholder='Description' {...field} value={description}/>}
				/>
			</div>
			<Button disabled={isSubmitting}>{!isSubmitting && "Update issue"}{isSubmitting && <Spinner />}</Button>
		</form>
	);
}

export default IssueEditForm;