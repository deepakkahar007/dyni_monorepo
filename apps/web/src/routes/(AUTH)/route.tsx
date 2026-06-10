import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(AUTH)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1>Auth</h1>
			<Outlet />
		</div>
	);
}
