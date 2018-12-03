using Microsoft.EntityFrameworkCore;

namespace sign_up.Models
{
  public class UserContext : DbContext
  {
    public UserContext(DbContextOptions<UserContext> options)
        : base(options)
    {
    }

    public DbSet<UserInfo> UserInfo { get; set; }
  }
}