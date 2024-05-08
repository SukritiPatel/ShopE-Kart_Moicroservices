
DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `cart_id` int NOT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `product_quantity` int DEFAULT '1',
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
);
