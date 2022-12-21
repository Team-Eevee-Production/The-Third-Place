import { Request, Response, NextFunction } from 'express';

export type ResponseObject = (req: Request, res: Response, next: NextFunction) => void;
// export type ResponseObject2 = (req: Request, res: Response, next: NextFunction) => string;

export interface imageController {
  fetchImages: ResponseObject;
}

export interface userController {
  createUser: ResponseObject;
  verifyUser: ResponseObject;
}

export interface initController {
  createDB: ResponseObject;
}

export type image = {
  "id": string,
  "gallery": string,
  "src": string,
  "srcSmall": string,
  "prompt": string,
  "width": number,
  "height": number,
  "seed": string,
  "grid": boolean,
  "model": string,
  "guidance": number,
  "promptid": string,
  "nsfw": boolean
}