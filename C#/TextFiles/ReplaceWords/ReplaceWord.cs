/*Problem 8. Replace whole word

Modify the solution of the previous problem to replace only whole words (not strings).*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace ReplaceWords
{
    class ReplaceWord
    {
        static void Main()
        {
            StreamReader reader = new StreamReader("Text.txt");//random text generator
            StreamWriter writer = new StreamWriter("Replaced.txt");
            using (writer)
            {
                using (reader)
                {
                    string line;
                    while ((line = reader.ReadLine()) != null)
                    {
                        line = line.ToLower();
                        line = Regex.Replace(line, @"\bstart\b", "finish");
                        writer.WriteLine(line);
                    }
                }
            }
            Console.WriteLine("Done!");
        }
    }
}
