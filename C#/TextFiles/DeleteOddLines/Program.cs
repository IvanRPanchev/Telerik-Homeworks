/*Problem 9. Delete odd lines

Write a program that deletes from given text file all odd lines.
The result should be in the same file.*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;


namespace DeleteOddLines
{
    class Program
    {
        static void Main(string[] args)
        {
            StreamReader reader = new StreamReader("Text.txt");
            StreamWriter writer = new StreamWriter("OddLines.txt");
            using (writer)
            {
                using (reader)
                {
                    int lineCOunt = 0;
                    string text = reader.ReadLine();
                    while (text != null)
                    {
                        if (lineCOunt % 2 == 0)
                        {
                            writer.WriteLine(text);
                        }
                        lineCOunt++;
                        text = reader.ReadLine();
                    }
                }
            }

        }
    }
}
