CREATE SCHEMA `schemadb` ;

CREATE TABLE `schemadb`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`));

SELECT * FROM schemadb.employee;

--  type into MySQL Workbench
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'