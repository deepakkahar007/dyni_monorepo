import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/integrations/tanstack-query/queryProvider";
import { TanstackRouter } from "@/integrations/tanstack-router/tanstackRouter";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryProvider>
				<TooltipProvider>
					<TanstackRouter />
					<Toaster />
				</TooltipProvider>
			</QueryProvider>
		</StrictMode>,
	);
}
