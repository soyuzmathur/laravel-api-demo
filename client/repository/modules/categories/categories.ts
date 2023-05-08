import HttpFactory from '@/repository/factory';

class CategoriesModule extends HttpFactory {
  private RESOURCE = 'http://127.0.0.1:8000/api/categories/';

  async getAll(): Promise<Record<string, unknown>> {
    return await this.call('GET', `${this.RESOURCE}`)
  }
}

export default CategoriesModule;