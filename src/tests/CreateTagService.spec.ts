import { createConnection, getConnection } from "typeorm";
import { execSync } from "child_process";
import request from "supertest"
import { app } from "../app"

beforeAll(async () => {
    await createConnection()
    execSync("yarn typeorm migration:run")
});

afterAll(async () => {
    await getConnection().close()
    execSync("yarn typeorm schema:drop")
});

describe("Tentando acessar rota protegida de criação de tags", () => {
    it('Criação de tags', async () => {
        const response = await request(app).post("/tags").send({
            name: "Liderança"
        })

        expect(response.status).toBe(401)
    })
})
