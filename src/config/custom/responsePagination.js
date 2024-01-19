import ProductDto from "../../dto/product.dto.js";
import { environment as env } from "../../env/config.js";

export const paginateResponseSuccess = (productResponse) => {
  return {
    status: "success",
    payload: productResponse.docs.map((product) => new ProductDto(product)),
    totalDocs: productResponse.totalDocs,
    limit: productResponse.limit,
    totalPages: productResponse.totalPages,
    page: productResponse.page,
    pagingCounter: productResponse.pagingCounter,
    hasPrevPage: productResponse.hasPrevPage,
    hasNextPage: productResponse.hasNextPage,
    prevPage: `${env.dev.api.host}:${env.dev.api.port}/products?limit=${productResponse.limit}&page=${productResponse.prevPage}`,
    nextPage: `${env.dev.api.host}:${env.dev.api.port}/products?limit=${productResponse.limit}&page=${productResponse.nextPage}`,
  };
};

