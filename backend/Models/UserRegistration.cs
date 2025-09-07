using System.ComponentModel.DataAnnotations;

namespace KanbanApi.Models
{
    public class UserRegistration
    {
        [Required] public string Username { get; set; } = string.Empty;
        [Required] public string Password { get; set; } = string.Empty;
    }
}