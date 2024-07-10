CREATE USER 'martin'@'localhost' IDENTIFIED BY 'password';
GRANT SELECT, UPDATE ON Books TO 'martin'@'localhost';

--esercizio seguente

REVOKE UPDATE ON Books FROM martin;