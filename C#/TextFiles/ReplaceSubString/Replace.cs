/*Problem 7. Replace sub-string

Write a program that replaces all occurrences of the sub-string start with the sub-string finish in a text file.
Ensure it will work with large files (e.g. 100 MB).*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ReplaceSubString
{
    class Replace
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
                        line = line.Replace("start", "finish");
                        writer.WriteLine(line);
                    }
                }
            }
            Console.WriteLine("Done!");
        }
    }
}
