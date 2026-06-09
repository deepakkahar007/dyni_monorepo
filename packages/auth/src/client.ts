import { clientEnv } from "@repo/env";
import { organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const clientAuth = createAuthClient({
	baseURL: clientEnv.NEXT_PUBLIC_API_URL,
	plugins: [organizationClient()],
});

export const signInWithGoogle = async () => {
	const res = await clientAuth.signIn.social({
		provider: "google",
	});
	return res;
};

export const signInWithEmailPassword = async (email: string, password: string) => {
	const res = await clientAuth.signIn.email({
		email,
		password,
	});
	return res;
};

export const signUpWithEmailPassword = async (name: string, email: string, password: string) => {
	const res = await clientAuth.signUp.email({
		name,
		email,
		password,
	});
	return res;
};

export const signOut = async () => {
	const res = await clientAuth.signOut();
	return res;
};
