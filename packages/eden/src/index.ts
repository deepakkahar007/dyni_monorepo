import { treaty } from "@elysia/eden";
import { serverEnv } from "@repo/env";
import type { App } from "server";

export const api = treaty<App>(`http://${serverEnv.SERVER_HOST}:${serverEnv.SERVER_PORT}`);
