export function mapCollectionToArrayKeys(collection: {}, keys: string[]) {
  return keys.map(id => collection[id]);
}
