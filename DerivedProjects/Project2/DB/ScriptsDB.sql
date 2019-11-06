USE [master]
GO
/****** Object:  Database [AgroApp]    Script Date: 6/10/2019 10:26:05 a.m. ******/
CREATE DATABASE [AgroApp]
ALTER DATABASE [AgroApp] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AgroApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AgroApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AgroApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AgroApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AgroApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AgroApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [AgroApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AgroApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AgroApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AgroApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AgroApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AgroApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AgroApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AgroApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AgroApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AgroApp] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AgroApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AgroApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AgroApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AgroApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AgroApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AgroApp] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AgroApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AgroApp] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AgroApp] SET  MULTI_USER 
GO
ALTER DATABASE [AgroApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AgroApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AgroApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AgroApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AgroApp] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [AgroApp] SET QUERY_STORE = OFF
GO
USE [AgroApp]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [AgroApp]
GO
/****** Object:  Table [dbo].[Modulo]    Script Date: 6/10/2019 10:26:05 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Modulo](
	[ModuloId] [int] IDENTITY(1,1) NOT NULL,
	[PlantaId] [int] NULL,
	[NumeroPlantas] [int] NULL,
	[FechaSiembra] [datetime2](0) NULL,
	[VariablesAmbienteId] [int] NULL,
	[FechaEstimadaCosecha] [datetime2](0) NULL,
	[FechaRealCosecha] [datetime2](0) NULL,
 CONSTRAINT [PK_Modulo] PRIMARY KEY CLUSTERED 
(
	[ModuloId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Planta]    Script Date: 6/10/2019 10:26:06 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Planta](
	[PlantaId] [int] IDENTITY(1,1) NOT NULL,
	[NombrePlanta] [nvarchar](50) NOT NULL,
	[SemanasCosecha] [smallint] NOT NULL,
 CONSTRAINT [PK_Planta] PRIMARY KEY CLUSTERED 
(
	[PlantaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/*B-tables-sql*/

/*Code injected by: Usuario-AlterDataBase*/
/****** Object:  Table [dbo].[Usuario]    Script Date: 6/10/2019 10:26:06 a.m. ******/
        SET ANSI_NULLS ON
        GO
        SET QUOTED_IDENTIFIER ON
        GO
        CREATE TABLE [dbo].[Usuario](
            [UsuarioId] [int] IDENTITY(1,1) NOT NULL,
            [Nombre] [nvarchar](50) NOT NULL,
            [Apellido] [nvarchar](50) NOT NULL,
            [Cedula] [nvarchar](50) NOT NULL,
            [NombreUsuario] [nvarchar](50) NOT NULL,
            [Permiso] [nvarchar](50) NOT NULL,
            [Clave] [nvarchar](50) NOT NULL,
        CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
        (
            [UsuarioId] ASC
        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
        ) ON [PRIMARY]
        GO
/*Code injected by: Usuario-AlterDataBase*/


/*Code injected by: ControlAmbiente-AlterDataBase*/
/****** Object:  Table [dbo].[TipoVariableAmbiente]    Script Date: 6/10/2019 10:26:06 a.m. ******/
            SET ANSI_NULLS ON
            GO
            SET QUOTED_IDENTIFIER ON
            GO
            CREATE TABLE [dbo].[TipoVariableAmbiente](
                [TipoVariableAmbienteId] [int] NOT NULL,
                [NombreTipoVariableAmbiente] [nvarchar](50) NOT NULL,
            CONSTRAINT [PK_TipoVariableAmbiente] PRIMARY KEY CLUSTERED 
            (
                [TipoVariableAmbienteId] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
            ) ON [PRIMARY]
            GO
            /****** Object:  Table [dbo].[VariableAmbiente]    Script Date: 6/10/2019 10:26:06 a.m. ******/
            SET ANSI_NULLS ON
            GO
            SET QUOTED_IDENTIFIER ON
            GO
            CREATE TABLE [dbo].[VariableAmbiente](
                [VariableAmbienteId] [int] IDENTITY(1,1) NOT NULL,
                [ModuloId] [int] NOT NULL,
                [TipoVariableAmbienteId] [int] NOT NULL,
                [Valor] [float] NOT NULL,
                [TimeTag] [datetime2](7) NOT NULL,
            CONSTRAINT [PK_VariableAmbiente] PRIMARY KEY CLUSTERED 
            (
                [VariableAmbienteId] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
            ) ON [PRIMARY]
            /****** Object:  Table [dbo].[VariablesControl]    Script Date: 6/10/2019 10:26:06 a.m. ******/
            SET ANSI_NULLS ON
            GO
            SET QUOTED_IDENTIFIER ON
            GO
            CREATE TABLE [dbo].[VariablesControl](
                [VariableControlId] [int] IDENTITY(1,1) NOT NULL,
                [PlantaId] [int] NOT NULL,
                [TipoVariableAmbienteId] [int] NOT NULL,
                [VariableControl] [float] NOT NULL,
            CONSTRAINT [PK_VariablesControl] PRIMARY KEY CLUSTERED 
            (
                [VariableControlId] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
            ) ON [PRIMARY]

            GO
            ALTER TABLE [dbo].[VariableAmbiente] ADD  CONSTRAINT [DF_VariableAmbiente_TimeTag]  DEFAULT (getdate()) FOR [TimeTag]
            GO
            ALTER TABLE [dbo].[VariableAmbiente]  WITH CHECK ADD  CONSTRAINT [FK_VariableAmbiente_Modulo] FOREIGN KEY([ModuloId])
            REFERENCES [dbo].[Modulo] ([ModuloId])
            GO
            ALTER TABLE [dbo].[VariableAmbiente] CHECK CONSTRAINT [FK_VariableAmbiente_Modulo]
            GO
            ALTER TABLE [dbo].[VariableAmbiente]  WITH CHECK ADD  CONSTRAINT [FK_VariableAmbiente_TipoVariableAmbiente] FOREIGN KEY([TipoVariableAmbienteId])
            REFERENCES [dbo].[TipoVariableAmbiente] ([TipoVariableAmbienteId])
            GO
            ALTER TABLE [dbo].[VariableAmbiente] CHECK CONSTRAINT [FK_VariableAmbiente_TipoVariableAmbiente]
            GO
            ALTER TABLE [dbo].[VariablesControl]  WITH CHECK ADD  CONSTRAINT [FK_VariablesControl_Planta] FOREIGN KEY([PlantaId])
            REFERENCES [dbo].[Planta] ([PlantaId])
            GO
            ALTER TABLE [dbo].[VariablesControl] CHECK CONSTRAINT [FK_VariablesControl_Planta]
            GO
            ALTER TABLE [dbo].[VariablesControl]  WITH CHECK ADD  CONSTRAINT [FK_VariablesControl_TipoVariableAmbiente] FOREIGN KEY([TipoVariableAmbienteId])
            REFERENCES [dbo].[TipoVariableAmbiente] ([TipoVariableAmbienteId])
            GO
            ALTER TABLE [dbo].[VariablesControl] CHECK CONSTRAINT [FK_VariablesControl_TipoVariableAmbiente]
            GO
/*Code injected by: ControlAmbiente-AlterDataBase*/


ALTER TABLE [dbo].[Modulo]  WITH CHECK ADD  CONSTRAINT [FK_Modulo_Planta] FOREIGN KEY([PlantaId])
REFERENCES [dbo].[Planta] ([PlantaId])
GO
ALTER TABLE [dbo].[Modulo] CHECK CONSTRAINT [FK_Modulo_Planta]
GO
USE [master]
GO
ALTER DATABASE [AgroApp] SET  READ_WRITE 
GO