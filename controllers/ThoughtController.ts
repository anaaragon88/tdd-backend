import { Request, Response } from "express";
import ThoughtModel from "../models/ThoughtModel";

export const createThought=(req:Request, res:Response)=>{
  const data = req.body;
  ThoughtModel.create(data)
    .then(thought=>{
      return res.status(201).json(thought);
    })
    .catch(error=>{
      return res.status(500).json(error);
    });
}
  