-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdTime" TEXT NOT NULL,
    "createdDate" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetTime" TEXT NOT NULL,
    "targetDate" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
