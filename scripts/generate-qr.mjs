import QRCode from "qrcode";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const TARGET_URL = "https://toucagroup.com/c/touca2026cp";

const OUT_DIR = path.join(ROOT, "public", "qr");
const PNG_PATH = path.join(OUT_DIR, "company-profile.png");
const SVG_PATH = path.join(OUT_DIR, "company-profile.svg");
const ROOT_PNG_PATH = path.join(ROOT, "company-profile-qr.png");

const baseOpts = {
  errorCorrectionLevel: "H",
  margin: 2,
  color: { dark: "#0F172A", light: "#FFFFFF" },
};

await mkdir(OUT_DIR, { recursive: true });

await QRCode.toFile(PNG_PATH, TARGET_URL, { ...baseOpts, type: "png", width: 1024 });
await QRCode.toFile(SVG_PATH, TARGET_URL, { ...baseOpts, type: "svg" });
await copyFile(PNG_PATH, ROOT_PNG_PATH);

console.log("[gen:qr] QR generated for:", TARGET_URL);
console.log("[gen:qr] Files:");
console.log("  -", path.relative(ROOT, PNG_PATH));
console.log("  -", path.relative(ROOT, SVG_PATH));
console.log("  -", path.relative(ROOT, ROOT_PNG_PATH));
