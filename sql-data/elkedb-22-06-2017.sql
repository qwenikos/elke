-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: elkedb
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `base_benef_per_research`
--

DROP TABLE IF EXISTS `base_benef_per_research`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_benef_per_research` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `benef_id` int(11) DEFAULT NULL,
  `reseach_id` int(11) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  PRIMARY KEY (`rec_id`),
  CONSTRAINT `fk_base_benef_per_research_1` FOREIGN KEY (`rec_id`) REFERENCES `base_beneficiary` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_benef_per_research_2` FOREIGN KEY (`rec_id`) REFERENCES `base_research` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_benef_per_research`
--

LOCK TABLES `base_benef_per_research` WRITE;
/*!40000 ALTER TABLE `base_benef_per_research` DISABLE KEYS */;
/*!40000 ALTER TABLE `base_benef_per_research` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_beneficiary`
--

DROP TABLE IF EXISTS `base_beneficiary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_beneficiary` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `benef_code` varchar(45) DEFAULT NULL,
  `benef_name` varchar(45) DEFAULT NULL,
  `benef_surname` varchar(45) DEFAULT NULL,
  `benf_e_mail` varchar(45) DEFAULT NULL,
  `benef_afm` varchar(45) DEFAULT NULL,
  `benef_amka` varchar(45) DEFAULT NULL,
  `benef_desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_beneficiary`
--

