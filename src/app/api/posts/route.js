import { NextResponse } from "next/server";

import prisma from "../../../../prisma/client";

export async function GET() {
  // Get all posts
  const posts = await prisma.post.findMany();

  return NextResponse.json(posts);
}

export async function POST(req) {
  const { title, content } = await req.json();

  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  return NextResponse.json(post);
}
