import * as restify from 'restify';
import * as bunyan from 'bunyan';

import { setRoutes } from './routes';

const PORT = process.env.PORT || 3000;

const log = bunyan.createLogger({
  name : "svcapp"
})

export const server = restify.createServer({
  name: "simpleApi",
  version: "0.1.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(restify.pre.sanitizePath())

log.info('setting routes...');

setRoutes(server);

//when running the app will listen locally to port 51234
server.listen(PORT, function() {
  log.info('%s now listening at %s', server.name, server.url);
});

