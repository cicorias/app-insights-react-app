//ECHO controller - respond with the parameters passed in
import { Request, Response, Next } from "restify";
import * as bunyan from 'bunyan';

const log = bunyan.createLogger({
  name : "echo"
})

export const get = (req: Request, res: Response, next: Next) => {
  log.info('request headers: \n%o', req.headers);
  if (req.params.message)
    res.send(req.params);
  else
    res.send(200);
  next();
};
