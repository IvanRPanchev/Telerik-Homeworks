/*Problem 4. Compare text files

Write a program that compares two text files line by line and prints the number of lines that are the same and the number of lines that are different.
Assume the files have equal number of lines.*/
using System;
using System.IO;
class Comparer
{
    static void Main()
    {
        var readerA = new StreamReader("TextA.txt");
        var readerB = new StreamReader("TextB.txt");
        using (readerA)
        {
            using (readerB)
            {
                string lineA = readerA.ReadLine();
                string lineB = readerB.ReadLine();
                int counter = 0;
                while (lineA != null && lineB != null)
                {
                    if (lineA.CompareTo(lineB)==0)
                    {
                        counter ++;
                    }
                    lineA = readerA.ReadLine();
                    lineB = readerB.ReadLine();
                }
                Console.WriteLine("The number of equal lines is {0}", counter);
            }
        }
    }
}

