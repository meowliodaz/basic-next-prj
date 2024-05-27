"use client"

import { useEffect, useState } from "react";
import Issue from "./Issue"
import axios from "axios";

import { IssueInterface } from "../IssueSchemas";


const IssuesDisplay = () => {
	const [issues, setIssues] = useState<IssueInterface[]>([]);
	const getIssues = async () => {
		const response = await axios.get("/api/issues")
		setIssues(response.data)
	}
	useEffect(() => {getIssues()}, [])

	return (
		<div className="space-y-4 max-w-screen-md ">
			{issues.map((item) => (
				<Issue 
					key={`issue-${item.id}`}
					id={item.id}
					title={item.title}
					description={item.description}
					status={item.status}
					createdAt={item.createdAt}
					updatedAt={item.updatedAt}
				/>
			))}
		</div>
	)
}

export default IssuesDisplay;