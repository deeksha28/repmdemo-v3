import { Router } from "express";
import { getLogs } from "../controllers/notifications";

let router = Router();


 router.get("/", (req, res) => {
   res.json({message:"Hello There...."})
 });

router.get("/getLogs", getLogs);


export default router;
