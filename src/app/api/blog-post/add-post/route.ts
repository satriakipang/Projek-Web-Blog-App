import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();
    const newlyCreatedPost = await prisma.post.create({
      data: extractPostData,
    });

    console.log(extractPostData, "extractPostData");

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "Blog baru berhasil ditambahkan",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Ada yang salah ! Silakan coba lagi",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Ada yang salah ! Silakan coba lagi",
    });
  }
}
