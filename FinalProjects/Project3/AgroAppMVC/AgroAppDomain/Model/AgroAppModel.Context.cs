//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AgroAppDomain.Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class AgroAppDbEntities : DbContext
    {
        public AgroAppDbEntities()
            : base("name=AgroAppDbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Modulo> Modulo { get; set; }
        public virtual DbSet<Planta> Planta { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        /*B-model-context*/

/*Code injected by: ControlCuidado-ModelContext*/
public virtual DbSet<TipoVariableCuidado> TipoVariableCuidado { get; set; }
        public virtual DbSet<VariableCuidado> VariableCuidado { get; set; }
/*Code injected by: ControlCuidado-ModelContext*/


/*Code injected by: ControlAmbiente-ModelContext*/
public virtual DbSet<TipoVariableAmbiente> TipoVariableAmbiente { get; set; }
        public virtual DbSet<VariableAmbiente> VariableAmbiente { get; set; }
        public virtual DbSet<VariablesControl> VariablesControl { get; set; }
/*Code injected by: ControlAmbiente-ModelContext*/


    }
}
