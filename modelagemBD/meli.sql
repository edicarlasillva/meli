-- MySQL Script generated by MySQL Workbench
-- Sat Jul  4 17:19:14 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema meli
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `meli` ;

-- -----------------------------------------------------
-- Schema meli
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meli` DEFAULT CHARACTER SET utf8 ;
USE `meli` ;

-- -----------------------------------------------------
-- Table `meli`.`melicategprincipal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`melicategprincipal` ;

CREATE TABLE IF NOT EXISTS `meli`.`melicategprincipal` (
  `idcategorias` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `categoria_principal` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meli`.`meliprodutos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`meliprodutos` ;

CREATE TABLE IF NOT EXISTS `meli`.`meliprodutos` (
  `idprodutos` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `desc_produto` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  PRIMARY KEY (`idprodutos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meli`.`meliclientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`meliclientes` ;

CREATE TABLE IF NOT EXISTS `meli`.`meliclientes` (
  `idclientes` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`idclientes`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meli`.`melicategprod`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`melicategprod` ;

CREATE TABLE IF NOT EXISTS `meli`.`melicategprod` (
  `idmelicategprod` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_produto` INT UNSIGNED NOT NULL,
  `id_categ_principal` INT UNSIGNED NOT NULL,
  `numero_vendas` INT UNSIGNED NULL,
  PRIMARY KEY (`idmelicategprod`),
  INDEX `categprod_produto_idx` (`id_produto` ASC) VISIBLE,
  INDEX `categprod_categprincipal_idx` (`id_categ_principal` ASC) VISIBLE,
  CONSTRAINT `categprod_produto`
    FOREIGN KEY (`id_produto`)
    REFERENCES `meli`.`meliprodutos` (`idprodutos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `categprod_categprincipal`
    FOREIGN KEY (`id_categ_principal`)
    REFERENCES `meli`.`melicategprincipal` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meli`.`melicompras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`melicompras` ;

CREATE TABLE IF NOT EXISTS `meli`.`melicompras` (
  `idmelicompras` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_cliente` INT UNSIGNED NOT NULL,
  `id_produto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmelicompras`),
  INDEX `compra_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `compra_produto_idx` (`id_produto` ASC) VISIBLE,
  CONSTRAINT `compra_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `meli`.`meliclientes` (`idclientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `compra_produto`
    FOREIGN KEY (`id_produto`)
    REFERENCES `meli`.`meliprodutos` (`idprodutos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meli`.`melicomprecomendacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meli`.`melicomprecomendacao` ;

CREATE TABLE IF NOT EXISTS `meli`.`melicomprecomendacao` (
  `idmelicomprecomendacao` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_compras` INT UNSIGNED NOT NULL,
  `id_produto_recomendado` INT UNSIGNED NOT NULL,
  `email_enviado` CHAR(1) NOT NULL DEFAULT 'N',
  `data_envio_email` DATETIME NULL,
  `link_visualizado` CHAR(1) NOT NULL DEFAULT 'N',
  `data_link_visualizado` DATETIME NULL,
  PRIMARY KEY (`idmelicomprecomendacao`),
  INDEX `comprrecomendacao_compras_idx` (`id_compras` ASC) VISIBLE,
  INDEX `comprarecomendacao_categprod_idx` (`id_produto_recomendado` ASC) VISIBLE,
  CONSTRAINT `comprrecomendacao_compras`
    FOREIGN KEY (`id_compras`)
    REFERENCES `meli`.`melicompras` (`idmelicompras`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comprarecomendacao_categprod`
    FOREIGN KEY (`id_produto_recomendado`)
    REFERENCES `meli`.`melicategprod` (`idmelicategprod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;