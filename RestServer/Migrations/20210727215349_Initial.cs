using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace supplement_store.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Supplements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Description = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Price = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Type = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supplements", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "Id", "Description", "Name", "Price", "Type" },
                values: new object[,]
                {
                    { 1, "26 Serving Sizes", "Ghost Protein", "$39.99", "Protein" },
                    { 21, "33 Serving Sizes", "Women's Best™ Fit Pro Whey Protein", "$39.99", "Protein" },
                    { 22, "26 Serving Sizes", "GNC Pro Performance® 100% Whey Protein", "$39.99", "Protein" },
                    { 23, "16 Serving Sizes", "Isopure® Infusions™", "$24.99", "Protein" },
                    { 24, "22 Serving Sizes", "Isopure® Whey Protein Isolate - Unflavored", "$44.99", "Protein" },
                    { 25, "30 Serving Sizes", "Beyond Raw® LIT™ Pre-Workout", "$39.99", "PreWorkout" },
                    { 26, "20 Serving Sizes", "Beyond Raw® LIT AF™ Pre-Workout", "$44.99", "PreWorkout" },
                    { 20, "9 Serving Sizes", "GNC AMP Wheybolic™ Alpha Protein + Test & Power", "$38.99", "Protein" },
                    { 27, "25 Serving Sizes", "GHOST® LEGEND® V2 Pre-Workout", "$44.99", "PreWorkout" },
                    { 29, "30 Serving Sizes", "Jym® Pre Jym Pre-Workout - Rainbow Sherbet", "$49.99", "PreWorkout" },
                    { 30, "24 Serving Sizes", "BSN® N.O.-Xplode® VASO Pre-Workout", "$49.99", "PreWorkout" },
                    { 31, "20 Serving Sizes", "Cellucor® C4® Ultimate Pre-Workout - Orange Mango", "$39.99", "PreWorkout" },
                    { 32, "30 Serving Sizes", "Alani Nu Pre-Workout", "$44.99", "PreWorkout" },
                    { 33, "40 Serving Sizes", "Axe & Sledge Supplements™ Ignition Switch Stim Pre-Workout", "$39.99", "PreWorkout" },
                    { 34, "30 Serving Sizes", "Beyond Raw® Precision BCAA", "$39.99", "PreWorkout" },
                    { 28, "30 Serving Sizes", "Bucked Up® Woke AF™ Nootropic Pre-Workout", "$54.99", "PreWorkout" },
                    { 19, "40 Serving Sizes", "STI G6 Sports Prolific Isolate", "$69.99", "Protein" },
                    { 18, "9 Serving Sizes", "GNC AMP Wheybolic™ Ripped - Strawberries and Cream", "$38.99", "Protein" },
                    { 17, "21 Serving Sizes", "Isopure® With Coffee - Espresso", "$39.99", "Protein" },
                    { 2, "25 Serving Sizes", "GNC AMP Wheybolic Protein", "$64.99", "Protein" },
                    { 3, "80 Serving Sizes", "Optimum Protein", "$59.99", "Protein" },
                    { 4, "24 Serving Sizes", "Dymatize ISO Protein", "$29.99", "Protein" },
                    { 5, "28 Serving Sizes", "GNC AMP Pure Isolate Protein", "$34.99", "Protein" },
                    { 6, "22 Serving Sizes", "GNC AMP Wheybolic™ Ripped Performance Protein ", "$69.99", "Protein" },
                    { 7, "49 Serving Sizes", "Jym® Pro Jym Ultra-Premium Protein Powder Blend", "$59.99", "Protein" },
                    { 8, "30 Serving Sizes", "Alani Nu Whey Protein", "$44.99", "Protein" },
                    { 9, "28 Serving Sizes", "GNC AMP Sustained Protein Blend", "$39.99", "Protein" },
                    { 10, "44 Serving Sizes", "Isopure® Zero Carb Protein Powder", "$44.99", "Protein" },
                    { 11, "22 Serving Sizes", "GNC AMP Wheybolic™ Alpha with MyoTOR®", "$69.99", "Protein" },
                    { 12, "20 Serving Sizes", "Jym® Iso Jym Whey Protein Isolate", "$32.99", "Protein" },
                    { 13, "30 Serving Sizes", "Musclegen Performance Nutrition Genepro® Next Generation Protein - Flavorless", "$37.99", "Protein" },
                    { 14, "10 Serving Sizes", "GNC AMP Wheybolic™ - Classic Vanilla", "$34.99", "Protein" },
                    { 15, "23 Serving Sizes", "Pro Supps® Whey Isolate Protein", "$29.99", "Protein" },
                    { 16, "15 Serving Sizes", "Isopure® Low Carb Protein Powder", "$19.99", "Protein" },
                    { 35, "30 Serving Sizes", "GAT® Sport NITRAFLEX® Pre-Workout", "$36.99", "PreWorkout" },
                    { 36, "20 Serving Sizes", "Cellucor® C4® Extreme Pre-Workout", "$34.99", "PreWorkout" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Supplements");
        }
    }
}
