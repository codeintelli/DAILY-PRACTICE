const express = require("express");
const router = express.Router();
const services = require("../services/render");
const controllers = require("../controller/controller");
/*  
@Description:Home Route
@method: GET/
*/

router.get("/", services.homeRoutes);

/*  
@Description:Add User Page Frontend
@method:GET/
*/
router.get("/add-user", services.add_user);

/*  
@Description:Update User Page Frontend
@method:GET/
*/
router.get("/update_user", services.update_user);

/*  
!Description:API Routes Backend
!method:POST/
*/
router.post("/api/users", controllers.create);

/*  
!Description:API Routes Backend
!method:POST/
*/
router.get("/api/users", controllers.find);

/*  
!Description:API Routes Backend
!method:Put/
*/
router.put("/api/users/:id", controllers.update);

/*  
!Description:API Routes Backend
!method:DELETE/
*/
router.delete("/api/users/:id", controllers.delete);

module.exports = router;
