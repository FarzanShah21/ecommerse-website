import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: "deywkkqay",
	api_key:"224319831675444",
	api_secret:"NCURV-OA8fFwUrrBShKN7uXjIyE",
});

export default cloudinary;
