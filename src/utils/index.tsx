export const priceFormater = (price: number) => Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(price)