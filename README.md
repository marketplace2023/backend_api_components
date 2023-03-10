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
* [Delivery Método](#item52)
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
* [Delivery Type Método](#item66)
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
* [Método_pago](#item94)
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
* [Ordenes](#item117)
  * [dto](#item118)
  * [entities](#item119)
  * [error](#item120)
  * [ordenes Controller](#item121)
  * [ordenes Module](#item122)
  * [ordenes Service](#item123)
* [Ordenes Status](#item124)
  * [dto](#item125)
  * [entities](#item126)
  * [error](#item127)
  * [ordenes status Controller](#item128)
  * [ordenes status Module](#item129)
  * [ordenes status Service](#item130)
* [Producto](#item131)
  * [dto](#item132)
  * [entities](#item133)
  * [error](#item134)
  * [producto Controller](#item135)
  * [producto Module](#item136)
  * [producto Service](#item137)
* [Producto Categoria](#item138)
  * [dto](#item139)
  * [entities](#item140)
  * [error](#item141)
  * [producto-rating Controller](#item142)
  * [producto-rating Module](#item143)
  * [producto-rating Service](#item144)
* [Producto Rating](#item145)
  * [dto](#item146)
  * [entities](#item147)
  * [error](#item148)
  * [producto-rating Controller](#item149)
  * [producto-rating Module](#item150)
  * [producto-rating Service](#item151)
* [Publicidad](#item152)
  * [dto](#item153)
  * [entities](#item154)
  * [error](#item155)
  * [publicidad Controller](#item156)
  * [publicidad Module](#item157)
  * [publicidad Service](#item158)
* [Soporte](#item159)
  * [paginacion](#item160)
  * [pipes](#item161)
  * [file-uploads](#item162)
  * [soporte Module](#item163)
* [Tienda](#item164)
  * [dto](#item165)
  * [entities](#item166)
  * [error](#item167)
  * [tienda Controller](#item168)
  * [tienda Module](#item169)
  * [tienda Service](#item170)  
* [Tienda Rating](#item171)
  * [dto](#item172)
  * [entities](#item173)
  * [error](#item174)
  * [tienda-rating Controller](#item175)
  * [tienda-rating Module](#item176)
  * [tienda-rating Service](#item177) 
* [Topico](#item178)
  * [dto](#item179)
  * [entities](#item180)
  * [error](#item181)
  * [topico Controller](#item182)
  * [topico Module](#item183)
  * [topico Service](#item184) 
* [Usuario](#item185)
  * [dto](#item186)
  * [entities](#item187)
  * [enums](#item188)
  * [error](#item189)
  * [usuario Controller](#item190)
  * [usuario Module](#item191)
  * [usuario Service](#item192) 
* [Usuario Status](#item193)
  * [dto](#item194)
  * [entities](#item195)
  * [error](#item196)
  * [usuario-status Controller](#item197)
  * [usuario-status Module](#item198)
  * [usuario-status Service](#item199)
* [Validación](#item200)
* [APP Controller Spec](#item201)
* [APP Controller](#item202)
* [APP Modulo](#item203)
* [APP Service](#item204)
* [Main.ts](#item205)

  
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
 <dt name="item105">enum</dt>
  <dd>En esta carpeta podemos encontrar un archivos "notificacion.enum.ts uno donde almacenamos la reación entre mensaje de usuario.</dd>
  <dt name="item106">error</dt>
  <dd>En cambio en la carpeta error tenemos un archivo llamado notificación not found exception donde tenemos un constructor que valida un mensaje donde nos epecifica si existe o no la notificación.</em>.</dd>
</dl>

<a name="item107"></a>
#### Notificación Controller
Este archivo como lo especifica bien que es un controller es que es la pienza principal del marketplace, ya que básicamente nos sirven para dar soporte o respuesta a las notificaciones de entrada del usuario que se realiza al servidor para obtener la respuesta del mensaje que se recibio.

<a name="item108"></a>
#### Notificación Module
Aquí podemos almacenar los decoradores que nos sirven para agrupar elementos del marketplace.

<a name="item109"></a>
#### Notificación Service
Este archivo se encarga de la logica de negocio en la parte de la programación orientada a objetos en la parte de lo solicitud de petición del usuario al servidor.

<a name="item110"></a>
## Notificación de Usuario
En esta carpeta podemos almacenar los código correspondiente de notificación de usuario en el marketplace asi cada usuario sabe su notificación correspondiente.

 <dl>
  <dt name="item111">dto</dt>
  <dd>En esta carpeta dto es la encargada de las entrada y salida de las notificaciones de un usuario en efecifico que recibe el del marketplace.</dd>
  <dt name="item112">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento notificacion-usuario.entity.ts donde nos permite almacenar los campos con sus tipos de datos que estan definidos en la base de dato.</dd>
  <dt name="item113">error</dt>
  <dd>En cambio en la carpeta error tenemos un archivo llamado notificación not found exception donde tenemos un constructor que valida un mensaje donde nos epecifica si existe o no la notificación.</em>.</dd>
</dl>

<a name="item114"></a>
#### Notificación de Usuario Controller
Este archivo como lo especifica bien que es un controller es que es la pienza principal del marketplace, ya que básicamente nos sirven para dar soporte o respuesta a las notificaciones del usuario de un mensaje de entrada del usuario que se realiza al servidor para obtener la respuesta del mensaje que se recibio.

<a name="item115"></a>
#### Notificación de Usuario Module
Aquí podemos almacenar los decoradores que nos sirven para agrupar elementos del marketplace.

<a name="item116"></a>
#### Notificación de Usuario Service
En esta carpeta podemos almacenar los código correspondiente de notificación de usuario en el marketplace asi cada usuario sabe su notificación correspondiente.

<a name="item117"></a>
## Ordenes
Esta carpeta es la encargada de almacenar todo lo relacionado con ordenes que realice el usuario en el marketplace.

 <dl>
  <dt name="item118">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend de una orden realizada, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item119">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento ordenes.entity.ts donde nos permite almacenar los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
 <dt name="item120">error</dt>
  <dd>Aqui almacenamos dos archivo llamado "ordenes itms not found exception y ordenes not found exception" donde colocamos el mensaje de validación, si el sistema presenta un error en la parte de ordenes y cada fila de la ordenes.</em>.</dd>
</dl>

<a name="item121"></a>
#### Ordenes Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte de una orden de compra de un usuario del marketplace.

<a name="item122"></a>
#### Ordenes Module
Manejo de los decoradores de una orden en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de las tablas ordenes y ordenes-status. 

<a name="item123"></a>
#### Ordenes Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación de la orden de compra de usuario en el marketplace.

<a name="item124"></a>
## Ordenes Status
Esta carpeta es la encargada de almacenar todo lo relacionado con la fila de una orden realizada por el usuario en el marketplace.

 <dl>
  <dt name="item1245">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend de una fila de una orden realizada, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item126">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento llamado ordenes-status.entity.ts donde nos permite almacenar los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
 <dt name="item127">error</dt>
  <dd>Aqui almacenamos un archivo llamado "ordenes-status not found exception" donde colocamos el mensaje de validación, si el sistema presenta un error en la parte de ordenes realizada por el usuario para cada fila de las ordenes.</em>.</dd>
</dl>

<a name="item128"></a>
#### Ordenes Status Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte de un status de una orden de compra de un usuario del marketplace.

<a name="item129"></a>
#### Ordenes Status Module
Manejo de los decoradores del status de una orden en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de las tablas ordenes y ordenes-status. 

<a name="item130"></a>
#### Ordenes Status Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación del items de la orden de compra de usuario en el marketplace.

<a name="item131"></a>
## Producto
Esta carpeta es la encargada de almacenar todo los productos registrado en la tiendas del marketplace por el mismo proveedor.

 <dl>
  <dt name="item132">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend de una fila de una orden realizada, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item133">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento llamado ordenes-status.entity.ts donde nos permite almacenar los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
 <dt name="item134">error</dt>
  <dd>Aqui almacenamos dos archivo llamado "productos not found exception" donde colocamos el mensaje de validación, si el sistema presenta un error en la parte del producto</em>.</dd>
</dl>

<a name="item135"></a>
#### Producto Controller
El controlador del método de producto, es el encargado de la solicitudes de entrada y respuesta sobre el producto creado en el marketplace.

<a name="item136"></a>
#### Producto Module
Manejo de los decoradores de una lista de productos en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla producto. 

<a name="item137"></a>
#### Producto Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación del items de la orden de compra de usuario en el marketplace.

<a name="item138"></a>
## Producto Categoria
Esta carpeta es la encargada de almacenar todo lo relacionado a la tabla pivote producto-categoria de las tablas prodcutos y categorias del marketplace.

 <dl>
  <dt name="item139">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend de los productos registrado, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item140">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento llamado producto.entity.ts donde nos permite almacenar los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
 <dt name="item141">error</dt>
  <dd>Aqui almacenamos dos archivo llamado "productos not found exception" donde colocamos el mensaje de validación, si el sistema presenta un error en la parte del producto</em>.</dd>
</dl>

<a name="item142"></a>
#### Producto Controller
El controlador del método de producto, es el encargado de la solicitudes de entrada y respuesta sobre el producto creado en el marketplace.

<a name="item143"></a>
#### Producto Module
Manejo de los decoradores de una lista de productos en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla producto. 

<a name="item144"></a>
#### Producto Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación del items de la orden de compra de usuario en el marketplace.

<a name="item145"></a>
## Producto Rating
Esta carpeta es la encargada de almacenar todo lo relacionado con el producto registrado en el marketplace en esta oportunidad es el producto rating que es la valoración del producto.

 <dl>
  <dt name="item146">dto</dt>
  <dd>En esta carpeta donde podemos almacenar la trasferencia de datos entre la parte del backend de los productos registrado, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item147">entities</dt>
  <dd>Aquí en esta carperta tenemos un documento llamado producto-rating.entity.ts donde nos permite almacenar los campos con sus tipo de datos que estan definidos en la base de dato.</dd>
 <dt name="item148">error</dt>
  <dd>Aqui almacenamos dos archivo llamado "productos not found exception" donde colocamos el mensaje de validación, si el sistema presenta un error en la parte del producto</em>.</dd>
</dl>

<a name="item149"></a>
#### Producto Rating Controller
El controlador del método de producto rating, es el encargado de la solicitudes de entrada y respuesta sobre el producto creado  para su valoración en el marketplace.

<a name="item150"></a>
#### Producto Rating Module
aquí en este documento manejamos los decoradores de una lista de productos en el marketplace donde se almacena la valoración de producto, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla producto rating. 

<a name="item151"></a>
#### Producto Rating Service
Aquí en este archivo se maneja la logica del funcionamiento de negocio de la verificación si el producto ya se valoro "rating".

<a name="item152"></a>
## Publicidad
En esta carpeta nos encargamos de almacenar los datos de la programación orientada a objeto con la publicidad que tendrá el marketplace.

 <dl>
  <dt name="item153">dto</dt>
  <dd>Almacenamos los achivos de datos de transferencia entre la parte del backend del contenido de publicidad, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item154">entities</dt>
  <dd>En esta carpeta tenemos un archivo con extensión .entity.ts donde se tiene la entidad relacionada con el tipo de dato de cada campo que esta en la entidades de  la tabla de la base de datos de publicidad.</dd>
 <dt name="item155">error</dt>
  <dd>En esta carpeta obtenemos un archivo not fount exception es para las validaciones de error si la publicidad fue creado o no en el marketplace</em>.</dd>
</dl>

<a name="item156"></a>
#### Publicidad Controller
El controlador del método de producto, es el encargado de la solicitudes de entrada y respuesta sobre el producto creado en el marketplace.

<a name="item157"></a>
#### Publicidad Module
En esta carpeta se maneja los decoradores de las publicidades en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de las tablas publicidad. 

<a name="item158"></a>
#### Publicidad Service
En esta carpeta podemos almacenar los código correspondiente de la publicidad del marketplace para el frontend.

<a name="item159"></a>
## Soporte
En esta carpeta es la base fundamental de sustento a mantener unas cosas programada en el marketplace donde tenemos dos carpetas llamada paginación, pipes, archivo File Uploads y soporte Module de nuestro marketplace.

 <dl>
  <dt name="item160">paginación</dt>
  <dd>Aquí tenemos tres archivos, uno llamado paginación opcion, paginación pipes y aginación result. En el archivo paginación opción es el encargado de la parte del perPage, offset y el fromQueryObjeto de nuestro marketplace y el archivo paginación pipes es el encargado del pies de paginación y tambien tenemos por ultimo el archivo paginación de resultado.
  <dt name="item161">pipes</dt>
  <dd>Aquí se encarga de almacenar el archivo plain instance pipe .ts donde se encarga de la tranformación de @Injectable de la clases del marketplace.
</dl>

<a name="item162"></a>
#### File Uploads
En este archivo es el encargado de la imagenes de nuestro marketplace ya que para manejar la carga de archivos, nest proporciona un Módulo integrado basado en el paquete de middleware multer para Express.

Multer maneja los datos publicados en el multipart/form-dataformato, que se usa principalmente para cargar archivos a través de una POSTsolicitud HTTP. Este módulo es totalmente configurable y puede ajustar su comportamiento a los requisitos de su aplicación.

<a name="item163"></a>
#### Soporte Module
En este archivo es la clases de programación orientada a objetos, que se observará en el module de usuario, clientes y admins recedida de un decorador @module, que es el que hace que la clase creada se comporte como un módulo de aplicaciones del marketplace.

<a name="item164"></a>
## Tienda
En esta carpeta vamos a ejecutar y almacenar los datos correspondiente de las tienda cargada y registrada en el sistema de marketplace.
 <dl>
  <dt name="item165">dto</dt>
  <dd>En esta carpeta donde podemos almacenar la trasferencia de datos entre la parte del backend de las tiendas registrada, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item166">entities</dt>
  <dd>En esta carpeta tenemos un archivo con extensión .entity.ts donde se tiene la entidad relacionada con el tipo de dato de cada campo que esta en la entidades de la tabla de la base de datos de tiendas.</dd>
 <dt name="item167">error</dt>
  <dd>En esta carpeta obtenemos un archivo tienda not fount exception es para las validaciones de error si la tienda fue creado o no en el marketplace, quiere decir si existe o no</em>.</dd>
</dl>

<a name="item168"></a>
#### Tienda Controller
El controlador del método de tienda, es el encargado de la solicitudes de entrada y respuesta sobre las tiendas creadas en el marketplace.

<a name="item169"></a>
#### Tienda Module
Aquí en este documento manejamos los decoradores de una lista de productos en el marketplace donde se almacena la tienda, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla tienda del marketplace.  

<a name="item170"></a>
#### Tienda Service
En esta carpeta se maneja la lógica del funcionamiento de negocio de la verificación de la tienda regustrada en el marketplace.

<a name="item171"></a>
## Tienda Rating
En esta carpeta vamos a ejecutar y almacenar los datos correspondiente de las tienda rating "valoración de la tienda" encargada y registrada en el sistema de marketplace.

 <dl>
  <dt name="item172">dto</dt>
  <dd>En esta carpeta donde podemos almacenar la trasferencia de datos entre la parte del backend de las tienda rating registrada, para ontener la respuesta frontend en el marketplace.</dd>
  <dt name="item173">entities</dt>
  <dd>En esta carpeta tenemos un archivo con extensión .entity.ts donde se tiene la entidad relacionada con el tipo de dato de cada campo que esta en la entidades de la tabla de la base de datos de tiendas rating.</dd>
 <dt name="item174">error</dt>
  <dd>En esta carpeta obtenemos un archivo tienda rating not fount exception es para las validaciones de error si la tienda fue creado o no en el marketplace, quiere decir si existe o no</em>.</dd>
</dl>

<a name="item175"></a>
#### Tienda Rating Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte de la tienda en el marketplace.

<a name="item176"></a>
#### Tienda Rating Module
Aquí en este documento manejamos los decoradores de una lista de productos en el marketplace donde se almacena la valoración de producto, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla producto rating. 

<a name="item177"></a>
#### Tienda Rating Service
En esta carpeta se maneja la lógica del funcionamiento de negocio de la verificación de la tienda regustrada en el marketplace.

<a name="item178"></a>
## Tópico
En esta carpeta podemos almacenar todo lo relacionado con con tópico donde se relaciona un poco con la ayuda de nuestro marketplace.
 <dl>
  <dt name="item179">dto</dt>
  <dd>En esta carpeta tenemos un archivo con extensión .dto.ts donde se encarga de almacenar los datos de las entidades relacionada con la tabla tópico relacionada con la ayuda de la transferencia de datos del marketplace.</dd>
  <dt name="item180">entities</dt>
  <dd>Aqui es esta carpeta se encarga de guardar el tipo de recurso de campos con sus tipo de datos con el cual se esta trabajando en el marketplace.</dd>
 <dt name="item181">error</dt>
  <dd>Aquí guardaremos en el archivo tópico not found exception que es el archivo encargado de mostrar un mensaje de validación si el tópico existe o no en el marketplace</em>.</dd>
</dl>

<a name="item182"></a>
#### Tópico Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte del tópico con la ayuda del marketplace.

<a name="item183"></a>
#### Tópico Module
Manejo de los decoradores de una lista de tópico en el marketplace, utilizado el manejo de los datos (JWT) que significa JSON Web Token, que se encarga de la verificación TOKE de la tabla tópico relacionada con la ayuda. 

<a name="item184"></a>
#### Tópico Service
Aquí en este archivo se maneja la lógica del funcionamiento de negocio de la verificación de las ayudas que tenga relación con el tópico seleccionado.

<a name="item185"></a>
## Usuario
En esta carpeta es la encargada de almacenar todos los archivos relacionado con usuario en el marketplace, ya que usuario es uno de los pilares más importantes en los sistemas en los que es requerido un modelo de usuarios, ya que la tabla usuario esta ligada al modulo de usuarios a las acciones de registro, login y aquellas otras tablas relacionada con esta.

La tabla de usuarios es uno de los pilares mas importantes en los sistemas en los que es requerido un modulo de usuarios, esta tabla de usuarios esta ligada al modulo de usuarios, a las acciones de registro, login y aquellas otras tablas relacionadas.
 <dl>
  <dt name="item186">dto</dt>
  <dd>En esta carpeta tenemos un archivo llamado con la extensión .dto.ts donde se encarga de almacenar la transferencia de datos de entrada de usuario y en el frontend la visualización de esos datos solicitado en la petición en el marketplace.</dd>
  <dt name="item187">entities</dt>
  <dd>Aquí en esta carpeta se encarga de guardar el tipo de recurso con el cual se esta trabajando en el marketplace, que se asociará directamente con una tabla de una base de datos llamada usuario.</dd>
 <dt name="item188">enums</dt>
  <dd>En esta carpeta tenemos dos archivos uno llamado role.enum.ts que es el encargado de la especificación de los roles en nuestro marketplace "cliente, admin y tienda", también tenemos un archivo llamado user-status-code.enum.ts que se encarga de especificar el estatus del usuario que son: "active, inactive y banned para los usuarios en el marketplace.</dd>
 <dt name="item189">error</dt>
  <dd>Aquí guardaremos en el archivo usuario not found exception que es el archivo encargado de mostrar un mensaje de validación si el usuario existe o no en el marketplace</em>.</dd>
</dl>

<a name="item190"></a>
#### Usuario Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte del usuario del marketplace.

<a name="item191"></a>
#### Usuario Module
Este archivo es la clases de programación orientada a objetos, que se observará en el module de usuario precedida de un decorador @module, que es el que hace que la clase creada se comporte como un módulo de aplicaciones del marketplace.

<a name="item192"></a>
#### Usuario Service
En este archivo se encarga de la lógica de negocio relacionada con la tabla de usuario, básicamente este decorador pérmite que este servicio se pueda enviar al constructor de los controladores que ofrece NestJS para el servicio de usuario en el marketplace.

<a name="item193"></a>
## Usuario Status
En este marketplace tenemos una carpeta llamada usuario status y a su vez una tabla para almacenar el estatus que esta definido en los controladores se se encuentra en la tabla usuario para verificar si el usuario esta o no activo en el marketplace.

 <dl>
  <dt name="item194">dto</dt>
  <dd>En esta carpeta tenemos un archivo llamado con la extensión .dto.ts donde se encarga de almacenar la transferencia de datos de entrada del estado del usuario y en el frontend la visualización de esos datos solicitado en la petición en el marketplace. </dd>
  <dt name="item195">entities</dt>
  <dd>En esta carpeta es la encargada de almacenar los campos definidos con su tipo de datos relacionado en ese archivo .entity.ts </dd>
 <dt name="item196">error</dt>
  <dd>Aquí es esta carpeta tenemos el archivo de validacion de error si el estatus existe o no en el usuario</em>.</dd>
</dl>

<a name="item197"></a>
#### Usuario Status Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos los campos para las solicitudes de todo lo relacionado con la parte del estatus de usuario del marketplace.

<a name="item198"></a>
#### Usuario Status Module
Este archivo es la clases de programación orientada a objetos, que se observará en el module del estatus de usuario precedida de un decorador @module, que es el que hace que la clase creada se comporte como un módulo de aplicaciones del marketplace.

<a name="item199"></a>
#### Usuario Status Service
En este archivo se encarga de la lógica de negocio relacionada con la tabla de usuario status, básicamente este decorador pérmite que este servicio se pueda enviar al constructor de los controladores que ofrece NestJS para el servicio de usuario en el marketplace.

<a name="item200"></a>
## Validación
En esta carpeta se guarda la parte de la autenticación del sistema. JWT son las siglas de JSON Web Tokens. Básicamente, estos tokens son emitidos por el servidor después de la autenticación del usuario y pueden ser utilizados para otras solicitudes siempre que el token sea válido.

El uso de JWT efectivamente puede hacer que nuestras aplicaciones sean apátridas desde el punto de vista de la autenticación.
Vamos a utilizar la autenticación JWT de NestJS utilizando la estrategia local como base para esta aplicación. Así que voy a recomendar a ir a través de ese post y luego continuar con este.

<a name="item201"></a>
## APP Controller Spec
Aqui en Controller de aplicación es un parecido de Esa, de momento, es la única ruta que se podrá atender en nuestra aplicación.
Otra cosa que vamos a destacar sobre este controlador es que usa un servicio llamado AppService. Este servicio está en otro archivo aparte que vamos a ver enseguida. Pero antes de ello queremos ver cómo este servicio es asociado al controlador.

<a name="item202"></a>
## APP Controller
Este es nuestro primer controlador de aplicación. Como quizás sepas de otros frameworks, los controladores son las piezas de software que se encargan de gestionar las solicitudes, realizando todo el trabajo necesario para gestionar el request y componer la respuesta.

Como puedes ver, el controlador es una clase, en la que colocamos el decorador @Controller. En el código de la clase observarás que tenemos un método, precedido de otro decorador @Get, que es el que se encarga de gestionar una solicitud (request de tipo GET). Esa, de momento, es la única ruta que se podrá atender en nuestra aplicación.

Otra cosa que vamos a destacar sobre este controlador es que usa un servicio llamado AppService. Este servicio está en otro archivo aparte que vamos a ver enseguida. Pero antes de ello queremos ver cómo este servicio es asociado al controlador.

<a name="item203"></a>
## APP Module
Es una clase, de Programación orientada a objetos, que observarás que no tiene ningún código en especial. Sin embargo está precedida de un decorador @module, que es el que hace que esta clase se comporte como un módulo de aplicación.
 
<a name="item204"></a>
## APP Service
Este es el servicio que usaba el controlador. El servicio nuevamente es una clase, aunque en este caso el concepto de servicio está un poco infrautilizado, ya que tiene un simple método que devuelve una cadena.

Lo interesante de este servicio es que está decorado con @injectable(). Básicamente este decorador permite que este servicio se pueda enviar al constructor de los controladores, mediante la inyección de dependencias que nos ofrece NestJS.

<a name="item205"></a>
## Main.ts
Este es el archivo que realiza el arranque de la aplicación. Todo comienza en el main.ts.

Contiene la importación del core de NestJS y el módulo principal de la aplicación (app.module). Luego realiza el propio arranque de la aplicación con la función bootstrap().

