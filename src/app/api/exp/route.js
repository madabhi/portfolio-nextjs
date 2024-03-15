// import Blog from "@/models/Blog";
// import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     await Blog.updateMany(
//       { likes: { $exists: false } },
//       { $set: { likes: 0 } }
//     );
//     console.log("Existing documents updated successfully!");
//     return NextResponse.json("success");
//   } catch (error) {
//     console.error("Error updating existing documents:", error);
//     return NextResponse.error("error");
//   }
// }
