// import modules
import request from "supertest";
import app from "../app.js";

describe("GET / ", () => {
  test("It should return an array of items", async() => {
    const response = await request(app).get('/api/menu');
      expect(response.statusCode).toEqual(200);
      expect(response.header['content-type']).toMatch(/json/);
      expect(Array.isArray(response.body)).toBe(false);
      expect(response.body.message).toBe('orders returned successfully');
      expect(response.body.items).toHaveLength(8);

      const types = response.body.items.map(item => ({
        itemName: typeof item.itemName,
        price: typeof item.price,
        itemUrl: typeof item.itemUrl,
        rating: typeof item.rating,
        reviews: Array.isArray(item.reviews) ? 'array' : typeof item.reviews,
      }));

      expect(types).toEqual(expect.arrayContaining([
        { itemName: 'string', price: 'number', itemUrl: 'string', rating: 'number', reviews: 'array' },
        // add similar objects for the other items in the array
      ]));
      
      const grilledMeat = response.body.items.find(item => item.itemName === 'Grilled Meat');
      expect(grilledMeat.price).toBe(20);
      expect(grilledMeat.itemUrl).toMatch(/https?:\/\/.*\.jpg$/);
      expect(grilledMeat.rating).toBe(4);
      expect(grilledMeat.reviews).toContain('Great taste');
      expect(grilledMeat.reviews).toContain('Enjoyed the dish');
    
  });
});