/*Problem 12. Remove words

Write a program that removes from a text file all words listed in given another text file.
Handle all possible exceptions in your methods.*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace RemoveWords
{
    class Remover
    {
        static void Main(string[] args)
        {
            try
            {
                using (StreamWriter sw = new StreamWriter("Result.txt"))
                {
                    using (StreamReader sr = new StreamReader("Text.txt"))//"Crying in the rain" by Whitesnake
                    {
                        string line;
                        string regex = @"\b(" + String.Join("|", File.ReadAllLines("Words.txt")) + @")\b";
                        while ((line = sr.ReadLine()) != null)
                        {
                            line = line.ToLower();
                            line = Regex.Replace(line, regex, string.Empty);
                            sw.WriteLine(line);
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
        
    

