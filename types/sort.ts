type SortDirection = 'asc' | 'desc' | null;
export interface SortConfig {
  square: SortDirection;
  flat: SortDirection;
  price: SortDirection;
}
