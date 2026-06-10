import { serverEnv } from "@repo/env";
import { getCookieCache } from "better-auth/cookies";
import serverAuth from "./server";

export const getSharedServerSession = async (headers: Headers) => {
	return getCookieCache(headers, {
		secret: serverEnv.BETTER_AUTH_SECRET,
	});
};


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