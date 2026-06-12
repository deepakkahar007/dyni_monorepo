import { createFileRoute, Outlet } from "@tanstack/react-router";
import RestaurentHeader from "@/components/restaurent/Header";

export const Route = createFileRoute("/(DASHBOARD)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<RestaurentHeader />
			<Outlet />
		</>
	);
}
