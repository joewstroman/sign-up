using Microsoft.EntityFrameworkCore;

namespace sign_up.Models
{
  public class UserInfoContext : DbContext
  {
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //     => optionsBuilder.UseNpgsql("Host=my_host;Database=my_db;Username=my_user;Password=my_pw");
    
    public UserInfoContext(DbContextOptions<UserInfoContext> options)
        : base(options)
    {
    }

    public DbSet<UserInfo> UserInfo { get; set; }
  }
}