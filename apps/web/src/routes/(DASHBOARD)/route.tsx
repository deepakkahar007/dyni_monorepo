import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(DASHBOARD)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="">
			<h2>dashboard</h2>
			<Outlet />
		</div>
	);
}
