type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  square: SortDirection;
  flat: SortDirection;
  price: SortDirection;
}

export interface FilterConfig {
  rooms: number[];
  price: [number, number] | [];
  square: [number, number] | [];
}
