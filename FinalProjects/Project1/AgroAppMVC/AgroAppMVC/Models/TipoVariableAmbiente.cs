//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AgroAppMVC.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TipoVariableAmbiente
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TipoVariableAmbiente()
        {
            this.VariableAmbiente = new HashSet<VariableAmbiente>();
            this.VariablesControl = new HashSet<VariablesControl>();
        }
    
        public int TipoVariableAmbienteId { get; set; }
        public string NombreTipoVariableAmbiente { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VariableAmbiente> VariableAmbiente { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VariablesControl> VariablesControl { get; set; }
    }
}
