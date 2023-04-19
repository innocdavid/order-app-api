// import modules
import request from "supertest";
import app from "./app.js";

describe("GET / ", () => {
  test("GET / => fetch list of all items", () => {
    return request(app)
      .get("/api/menu")
      .expect(200)
      .expect("Content-Type", "application/json")
      .then(response => {
        expect.arrayContaining([
          expect.objectContaining({
            itemName: expect.any(String),
            price: expect.any(Number),
            itemUrl: expect.any(String),
            reviews: expect.any(Array),
          })
        ])
      })
  });
});