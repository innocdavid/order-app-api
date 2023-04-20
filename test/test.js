// import modules
import request from "supertest";
import app from "../app.js";

describe("GET / ", () => {
  test("It should return an array of items", async() => {
    const response = await request(app).get('/api/menu');
      expect(response.statusCode).toEqual(200);
      expect(response.header['content-type']).toMatch(/json/)
      const items = response.body;
      expect(items).toBeDefined();
      // response.body.map(element => {
        
      // });
      //((item) => {
      //  expect(item).toHaveProperty('itemName');
    //   expect(item).toHaveProperty('price');
    //   expect(item).toHaveProperty('itemUrl');
    //   expect(item).toHaveProperty('rating');
    //   expect(item).toHaveProperty('reviews');
    //   expect(typeof item.itemName).toBe('string');
    //   expect(typeof item.price).toBe('number');
    //   expect(typeof item.itemUrl).toBe('string');
    //   expect(typeof item.rating).toBe('number');
    //   expect(typeof item.reviews).toBe('number');
    
  });
});