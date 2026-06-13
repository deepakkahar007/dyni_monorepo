// import { api } from "@repo/eden";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(PUBLIC)/")({
	component: Index,
	// loader: async () => {
	// 	const { data } = await api.get();
	// 	return data;
	// },
});

function Index() {
	// const data = Route.useLoaderData();

	// console.log(data);
	return (
		<div className="p-2">
			<h1>Welcome Home!</h1>
		</div>
	);
}
