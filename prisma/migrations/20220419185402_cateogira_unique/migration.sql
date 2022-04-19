/*
  Warnings:

  - A unique constraint covering the columns `[categoria]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Categoria_categoria_key` ON `Categoria`(`categoria`);
