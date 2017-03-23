using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FancyTable.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Comment { get; set; }
        public DateTime DatePosted { get; set; }

    }
}
