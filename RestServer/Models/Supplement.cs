using System.ComponentModel.DataAnnotations;

namespace RestServer.Models
{
  public class Supplement
  {
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public string Price { get; set; }
  }
}