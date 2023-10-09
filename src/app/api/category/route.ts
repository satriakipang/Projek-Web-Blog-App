import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const extractCategoryID = searchParams.get("categoryID");

    const getBlogPostListBasedOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID || "",
      },
    });

    if (getBlogPostListBasedOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Gagal mengambil data! Silakan coba lagi",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Ada yang salah ! Silakan coba lagi",
    });
  }
}
