import connectDatabase, { client } from "./connection";

export default async function insertDocument(doc) {
  try {
    const db = connectDatabase();
    const comments = db.collection("comments");
    const result = await comments.insertOne(doc);
    client.close();
    return result;
  } catch (error) {
    console.log(error);
    client.close();
    throw new Error("can't insert the document at this moment");
  }
}
