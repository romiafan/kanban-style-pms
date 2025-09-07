using System.ComponentModel.DataAnnotations;

namespace KanbanApi.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int ColumnId { get; set; }
        public Column? Column { get; set; }
        public int? AssignedUserId { get; set; }
        public User? AssignedUser { get; set; }
    }
}
