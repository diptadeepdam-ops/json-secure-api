import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const clientKey = req.headers["x-api-key"];
  const serverKey = process.env.API_KEY;

  if (clientKey !== serverKey) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  res.status(200).json(jsonData);
}
