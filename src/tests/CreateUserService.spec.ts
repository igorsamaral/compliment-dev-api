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

describe("Teste de integração na criação de usuários", () => {
    it('Criando novo usuário', async () => {
        const response = await request(app).post("/users").send({
            name: "Pedro Cabral",
            email: "pedro.cabral@gmail.com",
            password: "root",
            admin: false
        })
    
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")
    })

    it('Criando usuário existente', async () => {
        const response = await request(app).post("/users").send({
            name: "Pedro Cabral Existente",
            email: "pedro.cabral@gmail.com",
            password: "root",
            admin: false
        })
    
        expect(response.status).toBe(400)
    })
})
