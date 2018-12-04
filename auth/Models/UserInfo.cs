using System.ComponentModel.DataAnnotations;
namespace sign_up.Models
{
  public class UserInfo
  {
    public string Name { get; set; }
    public string LastName { get; set; }
    public string Company { get; set; }
    [Key]
    public string Email { get; set; }
  }
}