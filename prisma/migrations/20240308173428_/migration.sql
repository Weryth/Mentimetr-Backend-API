/*
  Warnings:

  - You are about to drop the column `vkId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "vkId",
ADD COLUMN     "vk-id" TEXT;

-- CreateTable
CREATE TABLE "VkRelationRequests" (
    "id" TEXT NOT NULL,
    "updated-at" TIMESTAMP(3) NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relation-token" TEXT NOT NULL,

    CONSTRAINT "VkRelationRequests_pkey" PRIMARY KEY ("id")
);
