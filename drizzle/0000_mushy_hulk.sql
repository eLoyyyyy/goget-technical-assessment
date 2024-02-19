CREATE TABLE `user_settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`preferred_theme` text,
	`send_email` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_settings_user_id_unique` ON `user_settings` (`user_id`);