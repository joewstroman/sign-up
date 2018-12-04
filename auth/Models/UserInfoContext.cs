using Microsoft.EntityFrameworkCore;

namespace sign_up.Models
{
  public class UserInfoContext : DbContext
  {
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //     => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=appdata;Username=test;Password=testpw");
    
    public UserInfoContext(DbContextOptions<UserInfoContext> options)
        : base(options)
    {
      Database.EnsureCreated();
    }

    public DbSet<UserInfo> UserInfo { get; set; }
  }
}