import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { client } from "./client";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};
