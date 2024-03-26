import request from "supertest";

import { app } from "../app";

test("should return 201 status code when a new thought has been created", async () => {

    const newThought = {
        title: "Test",
        description: "test"
    }

    const response = await request(app).post("/thoughts").send(newThought);
    expect(response.status).toBe(201);
})