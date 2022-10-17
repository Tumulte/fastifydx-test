import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import FastifyDXVue from 'fastify-dx-vue'
import FastifyView from '@fastify/view'
import FastifyStatic from '@fastify/static'
import nunjucks from 'nunjucks'

const server = Fastify()

server.decorate('db', {
  todoList: [
    'Do laundry',
    'Respond to emails',
    'Write report',
  ]
})

server.put('/api/todo/items', (req, reply) => {
  server.db.todoList.push(req.body.item)
  reply.send({ ok: true })
})

server.delete('/api/todo/items', (req, reply) => {
  server.db.todoList.splice(req.body.index, 1)
  reply.send({ ok: true })
})
server.register(FastifyStatic, {
  root: '/static',
  prefix: '/static/', // optional: default '/'
})
server.register(FastifyView, {
  engine: {
    nunjucks: nunjucks,
  },
});
server.get("/", (req, reply) => {
  // @ts-ignore
  reply.view("./templates/index.njk")
});
await server.register(FastifyVite, { 
  root: import.meta.url, 
  renderer: FastifyDXVue,
})

await server.vite.ready()

await server.listen(3000)
