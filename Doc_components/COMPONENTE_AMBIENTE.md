# COMPONENTE AMBIENTE

## DESCRIPCIÓN GENERAL

| COMPONENTE AMBIENTE | DESCRIPCIÓN GENERAL |
| -- | -- |
| DESCRIPCIÓN | Este componente se encarga de controlar y administrar las variables de ambiente de la granja |
| VERSIÓN | 1.0 |
| FECHA ULTIMA MODIFICACIÓN | 17 DE OCTUBRE 2019 |
| DESARROLLADORES | German Bedoya, Ana Builes, Juan Fernando Zuluaga, Jhon Fabher Florez, Jose |
| MEJORAS | Desarrollo Inicial |
| PALABRAS CLAVES | Sensores termicos, humedad, PH, luminosidad |

## PRINCIPALES FUNCIONALIDADES

| COMPONENTE AMBIENTE | PRINCIPALES FUNCIONALIDADES |
| -- | -- |
| NOMBRE | CONTROL DE AMBIENTE |
| DESCRIPCIÓN | la Funcionalidad principal se basa en permitir tener el control de las variables de ambiente, es decir, nos permite definir las variables de ambiente iniciales para la plantación,  almacenar los datos recolectados por los sensores, comparara las variables de ambiente establecidas con las variables de ambiente recolectadas y me permite controlar las variables de ambiente  |
| ENTRADAS | En construcción |
| SALIDAS | En construcción |

## IMPLEMENTACIÓN

| COMPONENTE AMBIENTE | IMPLEMENTACIÓN |
| -- | -- |
| LENGUAJE | .NET, C# |
| BASE DE DATOS | SQL SERVER EXPRESS |

## FILES

| COMPONENTE AMBIENTE | TipoVariableAmbienteView |
| -- | -- |
| IDENTIFICACIÓN | TipoVariableAmbienteView |
| TIPO | ZIP |
| LENGUAJE | Html - CSS |
| DESCRIPCIÓN | Contiene todas las vistas (CRUD) necesarias para la tabla TipoVariableAmbiente |

| COMPONENTE AMBIENTE | TipoVariableAmbientesController |
| -- | -- |
| IDENTIFICACIÓN | TipoVariableAmbientesController |
| TIPO | CS |
| LENGUAJE | C# |
| DESCRIPCIÓN | Este file es el controlador de la tabla TipoVariableAmbiente |

| COMPONENTE AMBIENTE | VariableControlView |
| -- | -- |
| IDENTIFICACIÓN | VariableControlView |
| TIPO | ZIP |
| LENGUAJE | Html - CSS |
| DESCRIPCIÓN | Contiene todas las vistas (CRUD) necesarias para la tabla VariableControl |

| COMPONENTE AMBIENTE | VariableControlController |
| -- | -- |
| IDENTIFICACIÓN | VariableControlController |
| TIPO | CS |
| LENGUAJE | C# |
| DESCRIPCIÓN | Controlador de la tabla variableControl |

| COMPONENTE AMBIENTE | VariableAmbienteController |
| -- | -- |
| IDENTIFICACIÓN | VariableAmbienteController |
| TIPO | CS |
| LENGUAJE | C# |
| DESCRIPCIÓN | Controlador de la tabla VariableAmbiente |


| COMPONENTE AMBIENTE | VariableAmbienteView |
| -- | -- |
| IDENTIFICACIÓN | VariableAmbienteView |
| TIPO | ZIP |
| LENGUAJE | Html - CSS |
| DESCRIPCIÓN | Contiene las vistas (CRUD) necesarias para la tabla VariableAmbiente |


## FRAGMENTOS

| COMPONENTE AMBIENTE | VariableAmbienteView |
| -- | -- |
| ControlAmbiente-alterDataBase | Este fragmento se utiliza para organizar la base de datos, con el objetivo de tener un control de ambiente, es decir tener un control oportuno de los sensores.|
| ControlAmbiente-alterCsproj | Este fragmento se utiliza para visualizar en la solución los controller, las vistas y los modelos de Control Ambiente |
| ControlAmbiente-SharedView | Este fragmento se encarga de agregar las vistas o la vista necesaria para el control de ambiente |
| ControlAmbiente-ModelContext | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |
| ControlAmbiente-Edmx | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |
| ControlAmbiente-Diagram | Este fragmento se encarga de incluir en la solución (o en el modelo de la base de datos) el control de las tablas |


