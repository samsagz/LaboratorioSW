Fragment Usuario-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables-sql
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: 
        [ALTERCODE-FRAG]
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
        [/ALTERCODE-FRAG]
}