<?php
//  Unas cuantas cabeceras para que te permita extraer datos desde otro lugar y te mantenga la autenticación
@header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN'] );
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-Type: application/json; charset=utf-8');
//  Aqui ponés tu autenticación o tu comprobacion de permisos del usuario
if ( true ) {
  try
  {
    $db_conn = new PDO( "mysql:hostname=localhost;dbname=tu_base;charset=utf8", "tu_usuario", "tu_password" );
    $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db_conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    //  La información que se va a insertar en la base de datos enviada por JSON
    $data = json_decode($_GET['data'] | '', true);
    //  Aqui revisas tus campos 'obligatorios' yo solo pongo el «nombre»
    if( !empty($data['nombre']) ) {
      //  Si el id es mayor a 0, quiere decir que estamos actualizando, por lo tanto
      //  la query cambia
      if( $data['id'] > 0) {
        //  Ponemos todos tus campos con su respectivo wildcard (:wildcard)
        $query = "UPDATE FROM tu_tabla SET " .
            "nombre = :nombre, " .
            "apellido = :apellido, " .
            "edad = :edad, " .
            "img = :img, " .
            "email = :email, ".
          "WHERE id = :id";
        //  Ponemos solo el nombre del campo como parametro
        $params = [
          'id' => $data['id'],
          'nombre' => $data['nombre'],
          'apellido' => $data['apellido'],
          'edad' => $data['edad'],
          'img' => $data['img'],
          'password' => $data['password'],
          'email' => $data['email']
        ];
        //  Preparo
        $q = $db_conn->prepare($query);
        //  Ejecuto y compruebo que todo salga bien...
        if ( $q->execute($params) ) {
          //  Matamos y devolvemos el status en JSON
          die(
            json_encode(
              [
              'status' => 'ok',
              'message' => 'Actualización correcta',
              'id' => $data['id']
              ]
            )
          );
        }
        //  Si no nos fue bien
        else {
          //  Matamos y devolvemos el status en JSON
          die( json_encode([
            'status' => 'error',
            'message' => 'No se pudo actualizar el registro'
          ]) );
        }
      }
      //  En caso de que el id sea cualquier otra cosa NO mayor que 0 (linea 30)
      else {
        //  Mi query cambia a INSERT
        //  Solo pongo los campos, ignoro el id
        $query = 'INSERT INTO tu_tabla
            (rut, nombre, apellido, img, fechanacimiento, edad, relacion, gustos)
          VALUES
            (:rut, :nombre, :apellido, :img, :fechanacimiento, :edad, :relacion, :gustos)';
        //  En los params tambien ignoro «id» porque asumo que el id se genera automaticamente con autoincrement
        $params = [
          'id' => $data['id'],
          'nombre' => $data['nombre'],
          'apellido' => $data['apellido'],
          'edad' => $data['edad'],
          'img' => $data['img'],
          'password' => $data['password'],
          'email' => $data['email']
        ];
        //  Preparo
        $q = $db_conn->prepare($query);
        //  Ejecuto y compruebo que todo salga bien...
        if ( $q->execute($params) ) {
          //  Sacamos el Id mas reciente (el que acabamos de insertar... si es que tenemos autoincrement en el campo id)
          $q = $db_conn->prepare("SELECT id FROM tu_tabla ORDER BY id DESC LIMIT 1");
          $q->execute();
          //  Sacamos el id de nuestros datos
          $new_id = $q->fetchAll( PDO::FETCH_ASSOC )[0]['id'];
          //  Matamos y devolvemos el status en JSON
          die(
            json_encode(
              [
              'status' => 'ok',
              'message' => 'Inserción correcta',
              'id' => $new_id
              ]
            )
          );
        }
        else {
          //  Matamos y devolvemos el status en JSON
          die( json_encode([
            'status' => 'error',
            'message' => 'No se pudo actualizar el registro'
          ]) );
        }
      }
    }
    //  Si no vienen los campos requeridos (linea 26)
    die( json_encode([
      'status' => 'error',
      'message' => 'El faltan algunos datos requeridos'
    ]) );
  }
  catch (Exception $x)
  {
    die("Err: No se ha podido conectar a la base de datos.");
  }
}