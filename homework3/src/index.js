import { createFolder, deleteFolder } from "./task1/task1.js";
import { createFile, readFile } from "./task2/task2.js";

await createFolder();
await deleteFolder();

await createFile();
await readFile();