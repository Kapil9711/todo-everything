/*
  Warnings:

  - You are about to drop the column `tagetTime` on the `Task` table. All the data in the column will be lost.
  - Added the required column `targetData` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetTime` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetTime" TEXT NOT NULL,
    "targetData" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Task" ("completed", "completedAt", "content", "createdAt", "id") SELECT "completed", "completedAt", "content", "createdAt", "id" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
