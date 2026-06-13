import { pgTable, uuid, varchar, } from "drizzle-orm/pg-core"
import { BranchProfileTable } from "./BranchProfileTable"
import { createdAt, id, isActive, updatedAt } from "./modelsHelper"
import { RestaurentProfileTable } from "./RestaurentProfileTable"

export const ItemTable = pgTable("item", {
    id,

    restaurent_id: uuid().notNull().references(() => RestaurentProfileTable.id, { onDelete: "cascade" }),
    branch_id: uuid().notNull().references(() => BranchProfileTable.id, { onDelete: "cascade" }),
    name: varchar().notNull(),
    description: varchar().notNull(),

    isActive,
    createdAt,
    updatedAt
})

export type Item = typeof ItemTable.$inferSelect
export type InsertItem = typeof ItemTable.$inferInsert


