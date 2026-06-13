
import { index, pgTable, uuid } from "drizzle-orm/pg-core"
import { BranchProfileTable } from "./BranchProfileTable"
import { RoleEnum } from "./modelsEnum"
import { createdAt, id, isActive, updatedAt } from "./modelsHelper"
import { RestaurentProfileTable } from "./RestaurentProfileTable"


export const StaffTable = pgTable("staff", {
    id,

    restaurent_id: uuid().notNull().references(() => RestaurentProfileTable.id, { onDelete: "cascade" }),
    branch_id: uuid().notNull().references(() => BranchProfileTable.id, { onDelete: "cascade" }),
    role: RoleEnum().default("waiter"),


    isActive,
    createdAt,
    updatedAt
}, (t) => [
    index("staff_restaurent_id_idx").on(t.restaurent_id),
    index("staff_branch_id_idx").on(t.branch_id)
])

export type Staff = typeof StaffTable.$inferSelect
export type InsertStaff = typeof StaffTable.$inferInsert
