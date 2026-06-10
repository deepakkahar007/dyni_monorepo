import { api } from "@repo/eden";
import { createFileRoute } from "@tanstack/react-router";
import { Wait } from "@/lib/utils";

export const Route = createFileRoute("/")({
	component: Index,
	beforeLoad: async () => {
		await Wait(6);

		console.log("the before loader runnes");
		return;
	},
	loader: async () => {
		const res = await api.get();
		return res;
	},
});

function Index() {
	const { data } = Route.useLoaderData();

	console.log(data);
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
		</div>
	);
}
