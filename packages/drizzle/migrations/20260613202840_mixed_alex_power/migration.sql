CREATE TYPE "role" AS ENUM('manager', 'chef', 'waiter');--> statement-breakpoint
CREATE TABLE "branch_assignment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"branch_id" uuid NOT NULL,
	"staff_id" uuid NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "branch_profile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"restaurent_id" uuid NOT NULL,
	"name" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"address" varchar NOT NULL,
	"city" varchar NOT NULL,
	"state" varchar NOT NULL,
	"country" varchar NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"restaurent_id" uuid NOT NULL,
	"branch_id" uuid NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "restaurent_profile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"owner_user_id" text NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL UNIQUE,
	"description" varchar NOT NULL,
	"image" varchar NOT NULL,
	"email" varchar NOT NULL,
	"website" varchar NOT NULL,
	"subscription_plan" varchar,
	"subscription_status" varchar,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"restaurent_id" uuid NOT NULL,
	"branch_id" uuid NOT NULL,
	"role" "role" DEFAULT 'waiter'::"role",
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX "branch_profile_restaurent_id_idx" ON "branch_profile" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "restaurent_profile_owner_user_id_idx" ON "restaurent_profile" ("owner_user_id");--> statement-breakpoint
CREATE INDEX "staff_restaurent_id_idx" ON "staff" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "staff_branch_id_idx" ON "staff" ("branch_id");--> statement-breakpoint
ALTER TABLE "branch_assignment" ADD CONSTRAINT "branch_assignment_branch_id_branch_profile_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch_profile"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "branch_assignment" ADD CONSTRAINT "branch_assignment_staff_id_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "branch_profile" ADD CONSTRAINT "branch_profile_restaurent_id_restaurent_profile_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent_profile"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_restaurent_id_restaurent_profile_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent_profile"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_branch_id_branch_profile_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch_profile"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "restaurent_profile" ADD CONSTRAINT "restaurent_profile_owner_user_id_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "staff" ADD CONSTRAINT "staff_restaurent_id_restaurent_profile_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent_profile"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "staff" ADD CONSTRAINT "staff_branch_id_branch_profile_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch_profile"("id") ON DELETE CASCADE;