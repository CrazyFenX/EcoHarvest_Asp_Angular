using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcoHarvest_Asp_Angular.Models
{
    public class Product
    {
        /// <summary>
        /// Id of Product
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Price of Product
        /// </summary>
        public float Price { get; set; }

        /// <summary>
        /// Name of Product
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Product's description
        /// </summary>
        public string Description { get; set; }
        //public string GOST { get; set; }
    }
}
