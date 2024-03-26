import { Router } from "express";
import { createThought } from "../controllers/ThoughtController";

const RandomThoughtsRouter = Router();

RandomThoughtsRouter.post('/thoughts', createThought);

export default RandomThoughtsRouter;