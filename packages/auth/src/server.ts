import { db } from "@repo/drizzle";
import { serverEnv } from "@repo/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies, toNextJsHandler } from "better-auth/next-js";
import { organization } from "better-auth/plugins";

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
	plugins: [nextCookies(), organization()],
});

export default serverAuth

export const { GET, POST } = toNextJsHandler(serverAuth);
