const router = require("express").Router();
const controller = require("../controller/controller");
const store = require("../middleware/multer");
router.get("/", controller.home);

// store.array('input type name attribute',max upload)
router.post("/uploadmultiple", store.array("images", 12), controller.upload);

module.exports = router;
