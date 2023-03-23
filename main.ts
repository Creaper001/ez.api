import Fastify from "fastify";
import { getApp } from "#core/get.app";

const fastify = Fastify({ logger: true });
const app = getApp("app");

fastify.register(app);
fastify.listen({ port: 4000 });
