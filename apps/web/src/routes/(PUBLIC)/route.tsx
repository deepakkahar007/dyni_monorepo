import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(PUBLIC)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
