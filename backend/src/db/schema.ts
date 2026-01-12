import { pgTable, PgTable, text, timestamp, unique } from "drizzle-orm/pg-core";
import { Relations } from "drizzle-orm";
import { date } from "drizzle-orm/mysql-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").unique().notNull(),
  name: text("name"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", { mode: date}).notNull().defaultNow(),



})