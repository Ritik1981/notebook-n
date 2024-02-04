// import {v2 as cloudinary} from 'cloudinary'
const cloudinary = require("cloudinary");
// import fs from "fs";
const fs = require("fs");

cloudinary.config({
  cloud_name: "dazmqutip", //process.env.CLOUD_NAME,
  api_key: "126285411787831", // process.env.API_KEY,
  api_secret: "pDYUXAhsOecfAv6Urc11cDN_1rI", //process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;
  try {
    console.log("eneterd try");
    console.log(localFilePath);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      media_metadata: true,
    });
    console.log("uploaded");
    fs.unlinkSync(localFilePath);
    console.log(response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error Uploading on Cloudinary: ", error);
  }
};

// export default uploadOnCloudinary;
module.exports = {
  uploadOnCloudinary,
};
