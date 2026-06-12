import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/(DASHBOARD)/dashboard/organizations")({
	component: RouteComponent,
});

function RouteComponent() {
	const _ORGANIZATION = [
		{
			id: "1",
			name: "org 1",
			icon: "",
			project: 2,
		},
		{
			id: "2",
			name: "org 2",
			icon: "",
			project: 4,
		},
		{
			id: "3",
			name: "org 3",
			icon: "",
			project: 6,
		},
	];

	return (
		<div className="container mx-auto mt-10 p-4">
			<h1 className="text-2xl">Your Organizations</h1>

			<div className="mt-4 flex gap-5 flex-row items-center justify-between">
				<Input className="max-w-sm rouneded-xl" placeholder="Search" />

				<Button className="rounded-xl" size={"sm"}>
					<Plus />
					Create Organization
				</Button>
			</div>

			<div>
				{_ORGANIZATION.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Plus />
							</EmptyMedia>
							<EmptyTitle>No data</EmptyTitle>
							<EmptyDescription>No data found</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<Button>Add data</Button>
						</EmptyContent>
					</Empty>
				) : (
					<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
						{_ORGANIZATION.map((org) => (
							<div key={org.id} className="card w-full bg-base-100 shadow-xl border rounded-2xl p-3">
								<Link to={`/dashboard/org/${org.id}`}>
									<div className="flex flex-row items-center gap-10">
										<User2 />
										<div>
											<h2 className="">{org.name}</h2>
											<p>{org.project} project</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
