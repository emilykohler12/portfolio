// PostToolUse (Edit/Write/MultiEdit): corre ESLint sobre los .ts/.tsx de src/ y muestra los errores.
import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const evento = JSON.parse(readFileSync(0, "utf8") || "{}");
const raiz = process.env.CLAUDE_PROJECT_DIR || evento.cwd || process.cwd();
const archivo = String(evento.tool_input?.file_path ?? "");
if (!archivo) process.exit(0);

const absoluto = path.resolve(raiz, archivo);
const relativo = path.relative(raiz, absoluto).replace(/\\/g, "/");

// Solo .ts/.tsx dentro de src/ que existan; cualquier otro caso se ignora en silencio.
if (!/^src\/.+\.tsx?$/.test(relativo) || !existsSync(absoluto)) process.exit(0);

const r = spawnSync(`npx eslint "${relativo}"`, {
  cwd: raiz,
  encoding: "utf8",
  shell: true, // npx es npx.cmd en Windows
});

if (r.status !== 0) {
  console.error(`ESLint encontró problemas en ${relativo}:\n${r.stdout}${r.stderr}`);
  process.exit(2);
}
