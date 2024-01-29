import { faker } from "@faker-js/faker";

export default class MocksController {
  static products() {
    let products = [];
    for (let i = 1; i < 5; i++) {
      const product = {
        title: faker.commerce.productName(),
        code: faker.datatype.uuid(),
        category: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number(),
        price: parseInt(faker.commerce.price({ min: 250, max: 3500 })),
        status: faker.datatype.boolean(),
        thumbnails: [faker.image.imageUrl()],
      };
      products.push(product);
    }
   
    return products;
  }
}
