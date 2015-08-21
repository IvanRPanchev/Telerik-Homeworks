/*Problem 10. Unicode characters

Write a program that converts a string to a sequence of C# Unicode character literals.
Use format strings.
Example:

input	output
Hi!	\u0048\u0069\u0021*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnicodeChars
{
    class Unicode
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a string");
            string expression = Console.ReadLine();
            StringBuilder coder = new StringBuilder();
            foreach (var ch in expression)
            {
                coder.AppendFormat("\\u{0:X4}", (int)ch);
            }

            Console.WriteLine(coder.ToString());
        }
    }
}
