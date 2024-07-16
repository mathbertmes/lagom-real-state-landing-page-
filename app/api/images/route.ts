// import cloudinary from "@/lib/cloudnary";
// import { ImageProps } from "@/types";
// import { NextResponse } from "next/server";

// export async function GET(
//   req: Request
// ) {
//   try {

//     const results = await cloudinary.v2.search
//     .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by("public_id", "desc")
//     .max_results(400)
//     .execute();

//     return NextResponse.json(results)
//   let reducedResults: ImageProps[] = [];

//   let i = 0;
//   for (let result of results.resources) {
//     reducedResults.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     });
//     i++;
//   }

  
//   } catch (error) {
//     console.log('IMAGES_GET]', error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };