import { serverEnv } from "@repo/env";
import { getCookieCache } from "better-auth/cookies";

export const getSharedServerSession = async (headers: Headers) => {
	return getCookieCache(headers, {
		secret: serverEnv.BETTER_AUTH_SECRET,
	});
};
