import { pgTable, uuid } from "drizzle-orm/pg-core";
import { BranchProfileTable } from "./BranchProfileTable";
import { createdAt, id, isActive, updatedAt } from "./modelsHelper";
import { StaffTable } from "./StaffTable";

export const BranchAssignmentTable = pgTable("branch_assignment", {
    id,

    branch_id: uuid()
        .notNull()
        .references(() => BranchProfileTable.id, { onDelete: "cascade" }),
    staff_id: uuid()
        .notNull()
        .references(() => StaffTable.id, { onDelete: "cascade" }),

    isActive,
    createdAt,
    updatedAt,
});
