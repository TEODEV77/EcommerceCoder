import { productDao } from '../dao/factory.js';

import ProductRepository from './products.repository.js';

export const productRepository = new ProductRepository(productDao);