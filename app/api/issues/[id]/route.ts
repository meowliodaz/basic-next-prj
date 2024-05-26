import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { IssueSchema } from "@/app/IssueSchemas";

// Get issue by ID
export async function GET(request: NextRequest) {
	const issueID = Number(request.url.split("issues/")[1].split("/")[0]);

	const issueRespone = await prisma.issues.findUnique({
		where: {
			id: issueID
		}
	});

	return NextResponse.json(issueRespone, { status: 200 })
}

// Update issue
export async function PUT(request: NextRequest) {
	const body = await request.json();

	const issueID = Number(request.url.split("issues/")[1].split("/")[0]);
	const edittedIssue = await prisma.issues.update({
		where: {
			id: issueID
		},
		data: {
			title: body.title,
			description: body.description,
			status: body.status
		}
	})

	return NextResponse.json(edittedIssue, { status: 200 })
}

// Delete issue
export async function DELETE() {
	return NextResponse.json 
}