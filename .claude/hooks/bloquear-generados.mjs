// PreToolUse (Edit/Write/MultiEdit): bloquea la edición manual de archivos generados.
import { readFileSync } from "node:fs";

const evento = JSON.parse(readFileSync(0, "utf8") || "{}");
const archivo = String(evento.tool_input?.file_path ?? "").replace(/\\/g, "/");

const generados = [
  /(^|\/)package-lock\.json$/,
  /(^|\/)\.next(\/|$)/,
  /(^|\/)next-env\.d\.ts$/,
  /(^|\/)tsconfig\.tsbuildinfo$/,
];

if (generados.some((re) => re.test(archivo))) {
  console.error(
    `Bloqueado: ${archivo} es un archivo generado. No lo edites a mano (usá npm install / npm run build / npm run dev).`,
  );
  process.exit(2);
}
