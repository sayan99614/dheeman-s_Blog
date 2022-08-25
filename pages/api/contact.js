import insertDocument from "../../db/insertDocument";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email.includes("@") || !email || !message) {
      res
        .status(422)
        .send({ error: "invalid fields please rovide all details" });
    }

    const messageobj = {
      name,
      email,
      message,
    };

    try {
      const result = await insertDocument(messageobj);
      res.status(201).send({ message: "added successfully", data: result });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ error: "cannot insert the document at this moment" });
    }
  }
}
