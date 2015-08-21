/*Problem 3. Line numbers

Write a program that reads a text file and inserts line numbers in front of each of its lines.
The result should be written to another text file.*/
using System;
using System.IO;
class LineNum
{
    static void Main()
    {
        StreamReader reader = new StreamReader("Text.txt");
        StreamWriter writer = new StreamWriter("target.txt", true);

        using (writer)
        {
            using (reader)
        {
            string currentLine = reader.ReadLine();
            int count = 1;
            while (currentLine != null)
            {
                writer.WriteLine("Line {0:D2}: {1}", count, currentLine);
                currentLine = reader.ReadLine();
                count++;
            }
            
        }

        }
    }
}

