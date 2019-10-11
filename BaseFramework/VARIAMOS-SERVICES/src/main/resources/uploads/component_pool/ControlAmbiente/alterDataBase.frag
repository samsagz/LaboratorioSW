Fragment ControlAmbiente-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: [ALTERCODE-FRAG]
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
        [/ALTERCODE-FRAG]
}