import { Server } from 'restify';
import * as echo from "./controllers/echo";

export const setRoutes= ((server: Server) => {
  //ECHO route - respond with whatever was passed in the path
  server.get('/api/echo/:message', echo.get);
  server.get('/api/echo', echo.get);
  console.log('set routes...');
});