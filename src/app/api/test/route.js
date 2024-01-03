import containerClient from "@/utils/azure";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
   

    const blobName = "quickstart254464f68dfdg4f44f6sdf41" + ".txt";

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    console.log(
      `\nUploading to Azure storage as blob\n\tname: ${blobName}:\n\tURL: ${blockBlobClient.url}`
    );

    const data = "Hello, World!";
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(
      `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`
    );
    return NextResponse.json({
      message: "success",
      data: uploadBlobResponse,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      body: {
        message: error.message,
      },
    });
  }
}
