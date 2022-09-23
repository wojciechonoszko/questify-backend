const express = require("express");
const router = express.Router();
const user = require("../controllers/users/");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The user email
 *         verificationToken:
 *           type: string
 *           description: The user token
 *         verify:
 *           type: booleon
 *           description: Is user is verify
 *       example:
 *         email: test@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The task managing API
 */
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.post("/register", user.register);
/**
 * @swagger
 * /user/verify/{verificationToken}:
 *   get:
 *     summary: Verify user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: verificationToken
 *         schema:
 *           type: string
 *         required: true
 *         description: The user verification token
 *     responses:
 *       200:
 *         description: Verification successful
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/verify/:verificationToken", user.userVerify);
/**
 * @swagger
 * /user/delete/{id}:
 *   delete:
 *     summary: Remove user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete("/delete/:id", user.deleteUser);

module.exports = router;
