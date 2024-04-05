-- CreateEnum
CREATE TYPE "Type" AS ENUM ('FRONT', 'MOBILE', 'API');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" "Type";
