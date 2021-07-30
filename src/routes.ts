import express, { Router } from "express"
import { UserController } from "./controllers/UserController"
import { TagController } from "./controllers/TagController"
import { ComplimentController } from "./controllers/ComplimentController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController"
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUsersController } from "./controllers/ListUsersController"

const router = Router()

const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserSentComplimentsController = new ListUserSentComplimentsController()
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", userController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, tagController.handle)
router.get("/tags", listTagsController.handle)
router.post("/compliments", ensureAuthenticated, complimentController.handle)
router.get("/users/compliments/sent", ensureAuthenticated, listUserSentComplimentsController.handle)
router.get("/users/compliments/received", ensureAuthenticated, listUserReceivedComplimentsController.handle)
router.post("/login", authenticateUserController.handle)

export { router }