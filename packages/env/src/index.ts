import path from "node:path";
import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";
import { z } from "zod";

if (typeof process !== "undefined" && process.versions?.node) {
	dotenv.config({
		path: path.resolve(process.cwd(), "../../.env"),
	});
}

export const clientEnv = createEnv({
	client: {
		NEXT_PUBLIC_API_URL: z.url().default("http://localhost:3000/api/auth"),
	},
	clientPrefix: "NEXT_PUBLIC_",
	emptyStringAsUndefined: true,
	runtimeEnv: process.env,
});

export const serverEnv = createEnv({
	server: {
		DB_NAME: z.string(),
		DB_USER: z.string(),
		DB_PASSWORD: z.string(),
		DB_HOST: z.string(),
		DB_PORT: z.string(),
		SERVER_HOST: z.string(),
		SERVER_PORT: z.coerce.string(),
		BETTER_AUTH_SECRET: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
	},
	createFinalSchema: (schema) =>
		z.object(schema).transform((obj) => {
			const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, ...rest } = obj;
			return {
				...rest,
				BETTER_AUTH_URL: `http://localhost:3000/api/auth`,
				DATABASE_URL: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
			};
		}),
	emptyStringAsUndefined: true,
	runtimeEnv: process.env,
});
