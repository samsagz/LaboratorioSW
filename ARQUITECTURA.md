# Visión general de la Arquitectura : Modelo vista controlador
La arquitectura seleccionada para la realización de la aplicación e interacción web es el estilo arquitectural de 
**Cliente/Servidor** relacionado con conceptos de **N-layer**¸ con el fin de ser más descriptivos al momento de detallar 
cada uno de los diferentes elementos y tecnologías que están adecuados a la arquitectura propuesta.

![Arquitectura propuesta](https://eafitrequisitos.s3.us-east-2.amazonaws.com/arquitectura_propuesta.png)

## Capa de Presentación - Cliente Web

La capa de presentación definida para la presente arquitectura es la encargada de mostrar la información al usuario y cliente 
final e interpretar las diferentes acciones realizadas por estos. Se evidencian vistas y controladores necesarios 
para implementar el desarrollo “frontend”.

### Componentes visuales (Vistas IU)
Estos componentes son los que ofrecen un mecanismo para que los usuarios utilicen la aplicación. Por lo tanto, son los 
diferentes componentes que se encargan de dar formato a los datos en cuanto al diseño, tipos de letras, efectos y controles 
visuales con el fin de facilitar la obtención de datos que son proporcionados por el usuario.

### Controladores)
Sirven para ayudar a sincronizar las interacciones del usuario, 
son especificados ya que es útil conducir el proceso utilizando componentes separados de los componentes gráficos. 
(Esto impide que el flujo de proceso y lógica de gestión de estados esté programada dentro de los propios controles y 
formularios visuales y permite reutilizar dicha lógica y patrones desde otras interfaces o vistas ). 
Los controladores son típicos de los patrones MVC que se relacionan con las tecnologías seleccionadas 
para el desarrollo de la aplicación.

## Capa lógica del Negocio:

Encargada de representar las reglas de negocio, es decir, en ella encontramos toda la lógica de programación necesaria 
para poder realizar los diferentes procesos ofrecidos por el servicio web, además se encarga de garantizar 
la persistencia de datos y lógicamente poder acceder a ellos.Esta capa encontramos clases, modelos y entidades 
en que implementan la lógica de negocio. 

### Entidades del dominio
Son clases que se utilizan para obtener y transferir datos de entidades entre diferentes capas, se tiene en cuenta en ellas 
realizar procesos de validación de datos y la relación con otras sub-entidades. Estos datos representan al fin y al cabo 
entidades del negocio.

### Repositorios
Representan todos los objetos de un cierto tipo común de un conjunto conceptual. En general un repositorio será una clase 
encargada de realizar las operaciones de persistencia y acceso a datos, estando ligado a una tecnología concreta. 
Estos deben facilitar al desarrollador el mantenerse centrado en la lógica del negocio y poder controlar la manipulación de 
datos.

### Servicios del dominio
Son aquellas clases agrupadoras de comportamientos o métodos que se encargan de ejecutar la lógica del dominio o lógica 
del negocio. En esta interactúan varias entidades del dominio y con el servicio prestado poder llevar a cabo las diferentes 
tareas que se realizan en la aplicación y sirven para realizar el procesamiento de datos y manipular la información.

### Modelo de Datos
En este apartado se aplica los procesos definidos en el modelo entidad-relación para aplicar la lógica 
del negocio que se llevará a cabo en la aplicación.

## Capa de infraestructura

Capa transversal que da soporte a la capa de presentación y lógica de datos, está definida por una tecnología concreta para 
desempeñar de forma idónea sus tareas, teniendo en cuenta el repositorio donde se va a alojar la solución y procesos de 
integración continua en la medida de lo posible. 
Los diferentes tipos/aspectos horizontales más comunes, son: Seguridad (Autenticación, Autorización y Validación) y tareas de 
gestión de operaciones (políticas, logging,  monitorización, configuración,). Esta capa engloba en gran parte aspectos que 
tienen que ver con la calidad del servicio. 

