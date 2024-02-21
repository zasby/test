// import { createFFmpeg } from "@ffmpeg/ffmpeg";

// export async function convertBlobToMP4(inputBlob: Blob): Promise<Blob> {
//   // Initialize the ffmpeg instance
//   const ffmpeg = createFFmpeg({ log: true });
//   await ffmpeg.load();
//
//   // Read the input blob into memory
//   const inputBuffer = await inputBlob.arrayBuffer();
//
//   // Write the input buffer to a temporary file
//   const inputPath = "input.wav";
//   ffmpeg.FS("writeFile", inputPath, new Uint8Array(inputBuffer));
//
//   // Run the ffmpeg conversion command
//   const outputPath = "output.mp4";
//   const command = `-i ${inputPath} -c:v libx264 -c:a aac -b:a 192k -strict -2 ${outputPath}`;
//   await ffmpeg.run(command);
//
//   // Read the output file into memory
//   const outputData = ffmpeg.FS("readFile", outputPath);
//
//   // Return the output data as a Blob object
//   const outputBlob = new Blob([outputData.buffer], { type: "video/mp4" });
//   return outputBlob;
// }

export const parseJwt = (jwtToken: string) => {
  return JSON.parse(window.atob(jwtToken.split(".")[1]));
};
