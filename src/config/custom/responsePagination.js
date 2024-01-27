import ProductDto from "../../dto/product.dto.js";
import SingletonEnvironment from "../../env/singletonEnvironment.js";
import { flags } from "../../utils.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { host, port } = environment.env.api;

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
    prevPage: `${host}:${port}/products?limit=${productResponse.limit}&page=${productResponse.prevPage}`,
    nextPage: `${host}:${port}/products?limit=${productResponse.limit}&page=${productResponse.nextPage}`,
  };
};

