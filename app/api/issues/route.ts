import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { IssueSchema } from "@/app/IssueSchemas";

// Get all issues
export async function GET() {
	const issues = await prisma.issues.findMany();
	return NextResponse.json(issues, { status: 200 })
}

// Create new issue
export async function POST(request: NextRequest) {
	const body = await request.json();
	const validate = IssueSchema.safeParse(body);
	if (!validate.success)
		return NextResponse.json(validate.error.format(), { status: 400 })

	const newIssue = await prisma.issues.create({
		data: {
			title: body.title,
			description: body.description
		}
	})
	return NextResponse.json(newIssue, { status: 201 })
}
