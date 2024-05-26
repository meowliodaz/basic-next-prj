import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { createIssueSchema } from "@/app/IssueSchemas";

// Get issue by ID
export async function GET() {
	return NextResponse.json
}

// Update issue
export async function PUT() {
	return NextResponse.json 
}

// Delete issue
export async function DELETE() {
	return NextResponse.json 
}