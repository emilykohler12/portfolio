// PreToolUse (Bash): bloquea `git push --force` / `-f`. Se permite --force-with-lease.
// No se bloquea el push directo a main/master: no hay evidencia firme de despliegue automático.
import { readFileSync } from "node:fs";

const evento = JSON.parse(readFileSync(0, "utf8") || "{}");
const comando = String(evento.tool_input?.command ?? "");

const esPush = /\bgit\b[^\n;&|]*\bpush\b/.test(comando);
const esForce =
  /\s--force(?!-with-lease)(\s|=|$)/.test(comando) ||
  /\s-[a-zA-Z]*f[a-zA-Z]*(\s|$)/.test(comando.replace(/--\S+/g, ""));

if (esPush && esForce) {
  console.error("Bloqueado: `git push --force` no está permitido. Usá --force-with-lease si es imprescindible.");
  process.exit(2);
}
