import { expect } from "chai";
import supertest from "supertest";
import SingletonEnvironment from "../env/singletonEnvironment.js";

import { flags } from "../utils.js";


const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { host, port } = environment.env.api;

const local = `${host}:${port}/`;

const requester = supertest(`http://127.0.0.1:7070`);

describe("Carts API", () => {
  it("should return a list of carts", async () => {
    const { statusCode, body, ok } = await requester.get("/api/dev/carts");
    expect(statusCode).to.equal(200);
    expect(ok).to.be.ok;
    expect(body).to.have.property("status").to.equal("success");
    expect(body).to.have.property("payload").to.be.an("array");
  });
});

describe("Products API", () => {
  before(function () {
    this.cookie = {
      key: "token",
      value:
        "eyJmaXJzdE5hbWUiOiJVc2VyIDMwMCIsImxhc3ROYW1lIjoiMzAwIiwidXNlcm5hbWUiOiJObyB1c2VybmFtZSIsInByb3ZpZGVyIjoiTm8gcHJvdmlkZXIiLCJyb2xlIjoicHJlbWl1bSIsImVtYWlsIjoidXNlcjMwMEBnbWFpbC5jb20iLCJhZ2UiOjMwMCwiY2FydCI6IjY1ZTI1ODg0M2M1Mzg4MWU4MmQ2Y2EzZSIsInR5cGUiOiJhdXRoIiwiaWF0IjoxNzA5NzQ3MDQwLCJleHAiOjE3MDk3NTQyNDB9",
    };
  });
  it("should return a list of products", async () => {
    const { statusCode, body, ok } = await requester.get("/api/dev/products");
    expect(statusCode).to.equal(200);
    expect(ok).to.be.ok;
    expect(body).to.have.property("status").to.equal("success");
    expect(body)
      .to.have.property("payload")
      .to.have.property("docs")
      .to.be.an("array");
    expect(body).to.have.property("payload").to.have.property("docs");
  });

  it("should return a product by id", async () => {
    const { statusCode, body, ok } = await requester.get(
      "/api/dev/products/6558dd604e0a87e8653355f1"
    );
    expect(statusCode).to.equal(200);
    expect(ok).to.be.ok;
    expect(body).to.have.property("status").to.equal("success");
    expect(body)
      .to.have.property("payload")
      .to.has.property("_id")
      .to.equal("6558dd604e0a87e8653355f1");
  });

  it("should return a error", async () => {
    const { statusCode, body, ok } = await requester.get(
      "/api/dev/products/6558dd604e0a87e8653455f1"
    );
    expect(statusCode).to.equal(404);
    expect(body).to.have.property("status").to.equal("error");
  });

  // it("should create a product successfully", async () => {
  //   const cookie = {
  //     key: "token",
  //     value:
  //       "eyJmaXJzdE5hbWUiOiJVc2VyIDMwMCIsImxhc3ROYW1lIjoiMzAwIiwidXNlcm5hbWUiOiJObyB1c2VybmFtZSIsInByb3ZpZGVyIjoiTm8gcHJvdmlkZXIiLCJyb2xlIjoicHJlbWl1bSIsImVtYWlsIjoidXNlcjMwMEBnbWFpbC5jb20iLCJhZ2UiOjMwMCwiY2FydCI6IjY1ZTI1ODg0M2M1Mzg4MWU4MmQ2Y2EzZSIsInR5cGUiOiJhdXRoIiwiaWF0IjoxNzA5NzQ3MDQwLCJleHAiOjE3MDk3NTQyNDB9",
  //   };

  //   const { statusCode, body, ok } = await requester
  //     .post("/api/dev/products")
  //     .set("Cookie", [`${cookie.key}=${cookie.value}`])
  //     .send({
  //       title: "Test Product",
  //       code: "TST-PRD",
  //       category: "Test",
  //       description: "This is a test product",
  //       stock: 10,
  //       price: 100,
  //       status: "active",
  //       thumbnails: ["test.jpg"],
  //     });
  //   expect(statusCode).to.equal(201);
  //   expect(ok).to.be.ok;
  //   expect(body).to.have.property("status").to.equal("success");
  //   expect(body).to.have.property("payload").to.have.property("_id");
  // });

  // it("should update a product successfully", async () => {
  //   const { statusCode, body, ok } = await requester
  //     .put("/api/dev/products/6558dd604e0a87e8653355f1")
  //     .set("Cookie", [`${this.cookie.key}=${this.cookie.value}`])
  //     .send({
  //       title: "Test Product Updated",
  //       code: "TST-PRD-UPD",
  //       category: "Test",
  //       description: "This is a test product",
  //       stock: 10,
  //       price: 100,
  //       status: "active",
  //       thumbnails: ["test.jpg"],
  //     });
  //   expect(statusCode).to.equal(200);
  //   expect(ok).to.be.ok;
  //   expect(body).to.have.property("status").to.equal("success");
  //   expect(body)
  //     .to.have.property("payload")
  //     .to.have.property("_id")
  //     .to.equal("6558dd604e0a87e8653355f1");
  // });

  // it("should delete a product successfully", async () => {
  //   const { statusCode, body, ok } = await requester
  //     .delete("/api/dev/products/6558dd604e0a87e8653355f1")
  //     .set("Cookie", `${this.cookie.value}=${this.cookie.value}`);
  //   expect(statusCode).to.equal(200);
  //   expect(ok).to.be.ok;
  //   expect(body).to.have.property("status").to.equal("success");
  //   expect(body)
  //     .to.have.property("payload")
  //     .to.have.property("_id")
  //     .to.equal("6558dd604e0a87e8653355f1");
  // });
});
