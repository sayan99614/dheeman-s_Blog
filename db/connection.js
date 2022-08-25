import { MongoClient } from "mongodb";
const url = process.env.dataurl;
const dbName = "comments";
export const client = new MongoClient(url);
export default function connectDatabase() {
  let db;
  try {
    db = client.db(dbName);
  } catch (error) {
    console.log(error);
    throw new Error("connection with database unsuccessful");
  }
  return db;
}
