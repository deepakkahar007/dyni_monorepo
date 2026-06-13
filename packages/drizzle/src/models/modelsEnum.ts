

import { pgEnum } from "drizzle-orm/pg-core"



export const RoleEnum = pgEnum("role", ["manager", "chef", "waiter"])

