using System.ComponentModel.DataAnnotations;

namespace KanbanApi.Models
{
    public class Column
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public int ProjectId { get; set; }
        public Project? Project { get; set; }
        public ICollection<Task>? Tasks { get; set; } = new List<Task>();
    }
}
