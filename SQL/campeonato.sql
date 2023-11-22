-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2023 a las 23:42:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `campeonato`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_cat` int(11) NOT NULL,
  `nombre_cat` varchar(60) NOT NULL,
  `id_mod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_cat`, `nombre_cat`, `id_mod`) VALUES
(3, 'Incapacidad', 1),
(4, 'Seguidor de Linea', 2),
(5, 'Recuperacion de Objetos', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id_equipo` int(11) NOT NULL,
  `nombre_equipo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id_equipo`, `nombre_equipo`) VALUES
(1, 'Equipo 1'),
(2, 'Equipo 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscritos`
--

CREATE TABLE `inscritos` (
  `id_inscrito` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL,
  `id_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscritos`
--

INSERT INTO `inscritos` (`id_inscrito`, `id_equipo`, `id_cat`) VALUES
(2, 2, 3),
(5, 2, 3),
(7, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `integrantes`
--

CREATE TABLE `integrantes` (
  `id_integrante` int(11) NOT NULL,
  `nombre_integrante` varchar(60) NOT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `integrantes`
--

INSERT INTO `integrantes` (`id_integrante`, `nombre_integrante`, `id_equipo`) VALUES
(1, 'Alexander', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidades`
--

CREATE TABLE `modalidades` (
  `id_mod` int(11) NOT NULL,
  `nombre_mod` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modalidades`
--

INSERT INTO `modalidades` (`id_mod`, `nombre_mod`) VALUES
(1, 'Batalla de Robots'),
(2, 'Vehiculos Autonomos'),
(3, 'Soluciones Industriales'),
(4, 'Drones'),
(7, 'Drones_nuevos'),
(10, 'kkkkkkkk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patrocinantes`
--

CREATE TABLE `patrocinantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `nivel` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usersdb`
--

CREATE TABLE `usersdb` (
  `id` int(30) NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `rol` enum('Editor','Admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usersdb`
--

INSERT INTO `usersdb` (`id`, `usuario`, `password`, `rol`) VALUES
(367, 'Alexander109', '$2a$10$HBGqn6F8a2e0RK0s9k5IHuOTx039BXlccBiCOuEvPUALrnNw9QihC', 'Admin'),
(368, 'Alexander110', '$2a$10$2pA/NHi2A.A3Bv7hJQMf/eFdjDpJbRXxQWngYoq6DQOLezvhiZ/PC', 'Editor'),
(369, 'Alexander111', '$2a$10$onhb9QtY1E9lDAYfttUnfO.rmX6ILGYh7wy0NXbbxYJhOd2suu11C', 'Editor'),
(370, 'Alexander112', '$2a$10$ljcsinG/yILwPIdrytlvdecRMOx2XpW30uCXibckv9oP/PVrjpszq', 'Editor'),
(371, 'Alexander113', '$2a$10$/Z33hVPsnBByfeFtn4XJAu0yVeALOTqbq1l5uLuKz1b6ZhVvanZEa', 'Editor'),
(372, 'Alexander114', '$2a$10$TP0XBhoW1hFpe0X4cap0IeVp1YttLonA2b8bgadGy25Xk.0OSuJ0m', 'Admin'),
(374, 'PedroOlmos', '$2a$10$Bk6Wzyo2TjiFAxgQ6iwz2uq9dCyhEayuCZWNxOrysqdsuzWVoME.S', 'Editor'),
(375, 'Alberto', '$2a$10$WjJdBE.EdwHzXrRoo1KH2efBMM363hTdghx2cLNlzrUGWrBBbFOW2', 'Editor'),
(376, 'AlbertoCardozo', '$2a$10$d8g9ZUKfug3DZoYpEDU.But0KzNNmfq7M8HYWq1WY4cyioE26fXVK', 'Admin'),
(377, 'AlbertoCardozo4', '$2a$10$SnBPcfGY8eXCGgEnrM3wruE8E2NiDhOi.Iy2tqUn/nT682hmyAlfe', 'Editor'),
(378, 'Yuleny', '$2a$10$hZR6bz6H8fcCpc0H1LGfWO18j29yfIFdAaI8wYGf.PWO6X5WViTJG', 'Editor'),
(379, 'Eudis', '$2a$10$rB939f/Y3.I226sA3K8dI.0lyqmftgFvW99t4JBs8yOtk/mSPdiYO', 'Editor'),
(380, 'eudis2', '$2a$10$eadeOHXm4RezwbFKUyj4P.M5vh34yuKex7Vur2tPU8Kae639/WN1y', 'Admin'),
(381, 'eudis33', '$2a$10$uMdiYRksCzX9/wnaDfWqyu42BzaEssBLzcyTeVh4cZjX9eJqYti0G', 'Admin'),
(382, 'eudis44', '$2a$10$q7GhuMHzHwuKl8G.cxpOdeV5BHtRn1LQGowK.gNlk.lX9OntTGCKq', 'Editor'),
(383, 'eudis99', '$2a$10$mpbOIbVZXKZri8h/lBa2m.ojKiR2QbPJR0g4vj8jW1yW0VnDV1CS6', 'Editor'),
(384, 'eudi133', '$2a$10$gSjAYosu6TvU.5LD2a/Gd.jm4vuBSsyQfiLw9GWiIbbaLKUPtDKTO', 'Editor'),
(385, 'eudi13388', '$2a$10$tRh7F0E.oAhUJHvLH6RF6.ZKaNSh7UbXXgbJszr5StgHZbw6WwLGG', 'Editor');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_cat`),
  ADD KEY `modalidad_id` (`id_mod`),
  ADD KEY `modalidad_id_2` (`id_mod`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id_equipo`);

--
-- Indices de la tabla `inscritos`
--
ALTER TABLE `inscritos`
  ADD PRIMARY KEY (`id_inscrito`),
  ADD KEY `id_equipo` (`id_equipo`,`id_cat`),
  ADD KEY `id_cat` (`id_cat`);

--
-- Indices de la tabla `integrantes`
--
ALTER TABLE `integrantes`
  ADD PRIMARY KEY (`id_integrante`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`id_mod`);

--
-- Indices de la tabla `patrocinantes`
--
ALTER TABLE `patrocinantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usersdb`
--
ALTER TABLE `usersdb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD UNIQUE KEY `usuario_2` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id_equipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `inscritos`
--
ALTER TABLE `inscritos`
  MODIFY `id_inscrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `integrantes`
--
ALTER TABLE `integrantes`
  MODIFY `id_integrante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  MODIFY `id_mod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `patrocinantes`
--
ALTER TABLE `patrocinantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usersdb`
--
ALTER TABLE `usersdb`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=386;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id_mod`) REFERENCES `modalidades` (`id_mod`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `inscritos`
--
ALTER TABLE `inscritos`
  ADD CONSTRAINT `inscritos_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id_equipo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inscritos_ibfk_2` FOREIGN KEY (`id_cat`) REFERENCES `categorias` (`id_cat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `integrantes`
--
ALTER TABLE `integrantes`
  ADD CONSTRAINT `integrantes_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id_equipo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
