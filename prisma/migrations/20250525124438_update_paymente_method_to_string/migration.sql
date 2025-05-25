/*
  Warnings:

  - You are about to drop the `payment_methods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `paymentMethod` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_paymentmethodId_fkey";

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "paymentMethod" TEXT NOT NULL;

-- DropTable
DROP TABLE "payment_methods";
