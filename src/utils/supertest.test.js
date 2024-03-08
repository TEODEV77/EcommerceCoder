import { expect } from "chai";
import supertest from "supertest";

const requester = supertest(`http://127.0.0.1:7070`);

describe("Auth tests", () => {
  let cookie;

  describe("Session tests", () => {
    it("(Sign-up) - Should create an user", async () => {
      const userMock = {
        firstName: "User 777",
        lastName: "777",
        email: "user777@gmail.com",
        password: "123",
        age: 701,
      };
      const { statusCode, body, ok } = await requester
        .post("/api/sessions/auth/register")
        .send(userMock);
      expect(statusCode).to.equal(201);
      expect(ok).to.be.ok;
      expect(body).to.have.property("status").to.equal("success");
      expect(body).to.have.property("payload").to.be.an("object");
    });

    it("(Sign-in) - Should return a token", async () => {
      const userMock = {
        email: "user300@gmail.com",
        password: "123",
      };
      const { statusCode, headers, body, ok } = await requester
        .post("/api/sessions/auth/login")
        .send(userMock);
      expect(statusCode).to.equal(200);
      expect(ok).to.be.ok;
      expect(body).to.have.property("status").to.equal("success");
      expect(body).to.have.property("payload").to.be.an("string");

      const [key, value] = headers["set-cookie"][0].split("=");
      cookie = { key, value };
    });

    describe("Product tests", () => {
      it("should create a product successfully", async () => {
        const { statusCode, body, ok } = await requester
          .post("/api/dev/products")
          .set("Cookie", [`${cookie.key}=${cookie.value}`])
          .send({
            title: "Test Product 77",
            code: "TST-PRD 77",
            category: "Test",
            owner: "user300@gmail.com",
            description: "This is a test product 77",
            stock: 77,
            price: 777,
            status: true,
            thumbnails: ["test5.jpg"],
          });
        expect(statusCode).to.equal(201);
        expect(ok).to.be.ok;
        expect(body).to.have.property("status").to.equal("success");
        expect(body).to.have.property("payload").to.have.property("_id");
      });

      it("should update a product successfully", async () => {
        const { statusCode, ok } = await requester
          .put("/api/dev/products/65ea9222e6ea0214bfd55081")
          .set("Cookie", [`${cookie.key}=${cookie.value}`])
          .send({
            title: "Test Product Updated",
  
            category: "Test",
            description: "This is a test product",
            stock: 10,
            price: 100,
            status: true,
          });
        expect(statusCode).to.equal(200);
        expect(ok).to.be.ok;
      });

      it("should delete a product successfully", async () => {
        const { statusCode, ok } = await requester
          .delete("/api/dev/products/65eb6f432cd58844ca8424eb")
          .set("Cookie", [`${cookie.key}=${cookie.value}`]);
        expect(statusCode).to.equal(200);
        expect(ok).to.be.ok;
      });
    });
  });

  it("(Wrong credentials) - should return an error", async () => {
    const userMock = {
      email: "user300@gmail.com",
      password: "12",
    };
    const { statusCode, body } = await requester
      .post("/api/sessions/auth/login")
      .send(userMock);
    expect(statusCode).to.equal(400);
    expect(body).to.have.property("status").to.equal("error");
  });

});

describe("Cart API", () => {
  it("should return a list of carts", async () => {
    const { statusCode, body, ok } = await requester.get("/api/dev/carts");
    expect(statusCode).to.equal(200);
    expect(ok).to.be.ok;
    expect(body).to.have.property("status").to.equal("success");
    expect(body).to.have.property("payload").to.be.an("array");
  });
});

describe("Product API", () => {
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
    const { statusCode, body } = await requester.get(
      "/api/dev/products/6558dd604e0a87e8653455f1"
    );
    expect(statusCode).to.equal(404);
    expect(body).to.have.property("status").to.equal("error");
  });
});
