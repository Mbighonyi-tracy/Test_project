import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "db.json");

  if (!fs.existsSync(dbPath)) {
    return res.json({ registered: false });
  }

  const users = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  if (users.length > 0) {
    res.json({ registered: true });
  } else {
    res.json({ registered:false});
}
}