LOCK TABLES `base_beneficiary` WRITE;
/*!40000 ALTER TABLE `base_beneficiary` DISABLE KEYS */;
INSERT INTO `base_beneficiary` VALUES (1,NULL,'nikos','perdikopanis','nikosp@di.uoa.gr','059946674',NULL,'benef'),(2,NULL,'etaria','etaria last','n@aol.gr','9999999',NULL,''),(3,'','giorgos','giorgos',NULL,'5555555',NULL,NULL);
/*!40000 ALTER TABLE `base_beneficiary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_doc_entoli`
--

DROP TABLE IF EXISTS `base_doc_entoli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_doc_entoli` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `entoli_code` varchar(45) DEFAULT NULL,
  `scidir_id` int(11) DEFAULT NULL,
  `research_id` int(11) DEFAULT NULL,
  `benef_afm` varchar(15) DEFAULT NULL,
  `fellow_id` int(11) DEFAULT NULL,
  `entoli_type_id` int(11) DEFAULT NULL,
  `paymentof` varchar(145) DEFAULT NULL,
  `payment_start_period` varchar(10) DEFAULT NULL,
  `peyment_end_period` varchar(10) DEFAULT NULL,
  `payment_amount` int(11) DEFAULT NULL,
  `advance_peyment_desc` varchar(245) DEFAULT NULL,
  `advance_payment_amount` int(11) DEFAULT NULL,
  `research_expenses_desc` varchar(245) DEFAULT NULL,
  `reseach_expenses_amount` int(11) DEFAULT NULL,
  `market_eval` int(11) DEFAULT NULL COMMENT 'υστερα απο εκτιμηση τιμων (0 για οχι 1 για ναι)',
  `legal_process` int(11) DEFAULT NULL COMMENT 'υστερα απο την προβλεπομενη απο το νομοθετικο (0 για οχι 1 για ναι)',
  `doc_protocol` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`rec_id`),
  KEY `fk_base_doc_entoli_1_idx` (`scidir_id`),
  KEY `fk_base_doc_entoli_2_idx` (`research_id`),
  KEY `fk_base_doc_entoli_4_idx` (`entoli_type_id`),
  KEY `fk_base_doc_entoli_5_idx` (`fellow_id`),
  CONSTRAINT `fk_base_doc_entoli_1` FOREIGN KEY (`scidir_id`) REFERENCES `base_scidir` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_doc_entoli_2` FOREIGN KEY (`research_id`) REFERENCES `base_research` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_doc_entoli_3` FOREIGN KEY (`fellow_id`) REFERENCES `base_fellow` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_doc_entoli_4` FOREIGN KEY (`entoli_type_id`) REFERENCES `base_doc_entoli_type` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_doc_entoli`
--

LOCK TABLES `base_doc_entoli` WRITE;
/*!40000 ALTER TABLE `base_doc_entoli` DISABLE KEYS */;
INSERT INTO `base_doc_entoli` VALUES (1,'1',1,1,'059946674',1,1,'nikos','01-01-2012','31-01-2012',1100,'advancepay',998,'999',101,23,34,NULL),(2,'1',1,1,'059946674',1,1,'kostas','2','2',2,'2',2,'2',2,2,2,NULL),(3,'2',2,2,'059946674',2,1,'8','9','10',11,'12',13,'14',15,16,17,NULL),(4,'2',2,2,'059946674',2,1,'8','9','10',11,'12',13,'14',15,16,17,NULL),(5,NULL,1,1,'059946674',1,1,'059945567','0101','0202',1000,'',NULL,'',NULL,0,0,NULL),(6,NULL,1,1,'059946674',1,1,'059945567','0101','0202',1000,'',NULL,'',NULL,0,0,NULL),(7,NULL,1,1,'059946674',1,1,'059946678','01','01',100,'NULL',NULL,'',NULL,0,0,NULL),(8,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'99',99,'',NULL,0,0,NULL),(9,NULL,1,1,'059946674',1,1,'1234','88','88',88,'NULL',NULL,'',NULL,0,0,NULL),(10,NULL,1,1,'059946674',1,1,'00','0','0',0,'NULL',NULL,'',NULL,0,0,NULL),(22,NULL,NULL,NULL,'NULL',1,2,'NULL','NULL','',NULL,'NULL',NULL,'',NULL,0,0,NULL),(23,NULL,1,1,'059946674',1,2,'059946674','NULL','NULL',NULL,'99',999,'',NULL,0,0,NULL),(24,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'8888',888,'',NULL,0,0,NULL),(25,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'8888',888,'',NULL,0,0,NULL),(31,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'888888',NULL,'',NULL,0,0,'20170416'),(32,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'888888',NULL,'',NULL,0,0,'20170417'),(33,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'888888',NULL,'',NULL,0,0,'20170418'),(34,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'888888',NULL,'',NULL,0,0,'20170419'),(35,NULL,NULL,NULL,'NULL',1,NULL,'NULL','NULL','',NULL,'NULL',NULL,'',NULL,0,0,'20170420'),(36,NULL,NULL,NULL,'NULL',1,NULL,'NULL','NULL','',NULL,'NULL',NULL,'',NULL,0,0,'20170421'),(37,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'777',77,'',NULL,0,0,'20170422'),(38,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170423'),(39,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170396'),(40,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170395'),(41,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170394'),(42,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170393'),(43,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170392'),(44,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170391'),(45,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170390'),(46,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170389'),(47,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170410-22'),(48,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170410-23'),(49,NULL,2,2,'059946674',1,2,'059946674','NULL','NULL',NULL,'78',77,'',NULL,0,0,'20170410-24'),(50,NULL,NULL,NULL,'NULL',1,NULL,'NULL','NULL','',NULL,'NULL',NULL,'',NULL,0,0,'20170410-25'),(51,NULL,1,1,'059946674',1,NULL,'059946674','NULL','NULL',NULL,'NULL',NULL,'',NULL,0,0,'20170410-26'),(52,NULL,1,1,'059946674',1,NULL,'059946674','NULL','NULL',NULL,'NULL',NULL,'',NULL,0,0,'20170410-27'),(53,NULL,NULL,NULL,'NULL',1,NULL,'NULL','NULL','NULL',NULL,'NULL',NULL,'',NULL,0,0,'20170505-28'),(54,NULL,1,1,'NULL',1,NULL,'NULL','NULL','NULL',NULL,'NULL',NULL,'',NULL,0,0,'20170505-29');
/*!40000 ALTER TABLE `base_doc_entoli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_doc_entoli_submited_by`
--

DROP TABLE IF EXISTS `base_doc_entoli_submited_by`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_doc_entoli_submited_by` (
  `doc_entoli_id` int(11) NOT NULL,
  `fellow_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`doc_entoli_id`),
  KEY `fk_base_doc_entoli_submited_by_2_idx` (`fellow_id`),
  CONSTRAINT `fk_base_doc_entoli_submited_by_1` FOREIGN KEY (`doc_entoli_id`) REFERENCES `base_doc_entoli` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_doc_entoli_submited_by_2` FOREIGN KEY (`fellow_id`) REFERENCES `base_fellow` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_doc_entoli_submited_by`
--

LOCK TABLES `base_doc_entoli_submited_by` WRITE;
/*!40000 ALTER TABLE `base_doc_entoli_submited_by` DISABLE KEYS */;
/*!40000 ALTER TABLE `base_doc_entoli_submited_by` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_doc_entoli_type`
--

DROP TABLE IF EXISTS `base_doc_entoli_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_doc_entoli_type` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `cod_id` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_doc_entoli_type`
--

LOCK TABLES `base_doc_entoli_type` WRITE;
/*!40000 ALTER TABLE `base_doc_entoli_type` DISABLE KEYS */;
INSERT INTO `base_doc_entoli_type` VALUES (1,'1','amoivi'),(2,'2','prokatavoli'),(3,'3','exoda ereynwn');
/*!40000 ALTER TABLE `base_doc_entoli_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_doc_proypologismos`
--

DROP TABLE IF EXISTS `base_doc_proypologismos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_doc_proypologismos` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `proypologismos_code` varchar(45) DEFAULT NULL,
  `scidir_id` int(11) DEFAULT NULL,
  `research_id` int(11) DEFAULT NULL,
  `financier` varchar(45) DEFAULT NULL,
  `budget_amount` varchar(245) DEFAULT NULL,
  `base_doc_proypologismoscol` varchar(45) DEFAULT NULL,
  `contact_start` varchar(45) DEFAULT NULL,
  `contract_end` varchar(45) DEFAULT NULL,
  `table_1A` varchar(45) DEFAULT NULL,
  `table_1B` varchar(45) DEFAULT NULL,
  `table_1G` varchar(45) DEFAULT NULL,
  `table_1D` varchar(45) DEFAULT NULL,
  `table_1E` varchar(45) DEFAULT NULL,
  `table_1ST` varchar(45) DEFAULT NULL,
  `table_1Z` varchar(45) DEFAULT NULL,
  `table_1H` varchar(45) DEFAULT NULL,
  `table_1T` varchar(45) DEFAULT NULL,
  `table_1IA` varchar(45) DEFAULT NULL,
  `table_1I` varchar(45) DEFAULT NULL,
  `table_2A` varchar(45) DEFAULT NULL,
  `table_2B` varchar(45) DEFAULT NULL,
  `table_2G` varchar(45) DEFAULT NULL,
  `table_2D` varchar(45) DEFAULT NULL,
  `table_2E` varchar(45) DEFAULT NULL,
  `table_2ST` varchar(45) DEFAULT NULL,
  `table_2Z` varchar(45) DEFAULT NULL,
  `table_2H` varchar(45) DEFAULT NULL,
  `table_2T` varchar(45) DEFAULT NULL,
  `table_2I` varchar(45) DEFAULT NULL,
  `table_2KA` varchar(45) DEFAULT NULL,
  `table_2K` varchar(45) DEFAULT NULL,
  `table_3A` varchar(45) DEFAULT NULL,
  `table_3B` varchar(45) DEFAULT NULL,
  `table_3G` varchar(45) DEFAULT NULL,
  `table_3D` varchar(45) DEFAULT NULL,
  `table_3EA` varchar(45) DEFAULT NULL,
  `table_3E` varchar(45) DEFAULT NULL,
  `table_4A` varchar(45) DEFAULT NULL,
  `table_4B` varchar(45) DEFAULT NULL,
  `table_4G` varchar(45) DEFAULT NULL,
  `table_4D` varchar(45) DEFAULT NULL,
  `table_4EA` varchar(45) DEFAULT NULL,
  `table_4E` varchar(45) DEFAULT NULL,
  `table_5A` varchar(45) DEFAULT NULL,
  `table_5B` varchar(45) DEFAULT NULL,
  `table_5G` varchar(45) DEFAULT NULL,
  `table_5DA` varchar(45) DEFAULT NULL,
  `table_5D` varchar(45) DEFAULT NULL,
  `table_6A` varchar(45) DEFAULT NULL,
  `table_6B` varchar(45) DEFAULT NULL,
  `table_6G` varchar(45) DEFAULT NULL,
  `table_6D` varchar(45) DEFAULT NULL,
  `table_6EA` varchar(45) DEFAULT NULL,
  `table_6E` varchar(45) DEFAULT NULL,
  `table_7A` varchar(45) DEFAULT NULL,
  `table_7B` varchar(45) DEFAULT NULL,
  `table_7E` varchar(45) DEFAULT NULL,
  `table_7DA` varchar(45) DEFAULT NULL,
  `table_7D` varchar(45) DEFAULT NULL,
  `table_8A` varchar(45) DEFAULT NULL,
  `table_9A1` varchar(45) DEFAULT NULL,
  `table_9A2` varchar(45) DEFAULT NULL,
  `budget_resp_name` varchar(45) DEFAULT NULL,
  `budget_resp_tel` varchar(45) DEFAULT NULL,
  `budget_resp_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`),
  KEY `fk_base_doc_proypologismos_1_idx` (`scidir_id`),
  KEY `fk_base_doc_proypologismos_2_idx` (`research_id`),
  CONSTRAINT `fk_base_doc_proypologismos_1` FOREIGN KEY (`scidir_id`) REFERENCES `base_scidir` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_doc_proypologismos_2` FOREIGN KEY (`research_id`) REFERENCES `base_research` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_doc_proypologismos`
--

LOCK TABLES `base_doc_proypologismos` WRITE;
/*!40000 ALTER TABLE `base_doc_proypologismos` DISABLE KEYS */;
INSERT INTO `base_doc_proypologismos` VALUES (8,NULL,1,1,'NULL','989898',NULL,'NULL','NULL','','','','','','','','','','NULL','','','','','','','','','','','','NULL','','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','NULL','NULL','NULL'),(9,NULL,1,1,'nikos','989898',NULL,'01/01/2013','01/01/2014','8','8','','','','','','','','NULL','','8','899','','','','','','','','','NULL','','','','','','NULL','','','','','','NULL','','99','','','NULL','','','','','','NULL','','','','','NULL','','','','','NULL','NULL','NULL'),(10,NULL,1,1,'nikos perd','100',NULL,'01/01/2017','01/10/2017','99','','','','','','','','','NULL','','','','','','','','','','','','NULL','','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','NULL','NULL','NULL'),(11,NULL,1,1,'papas','10000',NULL,'','NULL','','','','','','','','','','NULL','','','','','','','','','','','','NULL','','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','','NULL','','','','','NULL','','','','','NULL','NULL','NULL'),(12,NULL,1,1,'kostantinos','10000',NULL,'01/01/2015','01/01/2018','1','2','3','4','5','6','7','8','9','101','10','11','12','13','14','15','16','17','18','19','20','211','21','22','23','24','25','26','261','27','28','29','30','311','31','32','33','34','NULL','35','36','37','38','39','401','40','41','','42','431','43','44','45','451','NULL','NULL','NULL');
/*!40000 ALTER TABLE `base_doc_proypologismos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_fellow`
--

DROP TABLE IF EXISTS `base_fellow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_fellow` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `fellow_code` varchar(45) DEFAULT NULL,
  `fellow_name` varchar(145) DEFAULT NULL,
  `fellow_surname` varchar(145) DEFAULT NULL,
  `fellow_e_mail` varchar(45) DEFAULT NULL,
  `fellow_afm` varchar(45) DEFAULT NULL,
  `fellow_desc` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_fellow`
--

LOCK TABLES `base_fellow` WRITE;
/*!40000 ALTER TABLE `base_fellow` DISABLE KEYS */;
INSERT INTO `base_fellow` VALUES (1,'nikosp','nikos','perdikopanis','nikosp@di.uoa.gr','0009999','nikos test account'),(2,'katiana@di','katiana','efstathiou','katianna@di.uoa.gr','08888888','katianas desc'),(3,NULL,'',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `base_fellow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_fellow_per_research`
--

DROP TABLE IF EXISTS `base_fellow_per_research`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_fellow_per_research` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `reseach_id` varchar(45) DEFAULT NULL,
  `fellow_id` int(11) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  PRIMARY KEY (`rec_id`),
  CONSTRAINT `fk_base_fellow_per_research_1` FOREIGN KEY (`rec_id`) REFERENCES `base_research` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_fellow_per_research_2` FOREIGN KEY (`rec_id`) REFERENCES `base_fellow` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_fellow_per_research`
--

LOCK TABLES `base_fellow_per_research` WRITE;
/*!40000 ALTER TABLE `base_fellow_per_research` DISABLE KEYS */;
INSERT INTO `base_fellow_per_research` VALUES (1,'1',1,NULL),(2,'2',2,NULL);
/*!40000 ALTER TABLE `base_fellow_per_research` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_fellow_per_scidir`
--

DROP TABLE IF EXISTS `base_fellow_per_scidir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_fellow_per_scidir` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `scidir_id` int(11) DEFAULT NULL,
  `fellow_id` int(11) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  PRIMARY KEY (`rec_id`),
  KEY `fk_base_fellow_per_scidir_1_idx` (`scidir_id`),
  KEY `fk_base_fellow_per_scidir_2_idx` (`fellow_id`),
  CONSTRAINT `fk_base_fellow_per_scidir_1` FOREIGN KEY (`scidir_id`) REFERENCES `base_scidir` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_fellow_per_scidir_2` FOREIGN KEY (`fellow_id`) REFERENCES `base_fellow` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_fellow_per_scidir`
--

LOCK TABLES `base_fellow_per_scidir` WRITE;
/*!40000 ALTER TABLE `base_fellow_per_scidir` DISABLE KEYS */;
INSERT INTO `base_fellow_per_scidir` VALUES (1,1,1,NULL),(2,2,2,NULL),(3,2,1,'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP');
/*!40000 ALTER TABLE `base_fellow_per_scidir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_protocol`
--

DROP TABLE IF EXISTS `base_protocol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_protocol` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `ptotocol_number` varchar(145) DEFAULT NULL,
  `submit_email` varchar(145) DEFAULT NULL,
  `protocol_desc` varchar(245) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_protocol`
--

LOCK TABLES `base_protocol` WRITE;
/*!40000 ALTER TABLE `base_protocol` DISABLE KEYS */;
INSERT INTO `base_protocol` VALUES (1,NULL,'nikosp@di.uoa.gr',NULL,NULL),(2,NULL,'nikosp@di.uoa.gr',NULL,NULL),(3,NULL,'nikosp@di.uoa.gr',NULL,NULL),(4,NULL,'nikosp@di.uoa.gr',NULL,NULL),(5,NULL,'nikosp@di.uoa.gr',NULL,NULL),(6,NULL,'nikosp@di.uoa.gr',NULL,NULL),(7,NULL,'nikosp@di.uoa.gr',NULL,NULL),(8,NULL,'nikosp@di.uoa.gr',NULL,NULL),(9,NULL,'nikosp@di.uoa.gr',NULL,NULL),(10,NULL,'nikosp@di.uoa.gr',NULL,NULL),(11,NULL,'nikosp@di.uoa.gr',NULL,NULL),(12,NULL,'nikosp@di.uoa.gr',NULL,NULL),(13,NULL,'nikosp@di.uoa.gr',NULL,NULL),(14,NULL,'nikosp@di.uoa.gr',NULL,NULL),(15,NULL,'nikosp@di.uoa.gr',NULL,NULL),(16,NULL,'nikosp@di.uoa.gr',NULL,NULL),(17,NULL,'nikosp@di.uoa.gr',NULL,NULL),(18,NULL,'nikosp@di.uoa.gr',NULL,NULL),(19,NULL,'nikosp@di.uoa.gr',NULL,NULL),(20,NULL,'nikosp@di.uoa.gr',NULL,NULL),(21,NULL,'nikosp@di.uoa.gr',NULL,NULL),(22,NULL,'nikosp@di.uoa.gr',NULL,NULL),(23,NULL,'nikosp@di.uoa.gr',NULL,NULL),(24,NULL,'nikosp@di.uoa.gr',NULL,NULL),(25,NULL,'nikosp@di.uoa.gr',NULL,'2017-04-10 12:22:41'),(26,NULL,'nikosp@di.uoa.gr',NULL,'2017-04-10 13:05:28'),(27,NULL,'nikosp@di.uoa.gr',NULL,'2017-04-10 13:05:38'),(28,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 14:12:00'),(29,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 14:45:17'),(30,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:21:54'),(31,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:35:17'),(32,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:47:33'),(33,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:48:57'),(34,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:49:53'),(35,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:50:34'),(36,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-05 15:50:58'),(37,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 09:38:37'),(38,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 09:47:17'),(39,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 09:48:34'),(40,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 09:50:32'),(41,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 10:07:37'),(42,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 10:09:29'),(43,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 10:12:00'),(44,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 10:15:55'),(45,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:19:35'),(46,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:20:47'),(47,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:24:19'),(48,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:28:05'),(49,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:29:34'),(50,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:36:29'),(51,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:39:02'),(52,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:39:42'),(53,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:41:53'),(54,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:49:48'),(55,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:53:00'),(56,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:54:21'),(57,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:56:13'),(58,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 11:58:05'),(59,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:10:27'),(60,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:14:06'),(61,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:14:34'),(62,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:22:51'),(63,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:34:18'),(64,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:42:25'),(65,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:51:02'),(66,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:52:33'),(67,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:52:56'),(68,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-08 12:58:46'),(69,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 08:56:24'),(70,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 09:06:56'),(71,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 09:07:40'),(72,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 09:49:52'),(73,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 12:28:52'),(74,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-24 12:31:09'),(75,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-25 10:50:09'),(76,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-25 10:52:48'),(77,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-25 12:03:13'),(78,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-25 12:03:52'),(79,NULL,'nikosp@di.uoa.gr',NULL,'2017-05-25 15:04:38');
/*!40000 ALTER TABLE `base_protocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_research`
--

DROP TABLE IF EXISTS `base_research`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_research` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `research_code` varchar(45) DEFAULT NULL,
  `research_name` varchar(45) DEFAULT NULL,
  `research_desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_research`
--

LOCK TABLES `base_research` WRITE;
/*!40000 ALTER TABLE `base_research` DISABLE KEYS */;
INSERT INTO `base_research` VALUES (1,'er1','ereyna 1','ereyna perigrafi'),(2,'er2','ereyna 2','ereyna 2 perigrafh');
/*!40000 ALTER TABLE `base_research` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_research_per_scidir`
--

DROP TABLE IF EXISTS `base_research_per_scidir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_research_per_scidir` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `scidir_id` int(11) DEFAULT NULL,
  `research_id` int(11) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  PRIMARY KEY (`rec_id`),
  CONSTRAINT `fk_base_research_per_scidir_1` FOREIGN KEY (`rec_id`) REFERENCES `base_scidir` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_base_research_per_scidir_2` FOREIGN KEY (`rec_id`) REFERENCES `base_research` (`rec_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_research_per_scidir`
--

LOCK TABLES `base_research_per_scidir` WRITE;
/*!40000 ALTER TABLE `base_research_per_scidir` DISABLE KEYS */;
INSERT INTO `base_research_per_scidir` VALUES (1,1,1,NULL),(2,2,2,NULL);
/*!40000 ALTER TABLE `base_research_per_scidir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_scidir`
--

DROP TABLE IF EXISTS `base_scidir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_scidir` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `scidir_code` varchar(45) DEFAULT NULL,
  `scidir_name` varchar(145) DEFAULT NULL,
  `scidir_surname` varchar(145) DEFAULT NULL,
  `scidir_e_mail` varchar(45) DEFAULT NULL,
  `scidir_afm` varchar(45) DEFAULT NULL,
  `scidir_desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_scidir`
--

LOCK TABLES `base_scidir` WRITE;
/*!40000 ALTER TABLE `base_scidir` DISABLE KEYS */;
INSERT INTO `base_scidir` VALUES (1,'dsivridi','dimitris','sivridis','dsivridi@di.uoa.gr','9999999999','scidir'),(2,'georgiad','pan','georgiadis','georgiad@di.uoa.gr','88989888','georg desc');
/*!40000 ALTER TABLE `base_scidir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base_user`
--

DROP TABLE IF EXISTS `base_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base_user` (
  `rec_id` int(11) NOT NULL,
  `user_e_mail` varchar(45) DEFAULT NULL,
  `user_uid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_user`
--

LOCK TABLES `base_user` WRITE;
/*!40000 ALTER TABLE `base_user` DISABLE KEYS */;
INSERT INTO `base_user` VALUES (1,'nikosp@di.uoa.gr','nikosp'),(2,'violeta@di.uoa.gr','violeta@di');
/*!40000 ALTER TABLE `base_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty` (
  `rec_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `faculty_desc` varchar(200) NOT NULL,
  `others` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (2,'fac2','fac1sur2','fac1 beautiful 2','ελληνικα σχολια'),(1,'firstname','surname','description of','other data for'),(3,'nikos','perdikopanis','sxolia_data','others_data'),(4,'userName','perdikop2','description','ddds'),(5,'userName','perdikop3','description','ddds');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-21 15:49:35
