using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FancyTable.Data;
using FancyTable.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FancyTable.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        public ApplicationDbContext _db;

        public PersonController(ApplicationDbContext db)
        {
            _db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _db.Persons.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var person = _db.Persons.FirstOrDefault(pe => pe.Id == id);
            if (person == null)
            {
               return  NotFound();
            }
            return Ok(person);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Person p)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            if (p.Id == 0)

            {
                _db.Persons.Add(p);
                _db.SaveChanges();
            }
            else
            {
                var original = _db.Persons.FirstOrDefault(j => j.Id == j.Id);
                original.Author = p.Author;
                original.Comment = p.Comment;
                original.DatePosted = p.DatePosted;
                _db.SaveChanges();
            }
            return Ok(p);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
