-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2018 a las 17:00:32
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `psikydesav02`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_arbol_categorias` (IN `p_cat_id` INT)  NO SQL
BEGIN

	SET @@SESSION.max_sp_recursion_depth = 255;

    IF (p_cat_id IS NULL) THEN
    	CALL prc_arbol_categorias(0,0);
    ELSE
    	CALL prc_arbol_categorias(0,p_cat_id);
    END IF;
    
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `prc_arbol_categorias` (IN `p_nivel` INT, IN `p_cat_id` INT)  BEGIN		

	DECLARE l_cat_nombre VARCHAR(100);
    DECLARE l_cat_id_hija VARCHAR(100);
    
    DECLARE NO_HAY_DATOS INTEGER DEFAULT 0;
    
    DECLARE c_hijas CURSOR FOR 
	 SELECT cat_id
       FROM categorias
      WHERE cat_cat_id_madre = p_cat_id;

	DECLARE CONTINUE HANDLER FOR NOT FOUND SET NO_HAY_DATOS = 1;

    SELECT p_nivel          nivel,
           cat_id                ,
           cat_cat_id_madre      ,
           cat_orden             ,
           cat_nombre            ,
           cat_nombre_corto      ,
           cat_descripcion       
	  FROM categorias
     WHERE cat_id = p_cat_id;
       
    OPEN c_hijas;
    
    hijas: LOOP
 	
    	FETCH c_hijas INTO l_cat_id_hija;
        
 		IF NO_HAY_DATOS = 1 THEN 
 			LEAVE hijas;
 		END IF;
 		
        CALL prc_arbol_categorias(p_nivel + 1, l_cat_id_hija);
	
    END LOOP hijas;
    
    CLOSE c_hijas;        
        
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `prueba` ()  NO SQL
BEGIN

	select 1 as joer;
    
    CALL get_arbol_categorias(5);
    
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `cat_id` int(11) NOT NULL,
  `cat_cat_id_madre` int(11) DEFAULT NULL,
  `cat_orden` int(3) DEFAULT NULL,
  `cat_nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `cat_nombre_corto` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cat_descripcion` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`cat_id`, `cat_cat_id_madre`, `cat_orden`, `cat_nombre`, `cat_nombre_corto`, `cat_descripcion`) VALUES
(0, NULL, 1, 'Raíz', 'Raíz', 'Raíz'),
(1, 0, 1, 'A', 'A', 'A'),
(2, 0, 2, 'B', 'B', 'B'),
(3, 0, 3, 'C', 'C', 'C'),
(4, 0, 4, 'D', 'D', 'D'),
(5, 1, 1, 'A1', 'A1', 'A1'),
(6, 1, 2, 'A2', 'A2', 'A2'),
(7, 1, 3, 'A3', 'A3', 'A3'),
(8, 2, 1, 'B1', 'B1', 'B1'),
(9, 2, 2, 'B2', 'B2', 'B2'),
(10, 2, 3, 'B3', 'B3', 'B3'),
(11, 3, 1, 'C1', 'C1', 'C1'),
(12, 3, 2, 'C2', 'C2', 'C2'),
(13, 4, 1, 'D1', 'D1', 'D1'),
(14, 5, 1, 'A1-1', 'A1-1', 'A1-1'),
(15, 5, 2, 'A1-2', 'A1-2', 'A1-2'),
(16, 5, 3, 'A1-3', 'A1-3', 'A1-3'),
(17, 6, 1, 'A2-1', 'A2-1', 'A2-1'),
(18, 6, 2, 'A2-2', 'A2-2', 'A2-2'),
(19, 8, 1, 'B1-1', 'B1-1', 'B1-1'),
(20, 8, 2, 'B1-2', 'B1-2', 'B1-2'),
(21, 10, 1, 'B3-1', 'B3-1', 'B3-1'),
(22, 12, 1, 'C2-1', 'C2-1', 'C2-1'),
(23, 13, 1, 'D1-1', 'D1-1', 'D1-1'),
(24, 13, 2, 'D1-2', 'D1-2', 'D1-2'),
(25, 13, 3, 'D1-3', 'D1-3', 'D1-3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_usuarios`
--

