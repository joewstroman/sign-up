using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using sign_up.Models;
using System.Linq;

namespace sign_up.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    private readonly UserInfoContext _context;

    public UserController(UserInfoContext context)
    {
      _context = context;

      // if (_context.UserInfo.Count() == 0)
      // {
      //   _context.UserInfo.Add(new UserInfo { Email = "test" });
      //   _context.SaveChanges();
      // }
    }     

    [HttpGet]
    public IEnumerable<UserInfo> GetAll()
    {
      return _context.UserInfo.ToList();
    }

    [HttpGet("{email}", Name = "GetUserInfo")]
    public IActionResult GetById(string email)
    {
      var item = _context.UserInfo.FirstOrDefault(t => t.Email == email);
      if (item == null)
      {
        return NotFound();
      }
      return new ObjectResult(item);
    }

    [HttpPost]
    public IActionResult Create([FromBody] UserInfo item)
    {
      if (item == null)
      {
        return BadRequest();
      }

      _context.UserInfo.Add(item);
      _context.SaveChanges();

      return CreatedAtRoute("GetUserInfo", new { email = item.Email }, item);
    }

    [HttpDelete("{email}")]
    public IActionResult Delete(string email)
    {
      var item = _context.UserInfo.First(t => t.Email == email);
      if (item == null)
      {
        return NotFound();
      }

      _context.UserInfo.Remove(item);
      _context.SaveChanges();
      return new NoContentResult();
    }
  }
}