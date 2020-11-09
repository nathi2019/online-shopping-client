export class Order{
    id: number;
    total: number;
    date: Date;
    products: {productName: string, price: number, quantity: number, subtotal: number }[];
}
