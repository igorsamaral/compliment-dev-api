import express, { Router } from "express"
import { UserController } from "./controllers/UserController"
import { TagController } from "./controllers/TagController"
import { ComplimentController } from "./controllers/ComplimentController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()

const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()
const authenticateUserController = new AuthenticateUserController()

router.post("/users", userController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, tagController.handle)
router.post("/compliments", ensureAuthenticated, complimentController.handle)
router.post("/login", authenticateUserController.handle)

export { router }