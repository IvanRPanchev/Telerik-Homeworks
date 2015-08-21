namespace CSharp2Exam
{
    using System;
    public class MathProblem
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] arrayOfWords = input.Split(' ');
            int temporaryResultHolder = 0;
            int result = 0;
            foreach (string word in arrayOfWords)
            {
                for (int i = 0, j = word.Length - 1; i < word.Length; i++, j--)
                {
                    int currentDigit = ConvertDigitFromCat(word.Substring(i, 1));
                    temporaryResultHolder += currentDigit * PowerOfNineteen(j);
                }
                result += temporaryResultHolder;
                temporaryResultHolder = 0;
            }
            

            string numberInCat = "";
            string wordInCatReversed = "";
            int numberToConvert = result;
            if (result == 0)
            {
                numberInCat = "a";
            }
            else
            {
                while (numberToConvert > 0)
                {
                    numberInCat = FromDigitToCat(numberToConvert % 19 + numberInCat);
                    wordInCatReversed += numberInCat;
                    numberInCat = "";
                    numberToConvert /= 19;
                }
            }

            char[] wordInCat = wordInCatReversed.ToCharArray();
            Array.Reverse(wordInCat);
            Console.Write(wordInCat);
            Console.Write(" = {0}", result);

        }
        public static int ConvertDigitFromCat(string letter)
        {
            switch (letter)
            {

                case "a":
                         return 0;
                case "b":
                         return 1;
                case "c":
                         return 2;
                case "d":
                         return 3;
                case "e":
                         return 4;
                case "f":
                         return 5;
                case "g":
                         return 6;
                case "h":
                         return 7;
                case "i":
                         return 8;
                case "j":
                         return 9;
                case "k":
                         return 10;
                case "l":
                         return 11;
                case "m":
                         return 12;
                case "n":
                         return 13;
                case "o":
                         return 14;
                case "p":
                         return 15;
                case "q":
                         return 16;
                case "r":
                         return 17;
                case "s":
                         return 18;

                default: throw new ArgumentException("Wrong input in letter-to-digit converter!");
            }
        }
        public static string FromDigitToCat(string num)
        {
            switch (num)
            {

                case "0":
                         return "a";
                case "1":
                         return "b";
                case "2":
                         return "c";
                case "3":
                         return "d";
                case "4":
                         return "e";
                case "5":
                         return "f";
                case "6":
                         return "g";
                case "7":
                         return "h";
                case "8":
                         return "i";
                case "9":
                         return "j";
                case "10":
                          return "k";
                case "11":
                          return "l";
                case "12":
                          return "m";
                case "13":
                          return "n";
                case "14":
                          return "o";
                case "15":
                          return "p";
                case "16":
                          return "q";
                case "17":
                          return "r";
                case "18":
                          return "s";

                default: throw new ArgumentException("Wrong input in digit-to-letter converter!");
            }
        }

     public static int PowerOfNineteen(int power)
        {
            int result = 1;

            for (int i = 0; i < power; i++)
            {
                result *= 19;
            }

            return result;
        }
    }
}