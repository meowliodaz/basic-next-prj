import { EnumValues, z } from "zod";

export interface IssueInterface {
	id: number;
	title: string;
	description: string;
	status: string;
	createdAt: Date;
	updatedAt: Date
}

export const IssueSchema = z.object({
	title: z.string().min(1, "Title is required!").max(255, "Title is too long! Must be 255 characters or less!"),
	description: z.string().min(1, "Description is required!"),
	status: z.string()
});
