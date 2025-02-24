import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser to handle FormData
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), "public/uploads");
  form.keepExtensions = true;

  if (!fs.existsSync(form.uploadDir)) {
    fs.mkdirSync(form.uploadDir, { recursive: true });
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }

    const oldPath = files.profilePic.filepath;
    const newPath = path.join(form.uploadDir, files.profilePic.originalFilename);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving file" });
      }
      res.status(200).json({ success: true, profilePic: `/uploads/${files.profilePic.originalFilename}` });
    });
  });
}