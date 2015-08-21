namespace Methods
{   
    using System;
    public class Methods
    {
        internal static double CalcTriangleArea(double a, double b, double c)
        {
            if (a <= 0 ||
                b <= 0 ||
                c <= 0)
            {
                throw new ArgumentException("Triangle sides lengths must be greater than zero!");   
            }

            if (a + b <= c ||
			    a + c <= b ||
			    b + c <= a)
            {
                throw new ArgumentException("The sum of the length of two of the triangle's sides must be greater than the length of the third!");
            }
            double semiperimeter = (a + b + c) / 2;
            double area = Math.Sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
            return area;
        }

        internal static string NumberToDigit(int number)
        {
            switch (number)
            {
                case 0:
                        return "zero";
                case 1:
                        return "one";
                case 2:
                        return "two";
                case 3:
                        return "three";
                case 4:
                        return "four";
                case 5:
                        return "five";
                case 6:
                        return "six";
                case 7:
                        return "seven";
                case 8:
                        return "eight";
                case 9:
                        return "nine";
                default:
                        return "Invalid digit!";
            }
        }

        internal static int FindMax(params int[] elements)
        {
            if (elements == null ||
                elements.Length == 0)
            {
                throw new ArgumentNullException("Arguments array should not be empty.");
            }

            var maxElement = elements[0];
            for (int i = 1; i < elements.Length; i++)
            {
                if (elements[i] > maxElement)
                {
                    maxElement = elements[i];
                }
            }
            return maxElement;
        }

        internal static void PrintAsNumber(object number, string format)
        {
            if (format == "f")
            {
                Console.WriteLine("{0:f2}", number);
            }
            if (format == "%")
            {
                Console.WriteLine("{0:p0}", number);
            }
            if (format == "r")
            {
                Console.WriteLine("{0,8}", number);
            }
        }


        internal static double CalcDistance(double x1, double y1, double x2, double y2, 
                                   out bool isHorizontal, out bool isVertical)
        {
            // Define the tolerance for variation in the values of x- and y-axis values
            var differenceXAxis = Math.Abs(x1 * .00001);
            var differenceYAxis = Math.Abs(y1 * .00001);

            isVertical = (Math.Abs(y1 - y2) <= differenceYAxis);
            isHorizontal = (Math.Abs(x1 - x2) <= differenceXAxis);

            var distance = Math.Sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            return distance;
        }
    }
}
