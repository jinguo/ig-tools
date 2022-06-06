export default function isEmptyObject(obj: any): boolean {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return false;
  }
  return !Object.keys(obj).length;
}
