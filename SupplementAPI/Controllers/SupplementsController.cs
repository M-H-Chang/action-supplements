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
      _db.Supplements.Add(supplement);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(SupplementWithId), new { id = supplement.Id }, supplement);
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Supplement s)
    {
      if (id != s.Id) return BadRequest();
      _db.Entry(s).State = EntityState.Modified;

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SupplementExists(id)) return NotFound();
        else throw;
      }
      return NoContent();
    }
    [HttpDelete("supplement/{id}")]
    public async Task<IActionResult> DeleteSupplement(int id)
    {
      if (await SupplementWithId(id) is not Supplement s) return NotFound();
      _db.Supplements.Remove(s);
      await _db.SaveChangesAsync();
      return NoContent();
    }
  }
}