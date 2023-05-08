import HttpFactory from '@/repository/factory';

interface ReviwDataInterface {
    rating: number
    comments: string
}

class ReviewsModule extends HttpFactory {
  private RESOURCE = 'http://127.0.0.1:8000/api/products/[PRODUCT_ID]/reviews/';

  getUrl(productId : number): string{
    return this.RESOURCE.replace("[PRODUCT_ID]", String(productId))
  }

  async getAll(productId: number): Promise<Record<string, unknown>> {
    const url = this.getUrl(productId);
    return await this.call('GET', url)
  }

  async postReview(productId: number, data: ReviwDataInterface): Promise<Record<string, unknown>> {
    const url = this.getUrl(productId);
    return await this.call('POST', url, data)
  }
}

export default ReviewsModule;