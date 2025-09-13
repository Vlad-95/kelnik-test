export const formatPrice = (price: number | undefined): string => {
  if (!price) return '0';

  const numStr: string = price.toString();

  const parts: string[] = numStr.split('.');
  let integerPart: string = parts[0] || '0';
  const decimalPart: string = parts.length > 1 ? '.' + parts[1] : '';

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return integerPart + decimalPart;
};
