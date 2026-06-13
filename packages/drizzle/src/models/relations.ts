import { defineRelations } from "drizzle-orm";
import * as schema from "./index";

export const relations = defineRelations(schema, (_r) => ({
    user: {
        sessions: _r.many.session(),
        accounts: _r.many.account(),

    },
    session: {
        user: _r.one.user({
            from: _r.session.userId,
            to: _r.user.id
        }),
    },
    account: {
        user: _r.one.user({
            from: _r.account.userId,
            to: _r.user.id,
        }),
    },
    RestaurentProfileTable: {
        user: _r.one.user({
            from: _r.RestaurentProfileTable.owner_user_id,
            to: _r.user.id
        }),
    },
    BranchAssignmentTable: {
        staff: _r.one.StaffTable({
            from: _r.BranchAssignmentTable.staff_id,
            to: _r.StaffTable.id
        }),
        branch: _r.one.BranchProfileTable({
            from: _r.BranchAssignmentTable.branch_id,
            to: _r.BranchProfileTable.id
        })
    },
    BranchProfileTable: {
        restaurent: _r.one.RestaurentProfileTable({
            from: _r.BranchProfileTable.restaurent_id,
            to: _r.RestaurentProfileTable.id
        })
    },
    ItemTable: {
        restaurent: _r.one.RestaurentProfileTable({
            from: _r.ItemTable.restaurent_id,
            to: _r.RestaurentProfileTable.id
        }),
        branch: _r.one.BranchProfileTable({
            from: _r.ItemTable.branch_id,
            to: _r.BranchProfileTable.id
        })
    },
    StaffTable: {
        restaurent: _r.one.RestaurentProfileTable({
            from: _r.StaffTable.restaurent_id,
            to: _r.RestaurentProfileTable.id
        }),
        branch: _r.one.BranchProfileTable({
            from: _r.StaffTable.branch_id,
            to: _r.BranchProfileTable.id
        })
    }

}));

