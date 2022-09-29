const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - task
 *         - data
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         task:
 *           type: string
 *           description: The task
 *         type:
 *           type: string
 *           description: The task type
 *         data:
 *           type: string
 *           description: The task data
 *         difficulty:
 *           type: booleon
 *           description: The task difficulty
 *         favorite:
 *           type: booleon
 *           description: Is task is favorite
 *         done:
 *           type: booleon
 *           description: Is task is done
 *         challenge:
 *           type: booleon
 *           description: Is task is challenge
 *       example:
 *         task: Do homework
 *         type: Stuff
 *         data: 2022-02-11
 *         difficulty: Normal
 *         favorite: true
 *         done: false
 *         challenge: true
 */

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: The task managing API
 */
/**
 * @swagger
 * /task/all:
 *   get:
 *     summary: Returns the list of all the task
 *     tags: [Task]
 *     responses:
 *       200:
 *         description: The list of the task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/all", task.getAllTask);
/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 */
router.get("/:id", task.getTaskById);
/**
 * @swagger
 * /task/add:
 *   post:
 *     summary: Create a new task
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.post("/add", task.addTask);
/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */
router.delete("/:id", task.removeTaskById);
/**
 * @swagger
 * /task/{id}:
 *  put:
 *    summary: Update the task by the id
 *    tags: [Task]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", task.updateTaskById);

module.exports = router;
