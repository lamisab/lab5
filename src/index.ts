import { server } from './server';



server.get('/',async(request, reply) => {
    return { hello: 'hello' };
  });
  


server.listen({ port: 3000 }).catch((err) => {
	server.log.error(err);
	process.exit(1);
});



