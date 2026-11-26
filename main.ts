import { mkdirSync, writeFileSync } from "node:fs";

// Sign-shaped and short: the ghost is not the problem, its lack of ITIL discipline is.
const entry = "WARNING: This room is haunted. The ghost has root access and has never once submitted a ticket.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
