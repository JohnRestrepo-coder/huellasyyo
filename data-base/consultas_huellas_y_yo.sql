
-- consultas 

SELECT * 
FROM mascota 
WHERE disponibilidad = true;


SELECT m.*, rm.porcentaje_afinidad
FROM realiza_match rm
JOIN mascota m ON rm.fk_id_mascota = m.id_mascota
WHERE rm.fk_id_usuario = 1 AND rm.porcentaje_afinidad > 70;

SELECT pa.*, m.nombre AS nombre_mascota
FROM procesos_adopcion pa
JOIN mascota m ON pa.fk_id_mascota = m.id_mascota
WHERE pa.fk_id_usuario = 1;

SELECT m.*, rm.porcentaje_afinidad
FROM realiza_match rm
JOIN mascota m ON rm.fk_id_mascota = m.id_mascota
WHERE rm.fk_id_usuario = 1 AND rm.match_mascota = true;

SELECT id_usuario, nombre_completo, correo, telefono, fecha_nacimiento, url_imagen_usuario
FROM usuario
WHERE id_usuario = 1;

SELECT *
FROM convivencia_preferencia
WHERE fk_id_usuario = 1;

SELECT *
FROM mascota_preferencia
WHERE fk_id_usuario = 1;

SELECT *
FROM mascota;

SELECT 
  nombre, 
  url_imagen_mascota, 
  disponibilidad 
FROM mascota;

SELECT 
  m.nombre AS nombre_mascota,
  u.nombre_completo AS nombre_usuario,
  pa.estado,
  pa.fecha_actualizacion
FROM procesos_adopcion pa
JOIN usuario u ON pa.fk_id_usuario = u.id_usuario
JOIN mascota m ON pa.fk_id_mascota = m.id_mascota
WHERE pa.estado IN ('Seleccionado', 'Iniciado', 'Visitas');

SELECT 
    id_usuario,
    nombre_completo,
    correo,
    telefono,
    fecha_nacimiento,
    tipo_usuario,
    estado
FROM
    usuario;



