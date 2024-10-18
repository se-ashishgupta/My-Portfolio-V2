import { createClient } from "redis";

export const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis Connected Successfully");
  } catch (error) {
    console.log(
      `Having some issues with Redis connection. Please review this error and then try again: `,
      error
    );
  }
};
