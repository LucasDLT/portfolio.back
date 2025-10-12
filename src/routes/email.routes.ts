import router from "./router";
import  {emailController}  from "../controllers/email.controller";
import {recaptcha} from "../middlewares/recaptcha";

router.post("/send", recaptcha, emailController)

export default router