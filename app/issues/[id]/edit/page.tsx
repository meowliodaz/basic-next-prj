"use client"

import "easymde/dist/easymde.min.css";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IssueInterface } from "@/app/IssueSchemas";
import IssueEditForm from "@/app/components/IssueEditForm";



const NewIssuePage = () => {
	const [issue, setIssue] = useState<IssueInterface>({} as IssueInterface);
	const issueID = usePathname().split("issues/")[1].split("/")[0];

	const getIssues = async () => {
		const issueResponse = await axios.get(`/api/issues/${issueID}`, {})
		setIssue(issueResponse.data)
	}
	useEffect(() => {getIssues()}, [])
	
	return (
		<div className="max-w-xl">
			<IssueEditForm
				id={issue.id}
				title={issue.title}
				description={issue.description}
				status={issue.status}
				createdAt={issue.createdAt}
				updatedAt={issue.updatedAt}
			/>
		</div>
	)
}

export default NewIssuePage
