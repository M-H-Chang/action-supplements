using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestServer.Models;

namespace RestServer.AddControllers
{
  [Route("api/")]
  [ApiController]

  public class SupplementsControlleer : ControllerBase
  {
    private readonly RestServerContext _db;

    public SupplementsControlleer(RestServerContext db)
    {
      _db = db;
    }

    private async Task<Supplement> SupplementWithId(int id) => await _db.Supplements.FindAsync(id);

    [HttpGet("supplements/")]
    public async Task<ActionResult<IEnumerable<Supplement>>> GetAllSupplements() => await _db.Supplements.ToListAsync();

    [HttpGet("supplements/{id}")]
    public async Task<ActionResult<Supplement>> GetSupplement(int id) => await SupplementWithId(id);

    [HttpPost("supplements/")]
    public async Task<ActionResult<Supplement>> PostSupplement(Supplement supplement)
    {
      _db.Supplements.Add()
    }
  }
}