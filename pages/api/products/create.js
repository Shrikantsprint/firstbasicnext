// api/save-product.js
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req, res) {
  // export default async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  //res.status(200).send(req);

  //res.status(200).json({ message1: req.body.name });
  // Make the POST request to the PHP file
  const response = await fetch(
    "https://www.advertiseyourspace.com/api/index.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );
  const responsedata = await response.text();
  res.status(200).json({ message: responsedata });
  //res.status(200).send({ errorData });
  // if (response.ok) {
  //   // The request was successful
  //   // Save the information to the database in your Next.js application
  //   res.status(201).json({ message: "Product created successfully" });
  // } else {
  //   const errorData = await response.json();
  //   res
  //     .status(500)
  //     .json({ message: "Product creation failed", error: errorData });
  // }
}
