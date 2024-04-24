import { PgTable, pgTable, text,timestamp,uuid} from "drizzle-orm/pg-core"

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createAt: timestamp("created_at", {
    mode: "string",
    withTimezone: true,
  }),
  workspaceOwner: uuid("workspace_id").notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  logo: text("logo"),
  bannnerUrl: text("bannner_url"),
}); 

export const folders = pgTable("folders", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createAt: timestamp("created_at", {
    mode: "string",
    withTimezone: true,
  }),
  workspaceId: uuid("workspace_id").references(() => workspaces.id),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  bannnerUrl: text("bannner_url"),
}); 

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createAt: timestamp("created_at", {
    mode: "string",
    withTimezone: true,
  }),
  workspaceId: uuid("workspace_id").references(() => workspaces.id),
  folderId: uuid("folder_id").references(() => folders.id),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  bannnerUrl: text("bannner_url"),
}); 