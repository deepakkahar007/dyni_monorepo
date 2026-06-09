"use client";

import { signInWithGoogle } from "@repo/auth/client";

export default function Home() {
	const handleSignIn = async () => {
		console.log("handleSignIn");
		await signInWithGoogle();
	};

	return (
		<div>
			<h1>hello next js </h1>

			<button type="button" onClick={handleSignIn}>
				Sign in with Google
			</button>
		</div>
	);
}
