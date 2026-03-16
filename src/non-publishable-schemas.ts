import {readFile} from 'node:fs/promises';
import path from 'node:path';

const BLOCKLIST_FILE_NAME = 'schema-blocklist.json';

export function isNonPublishableSchemaId(schemaId: string, blocklist: ReadonlySet<string>): boolean {
  return blocklist.has(schemaId.toLowerCase());
}

export async function loadNonPublishableSchemaIds(projectRoot: string): Promise<Set<string>> {
  const blocklistPath = path.join(projectRoot, BLOCKLIST_FILE_NAME);

  try {
    const rawBlocklist = await readFile(blocklistPath, 'utf-8');
    const parsedBlocklist = JSON.parse(rawBlocklist) as unknown;

    if (!Array.isArray(parsedBlocklist)) {
      return new Set();
    }

    return new Set(
      parsedBlocklist
        .filter(entry => typeof entry === 'string')
        .map(entry => entry.trim().toLowerCase())
        .filter(entry => entry.length > 0)
    );
  } catch {
    return new Set();
  }
}
