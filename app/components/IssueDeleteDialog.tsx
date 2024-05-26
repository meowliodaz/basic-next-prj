
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IssueInterface } from '../IssueSchemas';
import axios from 'axios';


const IssueDeleteDialog = ({ id, title, description, status, createdAt, updatedAt}:IssueInterface) => {	
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button variant="surface">
					Delete
				</Button>
			</Dialog.Trigger>

			<Dialog.Content className='max-w-lg'>
				<Dialog.Title>Deleting Issue</Dialog.Title>
				<Dialog.Description size="3" mb="5">
					Are you sure you want to delete issue, titled:
					<p className='font-medium text-lg'>{title}</p>
				</Dialog.Description>

				<Flex gap="3" mt="4" justify="end">
					<Dialog.Close>
						<Button variant="soft" color="gray">
							Cancel
						</Button>
					</Dialog.Close>
					<Dialog.Close>
						<Button
							onClick={async() => {
								console.log("Delete")
								const issueResponse = await axios.delete(`http://localhost:3000/api/issues/${issueID}`, {})

							}}
						>
							Confirm
						</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	)
}

export default IssueDeleteDialog;
