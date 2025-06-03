SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
-- Ingreso de zona horaria para posible deploy ---
SET time_zone = "-05:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- reconoce si la base de datos existe para eliminarla y ejecutarla de nuevo --
drop database if exists huellas_y_yo;
-- crea la base de datos --
create database huellas_y_yo
CHARACTER SET utf8mb4
COLLATE utf8mb4_spanish_ci;

-- indicamos que se debe usar la base de datos anteriormente creada --
use huellas_y_yo;



create table usuario(
	id_usuario int primary key auto_increment,
	tipo_usuario varchar(20) not null,
	nombre_completo varchar(100) not null,
	telefono varchar(11) not null,
    contrasena VARCHAR(255) not null,
	fecha_nacimiento date,
	correo varchar(100) not null unique,
	url_imagen_usuario text not null,
    estado boolean not null default true
) ENGINE=InnoDB;

create table mascota(
	 id_mascota int primary key auto_increment,
	 nombre varchar(20) not null,
	 especie enum('Gato','Perro') not null,
	 sexo enum('Macho','Hembra','Cualquiera de los dos') not null,
	 caracter varchar(60) not null,
	 edad varchar(2) not null,
	 tamanno enum('Pequeño','Mediano','Grande') not null,
	 raza varchar(100) not null,
	 url_imagen_mascota text not null,
	 disponibilidad boolean not null default true,
	 otras_caracteristicas json not null
) ENGINE=InnoDB;

create table convivencia_preferencia(
	id_convivencia_preferencia int auto_increment primary key,
	experiencia varchar(50) not null,
	dedicacion_tiempo enum('Una hora','Mas de una hora') not null,
	compatibilidad_con_otras_mascotas enum('Sí','No') not null,
	compatibilidad_con_ninos enum('Sí','No') not null,
    tipo_vivienda enum('Casa','Apartamento','Finca') not null,
    adiestramiento_ofrecido enum('Principiante','Intermedio','Avanzado') not null,
    viajes_en_auto enum('Sí','No') not null,
    fk_id_usuario int not null unique,
    foreign key (fk_id_usuario) references usuario(id_usuario)
) ENGINE=InnoDB;

create table mascota_preferencia(
	id_mascota_preferencia int auto_increment primary key,
    caracter_preferencia varchar(60) not null,
    sexo_preferencia enum('Macho','Hembra','Cualquiera') not null,
    especie_buscada enum('Gato','Perro','Cualquiera de los dos') not null,
    tamanno_preferencia enum('Pequeño','Mediano','Grande') not null,
    edad_preferencia varchar(50) not null,
    fk_id_usuario int not null unique,
    foreign key (fk_id_usuario) references usuario(id_usuario)
) ENGINE=InnoDB;

create table realiza_match (
  id_realiza_match int NOT NULL AUTO_INCREMENT primary key,
  porcentaje_afinidad decimal(5,2) not null,
  match_mascota boolean default null,
  fk_id_usuario int not null,
  fk_id_mascota int not null,
  foreign key (fk_id_usuario) references usuario(id_usuario),
  foreign key (fk_id_mascota) references mascota(id_mascota)
) ENGINE=InnoDB;

create table procesos_adopcion (
  id_procesos_adopcion int AUTO_INCREMENT primary key,
  estado enum('Seleccionado','Iniciado','Visitas','Aprobado','Rechazado') default 'Seleccionado',
  observaciones text,
  fecha_actualizacion datetime not null default current_timestamp,
  url_form_adopcion text,
  url_certificado_de_ingresos text,
  url_cedula text,
  url_video text,
  fk_id_usuario int not null,
  fk_id_mascota int not null,
  foreign key (fk_id_usuario) references usuario(id_usuario),
  foreign key (fk_id_mascota) references mascota(id_mascota)
) ENGINE=InnoDB;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


