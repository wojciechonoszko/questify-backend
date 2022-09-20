const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */
/**
 * @swagger
 * /all:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/all", task.getAllTask);
router.post("/add", task.addTask);
router.get("/:id", task.getTaskById);
router.delete("/:id", task.removeTaskById);
router.put("/:id", task.updateTaskById);

module.exports = router;
