using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using sign_up.Models;
using System.Linq;

namespace sign_up.Controllers
{
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    private readonly UserContext _context;

    public UserController(UserContext context)
    {
      _context = context;

      if (_context.UserInfo.Count() == 0)
      {
        _context.UserInfo.Add(new UserInfo { Id = _context.UserInfo.LongCount() + 1 });
        _context.SaveChanges();
      }
    }     

    [HttpGet]
    public IEnumerable<UserInfo> GetAll()
    {
      return _context.UserInfo.ToList();
    }

    [HttpGet("{id}", Name = "GetUserInfo")]
    public IActionResult GetById(long id)
    {
      var item = _context.UserInfo.FirstOrDefault(t => t.Id == id);
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

      return CreatedAtRoute("GetUserInfo", new { id = item.Id }, item);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(long id)
    {
      var item = _context.UserInfo.First(t => t.Id == id);
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