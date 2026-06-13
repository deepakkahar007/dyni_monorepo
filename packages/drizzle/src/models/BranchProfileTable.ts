
import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { createdAt, id, isActive, updatedAt } from "./modelsHelper"
import { RestaurentProfileTable } from "./RestaurentProfileTable"


export const BranchProfileTable = pgTable("branch_profile", {
    id,

    restaurent_id: uuid().notNull().references(() => RestaurentProfileTable.id, { onDelete: "cascade" }),
    name: varchar().notNull(),
    phone: varchar().notNull(),
    address: varchar().notNull(),
    city: varchar().notNull(),
    state: varchar().notNull(),
    country: varchar().notNull(),


    isActive,
    createdAt,
    updatedAt
}, (t) => [
    index("branch_profile_restaurent_id_idx").on(t.restaurent_id)
])

export type BranchProfile = typeof BranchProfileTable.$inferSelect
export type InsertBranchProfile = typeof BranchProfileTable.$inferInsert
