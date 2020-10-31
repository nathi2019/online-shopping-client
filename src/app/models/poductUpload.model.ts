export interface ProductUpload {
  vendorId: number;
  name: string;
  price: number;
  description: string;
  files: File[];
  quantity: number;
  category: string;
}
