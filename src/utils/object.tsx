export const removeNullProperties = (object: object): object =>
  Object.entries(object).reduce((a, [k, v]) => (v ? { ...a, [k]: v } : a), {});
