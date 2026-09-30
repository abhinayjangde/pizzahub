import { describe, expect, it } from "@jest/globals";
import { calculateDiscount } from "./src/utils.js";
import request from "supertest";
import app from "./src/app.js";

describe("App", () => {
    it("should return correct discount", () => {
        const discount = calculateDiscount(100, 10);
        expect(discount).toBe(10);
    });

    it("should retunr 200 status code", async () => {
        const res = await request(app).get("/").send();

        expect(res.statusCode).toBe(200);
    });
});
