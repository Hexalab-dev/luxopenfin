export const formatCurrency = (value: number, currency: string = 'EUR'): string => {
  if (!Number.isFinite(value)) {
    return '€0.00';
  }

  return new Intl.NumberFormat('en-LU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};

export const parseAmount = (value: string | number): number => {
  const numeric = typeof value === 'string' ? value.replace(',', '.') : value;
  const parsed = Number(numeric);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const clampToZero = (value: number): number => (value < 0 ? 0 : value);

