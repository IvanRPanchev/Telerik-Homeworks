/*Write a program that reads a text file containing a list of strings, sorts them and saves them to another text file.
Example:

input.txt	output.txt
Ivan      George
Peter     Ivan
Maria     Maria
George	Peter*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace SaveSortedNames
{
    class Sort
    {
        static void Main(string[] args)
        {
            StreamReader reader = new StreamReader("Text.txt");
            StreamWriter writer = new StreamWriter("Sorted.txt");
            List<string> names = new List<string>();
            string name = reader.ReadLine();
            using (reader)
            {
                while (name != null)
                {
                    names.Add(name);
                    name = reader.ReadLine();
                }
                names.Sort();
                using (writer)
                {
                    foreach (string line in names)
                    {
                        writer.WriteLine(line);
                    }
                }
            }
            Console.WriteLine("A sorted list of names is saved in the bin directory!");
        }
    }
}   
