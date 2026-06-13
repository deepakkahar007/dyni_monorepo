
import { index, pgTable, text, varchar } from "drizzle-orm/pg-core"
import { user } from "./auth-schema"
import { createdAt, id, isActive, updatedAt } from "./modelsHelper"


export const RestaurentProfileTable = pgTable("restaurent_profile", {
    id,

    owner_user_id: text().notNull().references(() => user.id, { onDelete: "cascade" }),
    name: varchar().notNull(),
    slug: varchar().notNull().unique(),
    description: varchar().notNull(),
    image: varchar().notNull(),
    email: varchar().notNull(),
    website: varchar().notNull(),
    subscription_plan: varchar(),
    subscription_status: varchar(),

    isActive,
    createdAt,
    updatedAt
}, (t) => [
    index("restaurent_profile_owner_user_id_idx").on(t.owner_user_id)
])

export type RestaurentProfile = typeof RestaurentProfileTable.$inferSelect
export type InsertRestaurentProfile = typeof RestaurentProfileTable.$inferInsert
