import { db } from "@repo/drizzle";
import { serverEnv } from "@repo/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { organization } from "better-auth/plugins";
import { toNextJsHandler } from "better-auth/next-js";

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

export const getServerSession = async (headers?: Headers) => {
	const session = await serverAuth.api.getSession(
		headers ? { headers } : undefined,
	);
	return session;
};

export const serverSignInWithGoogle = async () => {
	const res = await serverAuth.api.signInSocial({ body: { provider: "google" } });
	return res;
};

export const serverSignInWithEmailPassword = async (email: string, password: string) => {
	const res = await serverAuth.api.signInEmail({
		body: {
			email,
			password,
		}
	});
	return res;
};

export const serverSignUpWithEmailPassword = async (name: string, email: string, password: string) => {
	const res = await serverAuth.api.signUpEmail({
		body: {
			name,
			email,
			password,
		}
	});
	return res;
};

export const serverSignOut = async () => {
	const res = await serverAuth.api.signOut();
	return res;
};
