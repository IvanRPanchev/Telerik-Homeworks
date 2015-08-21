/*Problem 13. Count words

Write a program that reads a list of words from the file words.txt and finds how many times each of the words is contained in another file test.txt.
The result should be written in the file result.txt and the words should be sorted by the number of their occurrences in descending order.
Handle all possible exceptions in your methods.*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace CountWords
{
    class Counter
    {
        static void Main(string[] args)
        {
            try
            {
                StreamReader reader = new StreamReader("Test.txt");
                StreamWriter writer = new StreamWriter("Result.txt");
                using (writer)
                {
                    using (reader)
                    {
                        string[] words = File.ReadAllLines("Words.txt");
                        int[] count = new int[words.Length];
                        string line = reader.ReadLine();
                        while ((line = reader.ReadLine()) != null)
                        {
                            line = line.ToLower();
                            for (int i = 0; i < words.Length; i++)
                            {
                                count[i] += Regex.Matches(line, @"\b" + words[i] + @"\b").Count;
                            }
                        }
                        Array.Sort(count, words);
                        for (int i = words.Length - 1; i >= 0; i--)
                        {
                            writer.WriteLine("{0}: {1}", words[i], count[i]);
                        }
                    }
                }
            }

            catch (DirectoryNotFoundException exception)
            {
                Console.WriteLine(exception.Message);
            }
            catch (FileNotFoundException exception)
            {
                Console.WriteLine(exception.Message);
            }
            catch (FileLoadException exception)
            {
                Console.WriteLine(exception.Message);
            }
            catch (EndOfStreamException exception)
            {
                Console.WriteLine(exception.Message);
            }
            catch (IOException exception)
            {
                Console.WriteLine(exception.Message);
            }
            catch (ArgumentNullException exception)
            {
                Console.WriteLine(exception.Message);
            }
        }
    }
}
