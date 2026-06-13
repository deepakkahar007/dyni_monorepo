import { db } from "@repo/drizzle";
import { serverEnv } from "@repo/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

const serverAuth = betterAuth({
	appName: "Dyni",
	baseURL: serverEnv.BETTER_AUTH_URL,
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
	},
	socialProviders: {
		google: {
			clientId: serverEnv.GOOGLE_CLIENT_ID,
			clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
		},
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 60 * 60 * 7, // 7 days
		},
	},
});

export default serverAuth;