CREATE TABLE `categorias_usuarios` (
  `cus_id` int(11) NOT NULL,
  `cus_usu_id` int(11) NOT NULL,
  `cus_cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `dir_id` int(11) NOT NULL,
  `dir_usu_id` int(11) NOT NULL,
  `dir_pais` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `dir_provincia` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `dir_poblacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `dir_cp` varchar(5) COLLATE utf8_spanish2_ci NOT NULL,
  `dir_tva_cod` varchar(3) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dir_nombre_via` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dir_numero` int(11) NOT NULL,
  `dir_escalera` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dir_piso` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dir_puerta` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dir_direccion_larga` varchar(200) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_detalle`
--

CREATE TABLE `factura_detalle` (
  `fcd_id` int(11) NOT NULL,
  `fcd_fcm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_maestro`
--

CREATE TABLE `factura_maestro` (
  `fcm_id` int(11) NOT NULL,
  `fcm_usu_id` int(11) NOT NULL,
  `fcm_dir_id` int(11) NOT NULL,
  `fcm_per_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formador_usuario`
--

CREATE TABLE `formador_usuario` (
  `for_usu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insignia`
--

CREATE TABLE `insignia` (
  `ins_sus` int(11) NOT NULL,
  `ins_usu` int(11) NOT NULL,
  `ins_texto` varchar(1000) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `per_id` int(11) NOT NULL,
  `per_usu_id` int(11) DEFAULT NULL,
  `per_tpe_cod` varchar(3) COLLATE utf8_spanish2_ci NOT NULL,
  `per_tdc_cod` varchar(3) COLLATE utf8_spanish2_ci NOT NULL,
  `per_nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `per_apellidos` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `per_razon_social` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `super_usuario`
--

CREATE TABLE `super_usuario` (
  `sus_usu_id` int(11) NOT NULL,
  `sus_n_insignias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `tdc_cod` varchar(3) COLLATE utf8_spanish2_ci NOT NULL,
  `tdc_nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `tdc_nombre_corto` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`tdc_cod`, `tdc_nombre`, `tdc_nombre_corto`) VALUES
('DNI', 'Documento Nacional de Identidad', 'DNI'),
('NIE', 'Número de identificación de extranjero', 'NIE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_persona`
--

CREATE TABLE `tipo_persona` (
  `tpe_cod` varchar(3) COLLATE utf8_spanish2_ci NOT NULL,
  `tpe_descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_persona`
--

INSERT INTO `tipo_persona` (`tpe_cod`, `tpe_descripcion`) VALUES
('FIS', 'Física'),
('JUR', 'Jurídica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_via`
--

CREATE TABLE `tipo_via` (
  `tva_cod` varchar(3) COLLATE utf8_spanish2_ci NOT NULL,
  `tva_descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_via`
--

INSERT INTO `tipo_via` (`tva_cod`, `tva_descripcion`) VALUES
('AVD', 'Avenida'),
('CLL', 'Calle'),
('PLZ', 'Plaza'),
('PSJ', 'Pasaje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usu_id` int(11) NOT NULL,
  `usu_per_id` int(11) NOT NULL,
  `usu_dir_id` int(11) DEFAULT NULL,
  `usu_dir_id_facturacion` int(11) DEFAULT NULL,
  `usu_correo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `usu_clave` varchar(30) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`cat_id`),
  ADD KEY `fk_cat_cat_madre` (`cat_cat_id_madre`);

--
-- Indices de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  ADD PRIMARY KEY (`cus_id`),
  ADD KEY `fk_cus_usu` (`cus_usu_id`),
  ADD KEY `fk_cus_cat` (`cus_cat_id`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`dir_id`),
  ADD UNIQUE KEY `uk_dir_usu_id` (`dir_id`,`dir_usu_id`) USING BTREE,
  ADD KEY `fk_dir_usu` (`dir_usu_id`),
  ADD KEY `fk_dir_tva` (`dir_tva_cod`);

--
-- Indices de la tabla `factura_detalle`
--
ALTER TABLE `factura_detalle`
  ADD KEY `fk_fcd_fcm` (`fcd_fcm_id`);

--
-- Indices de la tabla `factura_maestro`
--
ALTER TABLE `factura_maestro`
  ADD PRIMARY KEY (`fcm_id`),
  ADD KEY `fk_fcm_usu` (`fcm_usu_id`);

--
-- Indices de la tabla `formador_usuario`
--
ALTER TABLE `formador_usuario`
  ADD PRIMARY KEY (`for_usu_id`);

--
-- Indices de la tabla `insignia`
--
ALTER TABLE `insignia`
  ADD PRIMARY KEY (`ins_sus`,`ins_usu`),
  ADD KEY `fk_ins_usu` (`ins_usu`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`per_id`),
  ADD UNIQUE KEY `uk_per_per_usu_id` (`per_id`,`per_usu_id`) USING BTREE,
  ADD KEY `fk_per_usu` (`per_usu_id`),
  ADD KEY `fk_per_tpe` (`per_tpe_cod`),
  ADD KEY `fk_per_tdc` (`per_tdc_cod`);

--
-- Indices de la tabla `super_usuario`
--
ALTER TABLE `super_usuario`
  ADD PRIMARY KEY (`sus_usu_id`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`tdc_cod`);

--
-- Indices de la tabla `tipo_persona`
--
ALTER TABLE `tipo_persona`
  ADD PRIMARY KEY (`tpe_cod`);

--
-- Indices de la tabla `tipo_via`
--
ALTER TABLE `tipo_via`
  ADD PRIMARY KEY (`tva_cod`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`),
  ADD UNIQUE KEY `uk_usu_per_id` (`usu_per_id`) USING BTREE,
  ADD UNIQUE KEY `uk_usu_dir_id` (`usu_dir_id`) USING BTREE,
  ADD KEY `fk_usu_per` (`usu_per_id`,`usu_id`),
  ADD KEY `fk_usu_dir` (`usu_dir_id`,`usu_id`),
  ADD KEY `fk_usu_dir_facturacion` (`usu_dir_id_facturacion`,`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `dir_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `factura_maestro`
--
ALTER TABLE `factura_maestro`
  MODIFY `fcm_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `per_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `fk_cat_cat_madre` FOREIGN KEY (`cat_cat_id_madre`) REFERENCES `categorias` (`cat_id`);

--
-- Filtros para la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  ADD CONSTRAINT `fk_cus_cat` FOREIGN KEY (`cus_cat_id`) REFERENCES `categorias` (`cat_id`),
  ADD CONSTRAINT `fk_cus_usu` FOREIGN KEY (`cus_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `fk_dir_tva` FOREIGN KEY (`dir_tva_cod`) REFERENCES `tipo_via` (`tva_cod`),
  ADD CONSTRAINT `fk_dir_usu` FOREIGN KEY (`dir_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `factura_detalle`
--
ALTER TABLE `factura_detalle`
  ADD CONSTRAINT `fk_fcd_fcm` FOREIGN KEY (`fcd_fcm_id`) REFERENCES `factura_maestro` (`fcm_id`);

--
-- Filtros para la tabla `factura_maestro`
--
ALTER TABLE `factura_maestro`
  ADD CONSTRAINT `fk_fcm_usu` FOREIGN KEY (`fcm_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `formador_usuario`
--
ALTER TABLE `formador_usuario`
  ADD CONSTRAINT `fk_for_usu` FOREIGN KEY (`for_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `insignia`
--
ALTER TABLE `insignia`
  ADD CONSTRAINT `fk_ins_sus` FOREIGN KEY (`ins_sus`) REFERENCES `super_usuario` (`sus_usu_id`),
  ADD CONSTRAINT `fk_ins_usu` FOREIGN KEY (`ins_usu`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `fk_per_tdc` FOREIGN KEY (`per_tdc_cod`) REFERENCES `tipo_documento` (`tdc_cod`),
  ADD CONSTRAINT `fk_per_tpe` FOREIGN KEY (`per_tpe_cod`) REFERENCES `tipo_persona` (`tpe_cod`),
  ADD CONSTRAINT `fk_per_usu` FOREIGN KEY (`per_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `super_usuario`
--
ALTER TABLE `super_usuario`
  ADD CONSTRAINT `fk_sus_usu_id` FOREIGN KEY (`sus_usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usu_dir` FOREIGN KEY (`usu_dir_id`,`usu_id`) REFERENCES `direcciones` (`dir_id`, `dir_usu_id`),
  ADD CONSTRAINT `fk_usu_dir_facturacion` FOREIGN KEY (`usu_dir_id_facturacion`,`usu_id`) REFERENCES `direcciones` (`dir_id`, `dir_usu_id`),
  ADD CONSTRAINT `fk_usu_per` FOREIGN KEY (`usu_per_id`,`usu_id`) REFERENCES `personas` (`per_id`, `per_usu_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
