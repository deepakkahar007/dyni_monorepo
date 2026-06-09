import { DashboardHeader } from "../../../components/dashboard/DashboardHeader";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<DashboardHeader />
			{children}
		</>
	);
}
