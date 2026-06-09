import { getSharedServerSession } from "@repo/auth/session";
import { headers } from "next/headers";

export const DashboardHeader = async () => {
	const session = await getSharedServerSession(await headers());

	return (
		<header>
			<h1>DashboardHeader</h1>
			{session ? <p>Signed in as {session.user.name}</p> : <p>Not signed in</p>}
		</header>
	);
};
