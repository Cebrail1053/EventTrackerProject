-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema habitdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `habitdb` ;

-- -----------------------------------------------------
-- Schema habitdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `habitdb` DEFAULT CHARACTER SET utf8 ;
USE `habitdb` ;

-- -----------------------------------------------------
-- Table `habit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `habit` ;

CREATE TABLE IF NOT EXISTS `habit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NULL,
  `start_date` DATETIME NOT NULL,
  `updated_date` DATETIME NOT NULL,
  `goal` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS habituser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'habituser'@'localhost' IDENTIFIED BY 'habituser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'habituser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `habit`
-- -----------------------------------------------------
START TRANSACTION;
USE `habitdb`;
INSERT INTO `habit` (`id`, `name`, `description`, `start_date`, `updated_date`, `goal`) VALUES (1, 'Exercise', 'Exercise for at least 30 minutes a day', '2021-06-13', '2021-08-01', NULL);
INSERT INTO `habit` (`id`, `name`, `description`, `start_date`, `updated_date`, `goal`) VALUES (2, 'Watch Calorie Intake', 'Pay more attention to labels', '2021-05-29', '2021-08-01', NULL);

COMMIT;

