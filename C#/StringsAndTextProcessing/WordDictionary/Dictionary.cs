/*Problem 14. Word dictionary

A dictionary is stored as a sequence of text lines containing words and their explanations.
Write a program that enters a word and translates it by using the dictionary.
Sample dictionary:

input	output
.NET	platform for applications from Microsoft
CLR	managed execution environment for .NET
namespace	hierarchical organization of classes*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordDictionary
{
    class Dictionary
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            dictionary.Add(".NET", "Platform for applications from Microsoft");
            dictionary.Add("CLR", "	Managed execution environment for .NET");
            dictionary.Add("namespace", "Hierarchical organization of classes");
            Console.Write("Enter a word! ");
            string word = Console.ReadLine();
            if (dictionary.ContainsKey(word))
            {
                Console.WriteLine(dictionary[word]);
            }
        }
    }
}
