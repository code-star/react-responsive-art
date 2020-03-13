export function keys<O extends object>(o: O): Array<keyof O> {
  return Object.keys(o) as Array<keyof O>;
}

export function entries<K extends string | number | symbol, V>(
  o: Record<K, V>
): Array<[K, V]> {
  return Object.entries(o) as Array<[K, V]>;
}
