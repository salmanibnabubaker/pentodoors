import { Product } from "@/types/product";

export function getRelatedProducts(
  currentProduct: Product,
  allProducts: Product[]
): Product[] {
  if (!currentProduct.relatedProducts?.length) {
    return [];
  }

  return allProducts.filter((product) =>
    currentProduct.relatedProducts!.includes(
      product.slug
    )
  );
}