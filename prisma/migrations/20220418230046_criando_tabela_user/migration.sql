-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ra` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;