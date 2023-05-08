
import { defineNuxtPlugin } from '#app';
import CategoriesModule from '~/repository/modules/categories/categories';
import ProductsModule from '~/repository/modules/products/products';
import ReviewsModule from '~/repository/modules/products/reviews';

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  products: ProductsModule,
  reviews: ReviewsModule
  categories: CategoriesModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const modules: IApiInstance = {
    products: new ProductsModule(),
    reviews: new ReviewsModule(),
    categories: new CategoriesModule()
  };

  return {
    provide: {
      api: modules,
    },
  };
});