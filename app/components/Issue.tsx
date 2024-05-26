

import { Button } from "@radix-ui/themes";
import { IssueInterface } from "../IssueSchemas";
import Link from "next/link";


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
						{description}
					</div>
				</div>
			</div>
			<div className="">
				<Button className="">
					<Link
						href="/"
						className=""
					>
						Edit
					</Link>
				</Button>
			</div>
		</div>
	)
}

export default Issue;
