import router from "./router";
import  {emailController}  from "../controllers/email.controller";

router.post("/send", emailController)

export default router