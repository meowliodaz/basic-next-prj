

import { Button } from "@radix-ui/themes";
import { IssueInterface } from "../IssueSchemas";
import Link from "next/link";
import classnames from "classnames";
import IssueDeleteDialog from "./IssueDeleteDialog";



const Issue = ({ id, title, description, status, createdAt, updatedAt}:IssueInterface) => {
	return (
		<div className='flex justify-between bg-gray-100 rounded-lg px-4 py-4'>
			<div className="space-y-2 ">
				<div className="border-b-2 border-gray-300 w-56">
					<div className="font-medium text-lg">
						{title}
					</div>
				</div>
				<div className="">
					<div>
						Status: <span className={classnames({
							"text-red-500": status === "OPEN",
							"text-green-500": status === "PROCESSING",
							"text-black": status === "CLOSED",
							"font-medium underline": true
						})}>
							{status}
						</span>
					</div>
				</div>
				<div className="max-w-md">
					<div>
						{description}
					</div>
				</div>
			</div>
			<div className="space-x-2">
				<Button className="">
					<Link
						href={`/issues/${(id)}/edit`}
						className=""
					>
						Edit
					</Link>
				</Button>
				<IssueDeleteDialog
					issueID={id}
				/>
			</div>
		</div>
	)
}

export default Issue;