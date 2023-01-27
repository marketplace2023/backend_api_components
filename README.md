<a name="top"></a>
# 🚀 Marketplace_API_Componentes 

Aqui se encuentran el listado de los componentes de la API usados en la aplicacion Marketplace

![]()

## Índice de contenidos de la API del Marketplace
[backend](#item0)
Listado de Componentes de la API

* [Admins](#item1)
  * [dto](#item2)
  * [entities](#item3)
  * [error](#item4)
  * [admins Controller](#item5)
  * [admins Module](#item6)
  * [admins Service](#item7)
* [Auth](#item8)
  * [decorators](#item9)
  * [dto](#item10)
  * [error](#item11)
  * [guards](#item12)
  * [passport-strategies](#item13)
  * [auth Controller](#item14)
  * [auth Module](#item15)
  * [auth Service](#item16)
* [Ayuda](#item17)
  * [dto](#item18)
  * [entities](#item19)
  * [error](#item20)
  * [ayuda Controller](#item21)
  * [ayuda Module](#item22)
  * [ayuda Service](#item23)
* [Categories](#item24)
  * [dto](#item25)
  * [entities](#item26)
  * [error](#item27)
  * [categories Controller](#item28)
  * [categories Module](#item29)
  * [categories Service](#item30)
* [Clientes](#item31)
  * [dto](#item32)
  * [entities](#item33)
  * [error](#item34)
  * [clientes Controller](#item35)
  * [clientes Module](#item36)
  * [clientes Service](#item37)
* [Clientes-rating](#item38)
  * [dto](#item39)
  * [entities](#item40)
  * [error](#item41)
  * [clientes-rating Controller](#item42)
  * [clientes-rating Module](#item43)
  * [clientes-rating Service](#item44)
  
<a name="item1"></a>
## Admins
Consiste en almacenar los datos de la logica del negocio para el almacenamiento y funcionalidad del administrador de sistema.

 <dl>
  <dt name="item2">dto</dt>
  <dd>Este archivo se encarga de los datos de traferencia entre el backend del lado de administardor y el frontend donde el    administrador se encarga de realizar el manejo del sistema.</dd>
  <dt name="item3">entities</dt>
  <dd>Aqui podemos definir el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item4">error</dt>
  <dd>Aqui almacenamos un archivo llamado admins not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item5"></a>
#### Admins Controller
Este archivo es el encargado de manejar las solicitudes entrantes y devuelve las respuesta adecuada, ya que en el archivo definimos las rutas programadas.

<a name="item6"></a>
#### Admins Module
Definimos los decoradores utilizados para el manejo de los datos del administrador. 

<a name="item7"></a>
#### Admins Service
Manejamos la logica del funcionamiento del administrador en nuestro sistema.

<a name="item8"></a>
## Auth
Esta carpeta es la encargada de almacenar todo lo relacionado a la autenticación y autorización de los datos de "usuario-cliente-administardor"

 <dl>
  <dt name="item9">decorator</dt>
  <dd>En esta carpeta tenemos un archivo llamado roles, es el encargado del metadata del archivo.</dd>
  <dt name="item10">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend del login, registro de administrador de la parte de la autenticación y autorización de ingreso del marketplace.</dd>
  <dt name="item11">error</dt>
  <dd>Aqui almacenamos un archivo llamado "invalidar credenciales exception" donde colocamos el mensaje de validación, si el sistema presenta un error.</dd>
  <dt name="item12">guards</dt>
  <dd>Almacenamos los archivos que nos permite guardar y verificar la verificación de autenticación de los roles del usuario que se esten registrando en el sistema del marketplace.</dd>
  <dt name="item13">passport-strategies</dt>
  <dd>Aqui en el archivo de local strategy validamos el role del usuario si esta inactive, banned o si el usuario no existe.</em>.</dd>
</dl>

<a name="item14"></a>
#### Auth Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos las rutas para las solicitudes de todo lo relacionado con la parte logis de usuario y registro del marketplace.

<a name="item15"></a>
#### Auth Module
Manejo de los decoradores y la parte de la autenticación de usuario, clientes, tienda y admis del marketplace utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de las tablas anteriormente mencionadas. 

<a name="item16"></a>
#### Auth Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación y autenticación de usuario.

<a name="item15"></a>
## Ayuda
Esta carpeta es la encargada de almacenar todo lo referente al codigo y la logica de negocio del funcionamiento de la ayuda.

 <dl>
  <dt name="item18">dto</dt>
  <dd>Aqui se almacena los datos de traferencia entre el backend de lado dela logica de la ayuda y el frontend donde el    el usuario podrar visualizar la ayuda seleccionada.</dd>
  <dt name="item19">entities</dt>
  <dd>Aqui podemos definir el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item20">error</dt>
  <dd>Aqui almacenamos un archivo llamado admins not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item21"></a>
#### Ayuda Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos las rutas para las solicitudes de todo lo relacionado con programas de ayuda.

<a name="item22"></a>
#### Ayuda Module
Manejo de los decoradores utilizados para el manejo de los datos de las ayudas creadas en el marketplace. 

<a name="item23"></a>
#### Ayuda Service
Aquí en este archivo se maneja la logica del funcionamiento de de negocio de la ayuda.

<a name="item24"></a>
## Categories
Contiene los archivos que van a ejecutar los datos de las entidades de la base de datos.

 <dl>
  <dt name="item25">dto</dt>
  <dd>Este archivo se encarga de los datos de traferencia entre el backend del lado de administardor y el frontend donde el     administrador se encarga de realizar el manejo del sistema.</dd>
  <dt name="item26">entities</dt>
  <dd>Aqui podemos definir el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item27">error</dt>
  <dd>Aqui almacenamos un archivo llamado admins not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item28"></a>
#### Categories Controller
Aquí nos encargamos de manejar las solicitudes entrantes y respuesta del sistema, ya que en el archivo definimos las rutas programadas.

<a name="item29"></a>
#### Categories Module
Se encarga de definir los decoradores utilizados para el manejo de los datos de categoria. 

<a name="item30"></a>
#### Categories Service
Manejamos la logica de negocio del categoria en nuestro sistema.

<a name="item31"></a>
## Clientes
Contiene los archivos que van a ejecutar los datos de las entidades de la base de datos.

 <dl>
  <dt name="item32">dto</dt>
  <dd>Este archivo se encarga de los datos de traferencia entre el backend del lado de administardor y el frontend donde el     administrador se encarga de realizar el manejo del sistema.</dd>
  <dt name="item33">entities</dt>
  <dd>Aqui podemos definir las entidades y sus tipos de datos que se maneja en la tabla relacionada.</dd>
  <dt name="item34">error</dt>
  <dd>Aqui almacenamos un archivo llamado clientes not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item35"></a>
#### Clientes Controller
Maneja las solicitudes entrantes y de respuesta del sistema, ya que en el archivo definimos las rutas programadas para la logica de la tabla cliente.

<a name="item36"></a>
#### Clientes Module
Se encarga de definir los decoradores utilizados para el manejo de los datos de clientes. 

<a name="item37"></a>
#### Clientes Service
Manejamos la logica de negocio de clientes en el sistema de marketplace.
