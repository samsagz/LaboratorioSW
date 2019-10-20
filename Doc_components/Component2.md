# COMPONENTE CUIDADO

## DESCRIPCIÓN GENERAL

| COMPONENTE CUIDADO | DESCRIPCIÓN GENERAL |
| -- | -- |
| DESCRIPCIÓN | Este componente se encarga de controlar y administrar las variables de cuidado de los cultivos de la granja |
| VERSIÓN | 1.0 |
| FECHA ULTIMA MODIFICACIÓN | 17 DE OCTUBRE 2019 |
| DESARROLLADORES | German Bedoya, Ana Builes, Juan Fernando Zuluaga, Jhon Fabher Florez, Jose |
| MEJORAS | Desarrollo Inicial |
| PALABRAS CLAVES | Nutrientes, abono |

## PRINCIPALES FUNCIONALIDADES

| COMPONENTE CUIDADO | PRINCIPALES FUNCIONALIDADES |
| -- | -- |
| NOMBRE | CONTROL DE CUIDADO |
| DESCRIPCIÓN | Su principal funcionalidad se basa en permitir tener el control de las variables de cuidado de las plantaciones, es decir, me permite definir las variables de cuidado iniciales para cada plantación,  almacenar los datos ingresados y recolectados, validar las cantidades de los nutrientes por plantación, gestionar las variables de cuidado y controlar dichas variables |
| ENTRADAS | En construcción |
| SALIDAS | En construcción |

## IMPLEMENTACIÓN

| COMPONENTE CUIDADO | IMPLEMENTACIÓN |
| -- | -- |
| LENGUAJE | .NET, C# |
| BASE DE DATOS | SQL SERVER EXPRESS |

## FILES

| COMPONENTE AMBIENTE | TipoVariableCuidadoView |
| -- | -- |
| IDENTIFICACIÓN | TipoVariableCuidadoView |
| TIPO | ZIP |
| LENGUAJE | Html - CSS |
| DESCRIPCIÓN | Contiene todas las vistas (CRUD) necesarias para la tabla TipoVariableCuidado |

| COMPONENTE AMBIENTE | TipoVariableCuidadoController |
| -- | -- |
| IDENTIFICACIÓN | TipoVariableCuidadoController |
| TIPO | CS |
| LENGUAJE | C# |
| DESCRIPCIÓN | Este file es el controlador de la tabla TipoVariableCuidado |

| COMPONENTE AMBIENTE | VariableCuidadoView |
| -- | -- |
| IDENTIFICACIÓN | VariableCuidadoView |
| TIPO | ZIP |
| LENGUAJE | Html - CSS |
| DESCRIPCIÓN | Contiene todas las vistas (CRUD) necesarias para la tabla VariableCuidado |

| COMPONENTE AMBIENTE | VariableCuidadoController |
| -- | -- |
| IDENTIFICACIÓN | VariableCuidadoController |
| TIPO | CS |
| LENGUAJE | C# |
| DESCRIPCIÓN | Controlador de la tabla VariableCuidado |

## FRAGMENTOS

| COMPONENTE AMBIENTE | VariableAmbienteView |
| -- | -- |
| ControlCuidado-alterDataBase | Este Fragmento se encarga de crear y organizar las tablas necesarias para tener un control de los cuidados de los cultivos (papa, zanahoria y algodón).|
| ControlCuidado-alterCsproj | Este Fragmento encarga de que se pueda visualizar en la solución los controller, las vistas y los modelos de Control Cuidado |
| ControlCuidado-SharedView | Este fragmento se encarga de agregar las vistas o la vista necesaria para el control de ambiente |
| ControlCuidado-ModelContext | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |
| ControlCuidado-Edmx | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |
| ControlCuidado-Diagram | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |






