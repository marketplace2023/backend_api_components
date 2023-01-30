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
* [Contacto](#item45)
  * [dto](#item46)
  * [entities](#item47)
  * [error](#item48)
  * [contacto Controller](#item49)
  * [contacto Module](#item50)
  * [contacto Service](#item51)
* [Delivery-Metodo](#item52)
  * [dto](#item53)
  * [entities](#item54)
  * [error](#item55)
  * [delivery-metodo Controller](#item56)
  * [delivery-metodo Module](#item57)
  * [delivery-metodo Service](#item58)
* [Delivery-Notas](#item59)
  * [dto](#item60)
  * [entities](#item61)
  * [error](#item62)
  * [delivery-notas Controller](#item63)
  * [delivery-notas Module](#item64)
  * [delivery-notas Service](#item65)
* [Delivery-Type-Metodo](#item66)
  * [dto](#item67)
  * [entities](#item68)
  * [error](#item69)
  * [delivery-type-metodo Controller](#item70)
  * [delivery-type-metodo Module](#item71)
  * [delivery-type-metodo Service](#item72)
* [Favorito](#item73)
  * [dto](#item74)
  * [entities](#item75)
  * [enum](#item76)
  * [error](#item77)
  * [favorito Controller](#item78)
  * [favorito Module](#item79)
  * [favorito Service](#item80)
* [Favorito-Tienda](#item81)
  * [dto](#item82)
  * [entities](#item83)
  * [favorito-tienda Controller](#item84)
  * [favorito-tienda Module](#item85)
  * [favorito-tienda Service](#item86)
* [Marca](#item87)
  * [dto](#item88)
  * [entities](#item89)
  * [error](#item90)
  * [marca Controller](#item91)
  * [marca Module](#item92)
  * [marca Service](#item93)
* [Metodo_pago](#item94)
  * [dto](#item95)
  * [entities](#item96)
  * [error](#item97)
  * [enums](#item98)
  * [metodo-pago Controller](#item99)
  * [metodo-pago Module](#item100)
  * [metodo-pago Service](#item101)
* [Notificación](#item102)
  * [dto](#item103)
  * [entities](#item104)
  * [error](#item105)
  * [enums](#item106)
  * [notificación Controller](#item107)
  * [notificación Module](#item108)
  * [notificación Service](#item109)
* [Notificación de Usuario](#item110)
  * [dto](#item111)
  * [entities](#item112)
  * [error](#item113)
  * [notificación Controller](#item114)
  * [notificación Module](#item115)
  * [notificación Service](#item116)
  
<a name="item1"></a>
## Admins
Consiste en almacenar los datos de la logica del negocio para el almacenamiento y funcionalidad del administrador de sistema.

 <dl>
  <dt name="item2">dto</dt>
  <dd>Este archivo se encarga de los datos de transferencia entre el backend del lado de administardor y el frontend donde el    administrador se encarga de realizar el manejo del sistema.</dd>
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

<a name="item17"></a>
## Ayuda
Esta carpeta es la encargada de almacenar todo lo referente al codigo y la logica de negocio del funcionamiento de la ayuda.

 <dl>
  <dt name="item18">dto</dt>
  <dd>Aqui se almacena los datos de transferencia entre el backend de lado dela logica de la ayuda y el frontend donde el    el usuario podrar visualizar la ayuda seleccionada.</dd>
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
  <dd>Este archivo se encarga de los datos de transferencia entre el backend del lado de administardor y el frontend donde el     administrador se encarga de realizar el manejo del sistema.</dd>
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
  <dd>Este archivo se encarga de los datos de transferencia entre el backend del lado de administardor y el frontend donde el     administrador se encarga de realizar el manejo del sistema.</dd>
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

<a name="item38"></a>
## Clientes-rating
Contiene los archivos que van a ejecutar los datos de las entidades de la base de datos con respeto a la tabla de datos de clientes rating.

 <dl>
  <dt name="item39">dto</dt>
  <dd>Este archivo se encarga de los datos de transferencia entre el backend del lado del cliente-rating y el frontend donde el cliente se encarga de realizar el manejo del sistema.</dd>
  <dt name="item40">entities</dt>
  <dd>Aqui podemos definir las entidades y sus tipos de datos que se maneja en la tabla relacionada.</dd>
  <dt name="item41">error</dt>
  <dd>Aqui almacenamos un archivo llamado clientes rating not found exception donde colocamos el mesaje de validación si se presenta un error.</em>.</dd>
</dl>

<a name="item42"></a>
#### Clientes-rating Controller
Se Maneja las solicitudes entrantes y de respuesta del sistema, ya que en el archivo definimos las rutas programadas para la logica de la tabla cliente rating de nuestro marketplace.

<a name="item43"></a>
#### Clientes-rating Module
Se encarga de definir los decoradores utilizados para el manejo de los datos de clientes rating de nuestro sistema de marketplace. 

<a name="item44"></a>
#### Clientes-rating Service
Manejamos la logica de negocio de clientes rating en el sistema de marketplace.

<a name="item45"></a>
## Contacto
Esta carpeta es la encargada de almacenar todo lo referente al código del funcionamiento de la logica de negocio del funcionamiento de la tabla contacto.

 <dl>
  <dt name="item46">dto</dt>
  <dd>Aqui se almacena los datos de transferencia entre el backend en el lado de la logica de contacto y el frontend donde el usuario podrar visualizar el contacto a crear y enviar.</dd>
  <dt name="item47">entities</dt>
  <dd>en la carpeta entities podemos definir las entidades colocadas en la tabla de la base de datos y el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item48">error</dt>
  <dd>Aqui almacenamos un archivo llamado contacto not found exception donde colocamos el mesaje de validacion si se presenta un error en el sistema.</em>.</dd>
</dl>

<a name="item49"></a>
#### Contacto Controller
El controlador de contacto es el encargado de la solicitudes de entrada de mensaje y respuesta obtenida en el correo electrónico.  

<a name="item50"></a>
#### Contacto Module
Manejo de los decoradores utilizados para el manejo de los datos de contacto del los usuarios creadas en el marketplace. 

<a name="item51"></a>
#### Contacto Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de contacto donde se realizo el funcionamiento de la configuración del correo donde se van a contactar al usuario.

<a name="item52"></a>
## Delivery-Metodo
En esta carpeta almacenaremos todo lo referente al delivery ya que es el que ofrece el marketplace para hacer las entregas del producto a de los clientes compran vía online en este marketplace a una empresa registrada en el sitio.

 <dl>
  <dt name="item53">dto</dt>
  <dd>En esta carpeta se encarga de los archivos de datos de transferencia entre el backend del lado del servidor de respuesta y el frontend donde se realiza la petición lo que desea el usuario, para asi la api reciba la peticion realizada y ejecuta lo solicitado.</dd>
  <dt name="item54">entities</dt>
  <dd>En esta carpeta se encarga de almacenar los datos de las entidades relacionada a la table delivery con sus respectivos tipos de datos.</dd>
  <dt name="item55">error</dt>
  <dd>En esta carpeta podemos encontrar los archivos delivery-zona y delivery-metodo donde colocamo la validación de esos dos archivos si se presenta un error efecifico en el delivery</em>.</dd>
</dl>

<a name="item56"></a>
#### Delivery-Metodo Controller
El controlador del método de delivery es el encargado de la solicitudes de entrada de mensaje y respuesta sobre el método de delivery.  

<a name="item57"></a>
#### Delivery-Metodo Module
Manejo de los decoradores utilizados para el manejo de los datos de contacto del los usuarios creadas en el marketplace. 

<a name="item58"></a>
#### Delivery-Metodo Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de contacto donde se realizo el funcionamiento de la configuración del
correo donde se van a contactar al usuario.

<a name="item59"></a>
## Delivery-Notas
En esta carpeta almacenaremos todo lo referente al delivery de notas ya que es el que ofrece el marketplace para hacer las notas de los delivery para la entrega del producto que los clientes pueden compran vía online en este marketplace a una empresa registrada en el sitio.

 <dl>
  <dt name="item60">dto</dt>
  <dd>En esta carpeta se encarga de los archivos de datos de transferencia entre el backend del lado del servidor de respuesta y el frontend donde se realiza la petición lo que desea el usuario, para asi la api reciba la peticion realizada y ejecuta lo solicitado.</dd>
  <dt name="item61">entities</dt>
  <dd>En esta carpeta se encarga de almacenar los datos de las entidades relacionada a la table delivery notas con sus respectivos tipos de datos.</dd>
  <dt name="item62">error</dt>
  <dd>En esta carpeta podemos encontrar los archivos delivery-notas donde colocamos la validación de esos archivos si se presenta un error efecifico en el delivery en la parte de las notas</em>.</dd>
</dl>

<a name="item63"></a>
#### Delivery-Notas Controller
El controlador del método de delivery de nota, es el encargado de las solicitudes de entrada del delivery donde se coloca la respuesta de la nota correspondiente a la orden de entrega del producto.  

<a name="item64"></a>
#### Delivery-Notas Module
Manejo de los decoradores utilizados para el control de los datos de la nota correspondiente a la orden de entrega con el servicio delivery del marketplace.

<a name="item65"></a>
#### Delivery-Notas Service
Manejamos la logica de negocio de delivery notas en el sistema de marketplace.

<a name="item66"></a>
## Delivery-Type-Metodo
En esta carpeta contiene todo los archivos relacionado con el tipo de método del delivery. 

 <dl>
  <dt name="item67">dto</dt>
  <dd>En esta carpeta se encarga de los archivos de datos de transferencia entre el backend del lado del servidor de respuesta y el frontend donde se realiza la petición lo que desea el usuario, para asi la api reciba la peticion realizada y ejecuta lo solicitado.</dd>
  <dt name="item68">entities</dt>
  <dd>En esta carpeta se encarga de almacenar los datos de las entidades relacionada con la tabla de tipo de métodos del delivery con sus respectivos tipos de datos.</dd>
  <dt name="item69">error</dt>
  <dd>Encotramos los archivos de validación de error por medio de mensaje en el archivo de tipo de metodos del delivery</em>.</dd>
</dl>

<a name="item70"></a>
#### Delivery-Type-Metodo Controller
El controlador del método de delivery "tipo de metodos", es el encargado de las solicitudes de entrada del delivery donde se coloca la respuesta de la nota correspondiente al delivery.  

<a name="item71"></a>
#### Delivery-Type-Metodo Module
Manejo de los decoradores utilizados para el control de los datos de delivery-type-metodo correspondiente a metodo de delivery con el servicio que tiene el marketplace.

<a name="item72"></a>
#### Delivery-Type-Metodo Service
Programamos la logica de negocio del delivery type metodo en el sistema de marketplace.

<a name="item73"></a>
## Favorito
En esta carpeta podemos almacenar los productos y tiendas favoritos que ha selecionado el usuario.
 <dl>
  <dt name="item74">dto</dt>
  <dd>En el archivo create-favorito es el encargado de los datos de transferencia de creación entre el backend y el frontend donde el usuario es el encargado de realizar el manejo del sistema. </dd>
  <dt name="item75">entities</dt>
  <dd>Aquí tenemos un .ts llamado favorito.entity encargado de almacenar los datos de las entidades relacionada a la tabla correspondiente a favorito donde se almacena lo solicitado para su petición.</dd>
  <dt name="item76">enum</dt>
  <dd>En esta carpeta podemos encontrar dos archivos "favorito-reaccion.enum.ts y favorito-type.enum.ts" uno donde almacenamos la reación entre el producto y el cliente. </dd>
  <dt name="item77">error</dt>
  <dd>n esta carpeta podemos encontrar los archivos favorito del producto donde colocamos la validación de esos archivos si se presenta que ya el producto seleccionado como favorito ya le pretenece a ese cliente en particular</em>.</dd>
</dl>

<a name="item78"></a>
#### Favorito Controller  
El controlador del método de favorito cliente es el encargado de la solicitudes de entrada y respuesta sobre el método de favorito del producto.  

<a name="item79"></a>
#### Favorito Module
Manejo de los decoradores utilizados para el control de los datos favoritos correspondiente a las productos del marketplace. 

<a name="item80"></a>
#### Favorito Service
Programamos la lógica de negocio sobre las productos favoritos en el sistema de marketplace.

<a name="item81"></a>
## Favorito Tienda
En esta carpeta del código de petición de la API y almacenamiento de datos obtenidos por el usuario. 

 <dl>
  <dt name="item82">dto</dt>
  <dd>En el archivo create-favorito-tiendas es el encargado de los datos de transferencia de creación entre el backend y el frontend donde el usuario es el encargado de realizar el manejo del sistema. </dd>
  <dt name="item83">entities</dt>
  <dd>Aquí tenemos un .ts llamado favorito-tiendas.entity encargado de almacenar los datos de las entidades relacionada a la tabla correspondiente a favorito-tienda donde se almacena lo solicitado para su petición.</dd>
</dl>

<a name="item84"></a>
#### Favorito Tienda Controller  
El controlador del método de favorito tienda es el encargado de la solicitudes de entrada y respuesta sobre el método de favorito de la tienda. 

<a name="item85"></a>
#### Favorito Tienda Module
Manejo de los decoradores utilizados para el control de los datos favoritos correspondiente a las tiendas del marketplace. 

<a name="item86"></a>
#### Favorito Tienda Service
Programamos la lógica de negocio sobre las tiendas favoritas en el sistema de marketplace.

<a name="item87"></a>
## Marca
Aquí podemos encontrar el codigo de petición de la Api para el almacenamiento de los datos de las marcas.
 <dl>
  <dt name="item88">dto</dt>
  <dd>En este archivo podemos crear un dto que por lo general lleva como extensión .dto.ts para indicar que se trata de un DTO, donde tendrán los objetos de entrada en una solicitud, de creación de un dto.</dd>
  <dt name="item26">entities</dt>
  <dd> Aquí tenemos un marca.entity.ts donde permite a los desarrolladores trabaja con datos en forma de propiedades y objetos especificos del dominio con la tabla marca y sus columnas subyacentes donde se almacenan los datos que obtenemos de la tabla marca.
 </dd>
  <dt name="item27">error</dt>
  <dd>Aqui almacenamos un archivo llamado marca not found exception donde colocamos el mesaje de validación si se presenta un error.</em>.</dd>
</dl>

<a name="item91"></a>
#### Marca Controller  
El controlador del método de favorito tienda es el encargado de la solicitudes de entrada y respuesta sobre el método de favorito de la tienda. 

<a name="item92"></a>
#### Marca Module
Manejo de los decoradores utilizados para el control de los datos favoritos correspondiente a las tiendas del marketplace. 

<a name="item93"></a>
#### Marca Service
Programamos la lógica de negocio sobre las tiendas favoritas en el sistema de marketplace.

<a name="item94"></a>
## Metodo de Pago
En esta carpeta se encarga de almacenar el código donde nos permite comprar un producto, contratar servicios o cancelar todo tipo de deudas que se realiza en el marketplace. 
 <dl>
  <dt name="item95">dto</dt>
  <dd>En este archivo podemos crear un dto que por lo general lleva como extensión un archivo .dto.ts para indicar que se trata de un DTO, donde tendrán los objetos de entrada en una solicitud, de creación de un dto.</dd>
  <dt name="item96">entities</dt>
  <dd> En esta carpeta tenemos un archivo .entity.ts donde nos permite almacenarlos datos especificos del la tabla metodo de pago.</dd>
  <dt name="item97">enums</dt>
  <dd>Aqui almacenamos un archivo llamado método de pago .enums.ts donde tenemos un codigo donde tenemos la especificación del código del metodo de pago, procesando, completado y cancelado con su respectivo código</em>.</dd>
  <dt name="item98">error</dt>
  <dd>Aqui almacenamos un archivo llamado metodo-pego not found exception donde colocamos el mesaje de error de validación si se presenta un errror.</em>.</dd>
</dl>

<a name="item99"></a>
#### Método de Pago Controller  
El controlador del método de pago es el encargado de la solicitudes de entrada y respuesta sobre el método de pago. 

<a name="item100"></a>
#### Método de Pago Module
Manejo de los decoradores utilizados para el control de los datos método de pago de una orden realizada en el marketplace. 

<a name="item101"></a>
#### Método de Pago Service
Programamos la lógica de negocio sobre los métodos de pago en el sistema de marketplace.

<a name="item102"></a>
## Notificación
En esta carpeta podemos almacenar los código correspondiente de notificación con el marketplace.
 <dl>
  <dt name="item103">dto</dt>
  <dd>En esta carpeta dto es la encargada de las entrada y salida de las notificaciones que recibe el usuario en el marketplace.</dd>
  <dt name="item104">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento notificacion.entity.ts donde nos permite almacenar  los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
  <dt name="item105">error</dt>
  <dd>En cambio en la carpeta error tenemos un archivo llamado notificación not found exception donde tenemos un constructor que valida un mensaje donde nos epecifica si existe o no la notificación.</em>.</dd>
</dl>

<a name="item106"></a>
#### Notificación Controller
Este archivo como lo especifica bien que es un controller es que es la pienza principal del marketplace, ya que básicamente nos sirven para dar soporte o respuesta a las notificaciones de entrada del usuario que se realiza al servidor para obtener la respuesta del mensaje que se recibio.

<a name="item107"></a>
#### Notificación Module
Aquí podemos almacenar los decoradores que nos sirven para agrupar elementos del marketplace.

<a name="item108"></a>
#### Notificación Service
Este archivo se encarga de la logica de negocio en la parte de la programación orientada a objetos en la parte de lo solicitud de petición del usuario al servidor.

<a name="item102"></a>
## Notificación de Usuario
En esta carpeta podemos almacenar los código correspondiente de notificación de usuario en el marketplace asi cada usuario sabe su notificación correspondiente.

 <dl>
  <dt name="item103">dto</dt>
  <dd>En esta carpeta dto es la encargada de las entrada y salida de las notificaciones de un usuario en efecifico que recibe el del marketplace.</dd>
  <dt name="item104">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento notificacion-usuario.entity.ts donde nos permite almacenar los campos con sus tipos de datos que estan definidos en la base de dato.</dd>
  <dt name="item105">error</dt>
  <dd>En cambio en la carpeta error tenemos un archivo llamado notificación not found exception donde tenemos un constructor que valida un mensaje donde nos epecifica si existe o no la notificación.</em>.</dd>
</dl>

<a name="item106"></a>
#### Notificación de Usuario Controller
Este archivo como lo especifica bien que es un controller es que es la pienza principal del marketplace, ya que básicamente nos sirven para dar soporte o respuesta a las notificaciones del usuario de un mensaje de entrada del usuario que se realiza al servidor para obtener la respuesta del mensaje que se recibio.

<a name="item107"></a>
#### Notificación de Usuario Module
Aquí podemos almacenar los decoradores que nos sirven para agrupar elementos del marketplace.

<a name="item108"></a>
#### Notificación de Usuario Service
En esta carpeta podemos almacenar los código correspondiente de notificación de usuario en el marketplace asi cada usuario sabe su notificación correspondiente.
