import { serverEnv } from "@repo/env"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./migrations",
	schema: "./src/models/index.ts",
	dialect: "postgresql",
	strict: true,
	verbose: true,
	dbCredentials: {
		// database: "postgres",
		// user: "postgres",
		// password: "postgres",
		// host: "localhost",
		// port: 5432,
		url: serverEnv.DATABASE_URL
	},
});
