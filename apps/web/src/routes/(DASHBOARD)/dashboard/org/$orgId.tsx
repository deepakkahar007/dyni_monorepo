import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(DASHBOARD)/dashboard/org/$orgId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { orgId } = Route.useParams();
	return <div>Hello "/(DASHBOARD)/dashboard/org/{orgId}"!</div>;
}
