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
* [Ayuda](#item8)
  * [dto](#item9)
  * [entities](#item10)
  * [error](#item11)
  * [ayuda Controller](#item12)
  * [ayuda Module](#item13)
  * [ayuda Service](#item14)
* [Categories](#item15)
  * [dto](#item16)
  * [entities](#item17)
  * [error](#item18)
  * [categories Controller](#item19)
  * [categories Module](#item20)
  * [categories Service](#item21)
  
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
## Ayuda
Esta carpeta es la encargada de almacenar todo lo referente al codigo y la logica de negocio del funcionamiento de la ayuda.

 <dl>
  <dt name="item9">dto</dt>
  <dd>Aqui se almacena los datos de traferencia entre el backend de lado dela logica de la ayuda y el frontend donde el    el usuario podrar visualizar la ayuda seleccionada.</dd>
  <dt name="item10">entities</dt>
  <dd>Aqui podemos definir el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item11">error</dt>
  <dd>Aqui almacenamos un archivo llamado admins not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item12"></a>
#### Ayuda Controller
Este controlador es el encargado de manejar las solicitudes entrantes donde devuelve las respuesta adecuada, ya que en el archivo definimos las rutas para las solicitudes de todo lo relacionado con programas de ayuda.

<a name="item13"></a>
#### Ayuda Module
Manejo de los decoradores utilizados para el manejo de los datos de las ayudas creadas en el marketplace. 

<a name="item14"></a>
#### Ayuda Service
Aquí en este archivo se maneja la logica del funcionamiento de de negocio de la ayuda.

<a name="item15"></a>
## Categories
Contiene los archivos que van a ejecutar los datos de las entidades de la base de datos.

 <dl>
  <dt name="item16">dto</dt>
  <dd>Este archivo se encarga de los datos de traferencia entre el backend del lado de administardor y el frontend donde el     administrador se encarga de realizar el manejo del sistema.</dd>
  <dt name="item17">entities</dt>
  <dd>Aqui podemos definir el tipo de recurso que se maneja en la tabla relacionada.</dd>
  <dt name="item18">error</dt>
  <dd>Aqui almacenamos un archivo llamado admins not found exception donde colocamos el mesaje de validacion si se presenta un error.</em>.</dd>
</dl>

<a name="item19"></a>
#### Categories Controller
Aquí nos encargamos de manejar las solicitudes entrantes y respuesta del sistema, ya que en el archivo definimos las rutas programadas.

<a name="item20"></a>
#### Categories Module
Se encarga de definir los decoradores utilizados para el manejo de los datos de categoria. 

<a name="item21"></a>
#### Categories Service
Manejamos la logica de negocio del categoria en nuestro sistema.
