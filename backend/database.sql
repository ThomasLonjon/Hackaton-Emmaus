-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema emmaus_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emmaus_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emmaus_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `emmaus_db` ;

-- -----------------------------------------------------
-- Table `emmaus_db`.`agency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`agency` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `lat` FLOAT NOT NULL,
  `long` FLOAT NOT NULL,
  `phone_number` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emmaus_db`.`models`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`models` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emmaus_db`.`evaluation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`evaluation` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(255) NOT NULL,
  `release_year` INT(11) NOT NULL,
  `ram` INT(11) NOT NULL,
  `storage` INT(11) NOT NULL,
  `condition` VARCHAR(45) NOT NULL,
  `screen_size` VARCHAR(45) NOT NULL,
  `os` VARCHAR(45) NOT NULL,
  `guarantee` TINYINT(4) NULL DEFAULT NULL,
  `price` FLOAT NOT NULL,
  `charger_in` TINYINT(4) NOT NULL,
  `is_sold` TINYINT(4) NOT NULL DEFAULT '0',
  `sale_date` DATE NULL DEFAULT NULL,
  `agency_id` INT(11) NOT NULL,
  `models_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_evaluation_agency_idx` (`agency_id` ASC),
  INDEX `fk_evaluation_models1_idx` (`models_id` ASC),
  CONSTRAINT `fk_evaluation_agency`
    FOREIGN KEY (`agency_id`)
    REFERENCES `emmaus_db`.`agency` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evaluation_models1`
    FOREIGN KEY (`models_id`)
    REFERENCES `emmaus_db`.`models` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emmaus_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(65) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(65) NOT NULL,
  `role` TINYINT(4) NOT NULL DEFAULT '0',
  `agency_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_agency1_idx` (`agency_id` ASC),
  CONSTRAINT `fk_users_agency1`
    FOREIGN KEY (`agency_id`)
    REFERENCES `emmaus_db`.`agency` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
