import { Router } from "express";
import { getrouter } from "../controllers/get.controller.ts";
import { updaterouter } from "../controllers/update.controller.ts";
import { deleterouter } from "../controllers/delete.controller.ts";

const router = Router();

router.get('/', getrouter.byQuery)
router.get('/:id', getrouter.byId)
router.put('/:id', updaterouter)
router.delete('/:id', deleterouter)

export const userrouter = router