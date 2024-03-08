/*
  Warnings:

  - Added the required column `vkId` to the `VkRelationRequests` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VkRelationRequestsStatus" AS ENUM ('NEW', 'CANCELED', 'CLOSED');

-- AlterTable
ALTER TABLE "VkRelationRequests" ADD COLUMN     "status" "VkRelationRequestsStatus" NOT NULL DEFAULT 'NEW',
ADD COLUMN     "vkId" TEXT NOT NULL;
