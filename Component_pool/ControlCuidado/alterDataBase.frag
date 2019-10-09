Fragment ControlCuidado-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables-sql
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: 
        [ALTERCODE-FRAG]
        /****** Object:  Table [dbo].[TipoVariableCuidado]    Script Date: 6/10/2019 10:26:06 a.m. ******/
        SET ANSI_NULLS ON
        GO
        SET QUOTED_IDENTIFIER ON
        GO
        CREATE TABLE [dbo].[TipoVariableCuidado](
            [TipoVariableCuidadoId] [int] IDENTITY(1,1) NOT NULL,
            [NombreTipoVariableCuidado] [nvarchar](50) NOT NULL,
        CONSTRAINT [PK_TipoVariableCuidado] PRIMARY KEY CLUSTERED 
        (
            [TipoVariableCuidadoId] ASC
        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
        ) ON [PRIMARY]
        GO

        /****** Object:  Table [dbo].[VariableCuidado]    Script Date: 6/10/2019 10:26:06 a.m. ******/
        SET ANSI_NULLS ON
        GO
        SET QUOTED_IDENTIFIER ON
        GO
        CREATE TABLE [dbo].[VariableCuidado](
            [VariablesCuidadoId] [int] IDENTITY(1,1) NOT NULL,
            [TipoVariableCuidadoId] [int] NOT NULL,
            [ValorCuidado] [float] NOT NULL,
            [PlantaId] [int] NOT NULL,
        CONSTRAINT [PK_VariableCuidado] PRIMARY KEY CLUSTERED 
        (
            [VariablesCuidadoId] ASC
        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
        ) ON [PRIMARY]
        GO
        ALTER TABLE [dbo].[VariableCuidado]  WITH CHECK ADD  CONSTRAINT [FK_VariableCuidado_Planta] FOREIGN KEY([PlantaId])
        REFERENCES [dbo].[Planta] ([PlantaId])
        GO
        ALTER TABLE [dbo].[VariableCuidado] CHECK CONSTRAINT [FK_VariableCuidado_Planta]
        GO
        ALTER TABLE [dbo].[VariableCuidado]  WITH CHECK ADD  CONSTRAINT [FK_VariableCuidado_TipoVariableCuidado] FOREIGN KEY([TipoVariableCuidadoId])
        REFERENCES [dbo].[TipoVariableCuidado] ([TipoVariableCuidadoId])
        GO
        ALTER TABLE [dbo].[VariableCuidado] CHECK CONSTRAINT [FK_VariableCuidado_TipoVariableCuidado]
        GO
        [/ALTERCODE-FRAG]
}