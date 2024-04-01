// import { PrismaClient } from "@prisma/client";
// import { nanoid } from "nanoid";

// const prisma = new PrismaClient();

// export default async function POST(req, res) {
//   if (req.method === "POST") {
//     const { longUrl } = req.body;
//     try {
//       const newShortUrl = nanoid(4);
//       const createdUrl = await prisma.url.create({
//         data: {
//           longUrl: longUrl,
//           shortUrl: newShortUrl,
//         },
//       });
//       res.status(201).json(createdUrl);
//     } catch (error) {
//       console.error("Error creating URL:", error);
//       res
//         .status(500)
//         .json({ error: "An error occurred while shortening the URL." });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const body = await req.json();
    const { longUrl } = body;

    const newShortUrl = nanoid(4);
    const createdUrl = await prisma.url.create({
      data: { longUrl, shortUrl: newShortUrl },
    });
    return NextResponse.json({ shortUrl: newShortUrl }, { status: 201 });
  } catch (error) {
    console.error("Error creating URL:", error);
    return NextResponse.json(
      { error: "An error occurred while shortening the URL." },
      { status: 500 }
    );
  }
}
