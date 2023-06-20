-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2023 at 07:13 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(5) NOT NULL,
  `category_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'Perlengkapan mandi'),
(2, 'Makanan'),
(3, 'Minuman'),
(4, 'Kecantikan'),
(5, 'Peralatan Kantor'),
(6, 'Obat-obatan');

-- --------------------------------------------------------

--
-- Table structure for table `table_faq`
--

CREATE TABLE `table_faq` (
  `id_faq` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_faq`
--

INSERT INTO `table_faq` (`id_faq`, `question`, `answer`) VALUES
(1, 'Toko Apotik', '081523647112');

-- --------------------------------------------------------

--
-- Table structure for table `table_market`
--

CREATE TABLE `table_market` (
  `market_id` int(11) NOT NULL,
  `market_name` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `market_type` varchar(20) NOT NULL,
  `rating` varchar(4) NOT NULL,
  `user_id` int(11) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_market`
--

INSERT INTO `table_market` (`market_id`, `market_name`, `address`, `market_type`, `rating`, `user_id`, `latitude`, `longitude`) VALUES
(1, 'Toko MBAKSUR', 'Jl. Sawi, Sendangguwo, Kec. Tembalang', 'Toko Grosir', '4.6', 1, -7.009697, 110.449508),
(2, 'RB GrosirMart Durian', 'Jl. Durian II No.18, Lamper Kidul, Kec. Semarang S', 'Pusat perbelanjaan', '4.3', 3, -7.008321, 110.439346);

-- --------------------------------------------------------

--
-- Table structure for table `table_product`
--

CREATE TABLE `table_product` (
  `product_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `stock` int(5) NOT NULL,
  `stock_unit` varchar(10) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(15) NOT NULL,
  `expired` date NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `rating` int(4) NOT NULL,
  `market_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_product`
--

INSERT INTO `table_product` (`product_id`, `name`, `stock`, `stock_unit`, `category_id`, `price`, `expired`, `description`, `image_url`, `rating`, `market_id`) VALUES
(1, 'Promag', 5, 'strip', 6, 7000, '2027-06-12', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'promag.jpg', 5, 1),
(2, 'Good Day Cappuccino 1 Sachet', 20, 'sachet', 3, 2000, '2025-06-28', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl blandit, pellentesque neque eu, pellentesque elit. Suspendisse fringilla urna justo, eget suscipit lectus mattis.', 'good-day-cappuccino.jpg', 5, 2),
(3, 'Good Day Chococinno 1 sachet', 25, 'sachet', 3, 1500, '2028-06-11', 'Lorem ipsum dolor sit amet. At delectus perferendis ut impedit exercitationem eos omnis aspernatur et maxime cumque qui dolor officiis. Aut quasi quis qui vitae quaerat est provident nostrum id velit perspiciatis eum fugiat dolorem. Hic autem quaerat et aspernatur deserunt est exercitationem laboriosam sed nisi voluptatum. Sit fugit minima et corrupti porro eos rerum autem!', 'good-day-chococinno.jpg', 5, 2),
(4, 'Good Day Carrebian Nut', 20, 'sachet', 3, 1500, '2026-06-11', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa', 'good-day-carrebian-nut.jpg', 5, 1),
(234, 'Kopi Kapal Api', 100, 'sachet', 3, 3000, '2028-06-14', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis', 'kopi-kapal-api-special-mix.jpg', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `table_saveproduct`
--

CREATE TABLE `table_saveproduct` (
  `id_save` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_saveproduct`
--

INSERT INTO `table_saveproduct` (`id_save`, `product_id`, `user_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `table_user`
--

CREATE TABLE `table_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_user`
--

INSERT INTO `table_user` (`user_id`, `user_name`, `password`) VALUES
(1, 'dimas', '123'),
(2, 'nadnad', '321'),
(3, 'sansan', '1243');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_faq`
--
ALTER TABLE `table_faq`
  ADD PRIMARY KEY (`id_faq`);

--
-- Indexes for table `table_market`
--
ALTER TABLE `table_market`
  ADD PRIMARY KEY (`market_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `table_product`
--
ALTER TABLE `table_product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `market_id` (`market_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `table_saveproduct`
--
ALTER TABLE `table_saveproduct`
  ADD PRIMARY KEY (`id_save`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `table_user`
--
ALTER TABLE `table_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_faq`
--
ALTER TABLE `table_faq`
  MODIFY `id_faq` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `table_market`
--
ALTER TABLE `table_market`
  MODIFY `market_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `table_product`
--
ALTER TABLE `table_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;

--
-- AUTO_INCREMENT for table `table_saveproduct`
--
ALTER TABLE `table_saveproduct`
  MODIFY `id_save` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `table_user`
--
ALTER TABLE `table_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `table_product`
--
ALTER TABLE `table_product`
  ADD CONSTRAINT `table_product_ibfk_1` FOREIGN KEY (`market_id`) REFERENCES `table_market` (`market_id`);

--
-- Constraints for table `table_saveproduct`
--
ALTER TABLE `table_saveproduct`
  ADD CONSTRAINT `table_saveproduct_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `table_product` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
