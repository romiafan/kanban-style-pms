using System.ComponentModel.DataAnnotations;

namespace KanbanApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; } = string.Empty;
        [Required]
        public string PasswordHash { get; set; } = string.Empty;
        public ICollection<Project>? Projects { get; set; } = new List<Project>();
        public ICollection<Task>? Tasks { get; set; } = new List<Task>();
    }
}
