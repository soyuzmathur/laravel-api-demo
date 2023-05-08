import HttpFactory from '@/repository/factory';

interface ProductFilters {
  inStock:number,
  sortBy: string,
  order: string,
  categoryId: number
}
class ProductsModule extends HttpFactory {
  private RESOURCE = 'http://127.0.0.1:8000/api/products/';

  async getAllProducts(data: ProductFilters): Promise<Record<string, unknown>> {
    const sortBy = data.sortBy;
    const order = data.order;
    const categoryId = data.categoryId;
    const inStock = data.inStock;

    return await this.call('GET', `${this.RESOURCE}?sortBy=${sortBy}&inStock=${inStock}&order=${order}&categoryId=${categoryId}`)
  }

  async getProductData(productId: number): Promise<Record<string, unknown>> {
    return await this.call('GET', `${this.RESOURCE}${productId}}`)
  }
}

export default ProductsModule;