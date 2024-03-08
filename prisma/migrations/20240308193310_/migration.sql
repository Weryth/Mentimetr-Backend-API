-- CreateEnum
CREATE TYPE "FormTypes" AS ENUM ('COMMON', 'RLT');

-- CreateEnum
CREATE TYPE "ModerationType" AS ENUM ('NONE', 'AUTHOMATIC', 'BY_HANDS');

-- CreateEnum
CREATE TYPE "FormStates" AS ENUM ('OPEN', 'CLOSED');

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_user-id_fkey";

-- CreateTable
CREATE TABLE "Forms" (
    "id" TEXT NOT NULL,
    "updated-at" TIMESTAMP(3) NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "type" "FormTypes" NOT NULL,
    "isAnonim" BOOLEAN NOT NULL,
    "moderation-type" "ModerationType" NOT NULL,
    "max-users" INTEGER,
    "userId" TEXT NOT NULL,
    "isOpen" "FormStates" NOT NULL DEFAULT 'OPEN',

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormContent" (
    "id" TEXT NOT NULL,
    "updated-at" TIMESTAMP(3) NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" JSONB NOT NULL,
    "formId" TEXT NOT NULL,

    CONSTRAINT "FormContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_user-id_fkey" FOREIGN KEY ("user-id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Forms" ADD CONSTRAINT "Forms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormContent" ADD CONSTRAINT "FormContent_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
