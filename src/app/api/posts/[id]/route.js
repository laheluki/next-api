import { NextResponse } from "next/server";

import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {
  const id = parseInt(params.id);

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PATCH(request, { params }) {
  const id = parseInt(params.id);

  const { title, content } = await request.json();

  const post = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(post);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  const post = await prisma.post.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(post);
}
