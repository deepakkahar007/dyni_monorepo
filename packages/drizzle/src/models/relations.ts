import { defineRelations } from "drizzle-orm";
import * as schema from "./index";

export const relations = defineRelations(schema, (_r) => ({
    user: {
        sessions: _r.many.session(),
        accounts: _r.many.account(),
        members: _r.many.member(),
        invitations: _r.many.invitation(),
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
    organization: {
        members: _r.many.member(),
        invitations: _r.many.invitation(),
    },
    member: {
        organization: _r.one.organization({
            from: _r.member.organizationId,
            to: _r.organization.id,
        }),
        user: _r.one.user({
            from: _r.member.userId,
            to: _r.user.id,
        }),
    },
    invitation: {
        organization: _r.one.organization({
            from: _r.invitation.organizationId,
            to: _r.organization.id,
        }),
        inviter: _r.one.user({
            from: _r.invitation.inviterId,
            to: _r.user.id,
        }),
    }
}));

// export const userRelations = relations(user, ({ many }) => ({
//     sessions: many(session),
//     accounts: many(account),
//     members: many(member),
//     invitations: many(invitation),
// }));

// export const sessionRelations = relations(session, ({ one }) => ({
//     user: one(user, {
//         fields: [session.userId],
//         references: [user.id],
//     }),
// }));

// export const accountRelations = relations(account, ({ one }) => ({
//     user: one(user, {
//         fields: [account.userId],
//         references: [user.id],
//     }),
// }));

// export const organizationRelations = relations(organization, ({ many }) => ({
//     members: many(member),
//     invitations: many(invitation),
// }));

// export const memberRelations = relations(member, ({ one }) => ({
//     organization: one(organization, {
//         fields: [member.organizationId],
//         references: [organization.id],
//     }),
//     user: one(user, {
//         fields: [member.userId],
//         references: [user.id],
//     }),
// }));

// export const invitationRelations = relations(invitation, ({ one }) => ({
//     organization: one(organization, {
//         fields: [invitation.organizationId],
//         references: [organization.id],
//     }),
//     user: one(user, {
//         fields: [invitation.inviterId],
//         references: [user.id],
//     }),
// }));
