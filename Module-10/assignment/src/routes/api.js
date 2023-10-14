const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const worksController = require("../controllers/worksController");
const loginController = require("../controllers/loginController");
 const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware");

router.post("/createStudent", studentsController.createStudent);
router.post("/login", loginController.login);
router.get("/getAllStudents", studentsController.getAllStudents);
router.get("/getSingleStudent/:id",authVerifyMiddleware, studentsController.getSingleStudent);
router.delete("/deleteStudent/:id",authVerifyMiddleware, studentsController.deleteStudent);
router.put("/updateStudent/:id",authVerifyMiddleware, studentsController.updateStudent);

router.post("/createWork",authVerifyMiddleware, worksController.createWork);
router.get("/getAllWorks",authVerifyMiddleware, worksController.getAllWorks);
router.get("/getSingleWork/:id",authVerifyMiddleware, worksController.getSingleWork);
router.delete("/deleteWork/:id",authVerifyMiddleware, worksController.deleteWork);
router.put("/updateWork/:id",authVerifyMiddleware, worksController.updateWork);


module.exports = router;