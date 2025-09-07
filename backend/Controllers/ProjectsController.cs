using Microsoft.AspNetCore.Mvc;
using KanbanApi.Models;
using KanbanApi;
using Microsoft.EntityFrameworkCore;

namespace KanbanApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly KanbanDbContext _context;

        public ProjectsController(KanbanDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        // Add more CRUD endpoints as needed
    }
}
