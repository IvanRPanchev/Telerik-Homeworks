/*Problem 1. Odd lines

Write a program that reads a text file and prints on the console its odd lines.*/
using System;
using System.IO;
class PrintOdd
{
    static void Main()
    {
        StreamReader reader = new StreamReader("test.txt");
        using (reader)
        {
            int lineCOunt = 0;
            string text = reader.ReadLine();
            while (text!=null)
            {
                if (lineCOunt%2==0)
                {
                    Console.WriteLine(text);
                }
                lineCOunt++;
                text = reader.ReadLine();
            }
        }

    }
}

