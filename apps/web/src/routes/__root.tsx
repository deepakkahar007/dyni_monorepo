import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<main>
		<Outlet />
		<TanStackRouterDevtools />
	</main>
);

export const Route = createRootRoute({ component: RootLayout });
