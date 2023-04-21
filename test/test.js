// import modules
import menuItems from "../orders.js"
import request from "supertest";
import app from "../app.js";

describe("GET /api/items ", () => {
  test("It should return an array of items", async() => {
    const response = await request(app).get('/api/items');
      expect(response.statusCode).toEqual(200);
      expect(response.header['content-type']).toMatch(/json/);
      expect(Array.isArray(response.body)).toBe(false);
      expect(response.body.message).toBe('Items returned successfully');
      expect(response.body.menuItems).toHaveLength(8);
    

      const types = response.body.menuItems.map(item => ({
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
      
      const grilledMeat = response.body.menuItems.find(item => item.itemName === 'Grilled Meat');
      expect(grilledMeat.price).toBe(20);
      expect(grilledMeat.itemUrl).toMatch(/https?:\/\/.*\.jpg$/);
      expect(grilledMeat.rating).toBe(4);
      expect(grilledMeat.reviews).toContain('Great taste');
      expect(grilledMeat.reviews).toContain('Enjoyed the dish');
    
  });
});

describe("GET /api/items/:id", () => {
  test('should return an item with the given id', async () => {
    const id = 1; // assuming you want to retrieve an item with id 1
    const expectedItem = menuItems.find(item => item.id === id); // assuming your items data is an array of objects with an 'id' property

    const response = await request(app).get(`/api/items/${id}`)
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ menuItem: expectedItem, message: `${id} returned successfully` });
  });

  test('should return a 404 error if the item is not found', async () => {
    const id = 999; // assuming this id does not exist in your data
    const expectedErrorMessage = 'Item not found';

    const response = await request(app).get(`/api/items/${id}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: expectedErrorMessage });
  });
});