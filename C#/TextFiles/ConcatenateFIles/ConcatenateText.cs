/*Problem 2. Concatenate text files

Write a program that concatenates two text files into another text file.*/
using System;
using System.IO;
class ConcatenateText
{
    static void Main()
    {
        StreamReader fileA = new StreamReader("testA.txt");
        StreamReader fileB = new StreamReader("testB.txt");
        StreamWriter writer = new StreamWriter("target.txt", true);

        using (writer)
        {
            using (fileA)
            {
                string line = fileA.ReadLine();
                while (line != null)
                {
                    writer.WriteLine(line);
                    line = fileA.ReadLine();
                }
            }
            writer.WriteLine("File B starts here");
            using (fileB)
            {
                string line = fileB.ReadLine();
                while (line != null)
                {
                    writer.WriteLine(line);
                    line = fileB.ReadLine();
                }
            }
        }
        Console.WriteLine("The concatenated text looks like this : ");
        StreamReader reader = new StreamReader("target.txt");
        using (reader)
        {
            string currentLine = reader.ReadLine();
            int count = 1;
            while (currentLine != null)
            {
                Console.WriteLine("{0}. {1}", count, currentLine);
                count++;
                currentLine = reader.ReadLine();
            }
            
        }
    }
}

