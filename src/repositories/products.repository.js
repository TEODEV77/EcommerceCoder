import ProductDto from "../dto/product.dto.js";

export default class ProductRepository {
    constructor(dao){
        this.dao = dao;
    }

    async test () {
        return await this.dao.test();
    }
}