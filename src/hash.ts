import {createHash} from 'node:crypto';

export function sha256FromBuffer(value: Uint8Array): string {
  return createHash('sha256').update(value).digest('hex');
}

export function sha256FromString(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}
