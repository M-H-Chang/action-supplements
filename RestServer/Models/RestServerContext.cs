using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RestServer.Models
{
  public class RestServerContext : IdentityDbContext<ApplicationUser>
  {
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<Supplement>()
      .HasData(
        new Supplement { Id = 1, Name = "Ghost Protein", Description = "26 Serving Sizes", Price = "$39.99", Type = "Protein" },
        new Supplement { Id = 2, Name = "GNC AMP Wheybolic Protein", Description = "25 Serving Sizes", Price = "$64.99", Type = "Protein" },
        new Supplement { Id = 3, Name = "Optimum Protein", Description = "80 Serving Sizes", Price = "$59.99", Type = "Protein" },
        new Supplement { Id = 4, Name = "Dymatize ISO Protein", Description = "24 Serving Sizes", Price = "$29.99", Type = "Protein" },
        new Supplement { Id = 5, Name = "GNC AMP Pure Isolate Protein", Description = "28 Serving Sizes", Price = "$34.99", Type = "Protein" },
        new Supplement { Id = 6, Name = "GNC AMP Wheybolic™ Ripped Performance Protein ", Description = "22 Serving Sizes", Price = "$69.99", Type = "Protein" },
        new Supplement { Id = 7, Name = "Jym® Pro Jym Ultra-Premium Protein Powder Blend", Description = "49 Serving Sizes", Price = "$59.99", Type = "Protein" },
        new Supplement { Id = 8, Name = "Alani Nu Whey Protein", Description = "30 Serving Sizes", Price = "$44.99", Type = "Protein" },
        new Supplement { Id = 9, Name = "GNC AMP Sustained Protein Blend", Description = "28 Serving Sizes", Price = "$39.99", Type = "Protein" },
        new Supplement { Id = 10, Name = "Isopure® Zero Carb Protein Powder", Description = "44 Serving Sizes", Price = "$44.99", Type = "Protein" },
        new Supplement { Id = 11, Name = "GNC AMP Wheybolic™ Alpha with MyoTOR®", Description = "22 Serving Sizes", Price = "$69.99", Type = "Protein" },
        new Supplement { Id = 12, Name = "Jym® Iso Jym Whey Protein Isolate", Description = "20 Serving Sizes", Price = "$32.99", Type = "Protein" },
        new Supplement { Id = 13, Name = "Musclegen Performance Nutrition Genepro® Next Generation Protein - Flavorless", Description = "30 Serving Sizes", Price = "$37.99", Type = "Protein" },
        new Supplement { Id = 14, Name = "GNC AMP Wheybolic™ - Classic Vanilla", Description = "10 Serving Sizes", Price = "$34.99", Type = "Protein" },
        new Supplement { Id = 15, Name = "Pro Supps® Whey Isolate Protein", Description = "23 Serving Sizes", Price = "$29.99", Type = "Protein" },
        new Supplement { Id = 16, Name = "Isopure® Low Carb Protein Powder", Description = "15 Serving Sizes", Price = "$19.99", Type = "Protein" },
        new Supplement { Id = 17, Name = "Isopure® With Coffee - Espresso", Description = "21 Serving Sizes", Price = "$39.99", Type = "Protein" },
        new Supplement { Id = 18, Name = "GNC AMP Wheybolic™ Ripped - Strawberries and Cream", Description = "9 Serving Sizes", Price = "$38.99", Type = "Protein" },
        new Supplement { Id = 19, Name = "STI G6 Sports Prolific Isolate", Description = "40 Serving Sizes", Price = "$69.99", Type = "Protein" },
        new Supplement { Id = 20, Name = "GNC AMP Wheybolic™ Alpha Protein + Test & Power", Description = "9 Serving Sizes", Price = "$38.99", Type = "Protein" },
        new Supplement { Id = 21, Name = "Women's Best™ Fit Pro Whey Protein", Description = "33 Serving Sizes", Price = "$39.99", Type = "Protein" },
        new Supplement { Id = 22, Name = "GNC Pro Performance® 100% Whey Protein", Description = "26 Serving Sizes", Price = "$39.99", Type = "Protein" },
        new Supplement { Id = 23, Name = "Isopure® Infusions™", Description = "16 Serving Sizes", Price = "$24.99", Type = "Protein" },
        new Supplement { Id = 24, Name = "Isopure® Whey Protein Isolate - Unflavored", Description = "22 Serving Sizes", Price = "$44.99", Type = "Protein" },

        new Supplement { Id = 25, Name = "Beyond Raw® LIT™ Pre-Workout", Description = "30 Serving Sizes", Price = "$39.99", Type = "PreWorkout" },
        new Supplement { Id = 26, Name = "Beyond Raw® LIT AF™ Pre-Workout", Description = "20 Serving Sizes", Price = "$44.99", Type = "PreWorkout" },
        new Supplement { Id = 27, Name = "GHOST® LEGEND® V2 Pre-Workout", Description = "25 Serving Sizes", Price = "$44.99", Type = "PreWorkout" },
        new Supplement { Id = 28, Name = "Bucked Up® Woke AF™ Nootropic Pre-Workout", Description = "30 Serving Sizes", Price = "$54.99", Type = "PreWorkout" },
        new Supplement { Id = 29, Name = "Jym® Pre Jym Pre-Workout - Rainbow Sherbet", Description = "30 Serving Sizes", Price = "$49.99", Type = "PreWorkout" },
        new Supplement { Id = 30, Name = "BSN® N.O.-Xplode® VASO Pre-Workout", Description = "24 Serving Sizes", Price = "$49.99", Type = "PreWorkout" },
        new Supplement { Id = 31, Name = "Cellucor® C4® Ultimate Pre-Workout - Orange Mango", Description = "20 Serving Sizes", Price = "$39.99", Type = "PreWorkout" },
        new Supplement { Id = 32, Name = "Alani Nu Pre-Workout", Description = "30 Serving Sizes", Price = "$44.99", Type = "PreWorkout" },
        new Supplement { Id = 33, Name = "Axe & Sledge Supplements™ Ignition Switch Stim Pre-Workout", Description = "40 Serving Sizes", Price = "$39.99", Type = "PreWorkout" },
        new Supplement { Id = 34, Name = "Beyond Raw® Precision BCAA", Description = "30 Serving Sizes", Price = "$39.99", Type = "PreWorkout" },
        new Supplement { Id = 35, Name = "GAT® Sport NITRAFLEX® Pre-Workout", Description = "30 Serving Sizes", Price = "$36.99", Type = "PreWorkout" },
        new Supplement { Id = 36, Name = "Cellucor® C4® Extreme Pre-Workout", Description = "20 Serving Sizes", Price = "$34.99", Type = "PreWorkout" }
      );
    }
    public DbSet<Supplement> Supplements { get; set; }
    public RestServerContext(DbContextOptions options) : base(options) { }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseLazyLoadingProxies();
    }
  }
}