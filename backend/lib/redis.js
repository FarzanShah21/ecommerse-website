import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis("rediss://default:Adl2AAIjcDFlY2ViZjdmMTdjZGQ0NDliYThjMDUxODI1NjZiODkzMXAxMA@ideal-grizzly-55670.upstash.io:6379");
