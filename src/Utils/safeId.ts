export const safeId = (value: string | null | undefined): string => {
  if (!value) return 'unknown';
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/__+/, '_');
};
