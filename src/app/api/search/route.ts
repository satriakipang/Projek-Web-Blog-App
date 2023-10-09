import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractQuery = url.searchParams.get("query");

    const searchPostList = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: extractQuery || "",
            },
          },
          {
            description: {
              contains: extractQuery || "",
            },
          },
        ],
      },
    });

    if (searchPostList) {
      return NextResponse.json({
        success: true,
        data: searchPostList,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Gagal menelusuri hasil",
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
