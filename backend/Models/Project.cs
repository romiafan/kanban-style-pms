using System.ComponentModel.DataAnnotations;

namespace KanbanApi.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public ICollection<Column>? Columns { get; set; } = new List<Column>();
        public ICollection<User>? Users { get; set; } = new List<User>();
    }
}
