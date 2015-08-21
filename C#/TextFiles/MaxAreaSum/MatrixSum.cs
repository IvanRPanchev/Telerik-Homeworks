/*Problem 5. Maximal area sum

Write a program that reads a text file containing a square matrix of numbers.
Find an area of size 2 x 2 in the matrix, with a maximal sum of its elements.
The first line in the input file contains the size of matrix N.
Each of the next N lines contain N numbers separated by space.
The output should be a single number in a separate text file.*/
using System;
using System.IO;
using System.Text;
class MatrixSum
{
    static void Main(string[] args)
    {

        using (StreamReader reader = new StreamReader("Text.txt"))
        {
            string line = reader.ReadLine();
            line = line.Trim();
            int sizeMatrix = Convert.ToInt32(line);

            int[,] matrix = new int[sizeMatrix, sizeMatrix];

            for (int row = 0; row < sizeMatrix; row++)
            {
                string[] numbers = reader.ReadLine().Split(' ');
                for (int column = 0; column < sizeMatrix; column++)
                {
                    matrix[row, column] = Convert.ToInt32(numbers[column]);
                }
            }
            long maxSum = long.MinValue;
            for (int rowForPlatform = 0; rowForPlatform < sizeMatrix - 1; rowForPlatform++)
            {
                for (int columnForPlatform = 0; columnForPlatform < sizeMatrix - 1; columnForPlatform++)
                {
                    long currentPlatformSum = 0;
                     for (int rowForSum = rowForPlatform; rowForSum <= rowForPlatform + 1; rowForSum++)
                    {
                        for (int columnForSum = columnForPlatform; columnForSum <= columnForPlatform + 1; columnForSum++)
                        {
                            currentPlatformSum += matrix[rowForSum, columnForSum];
                        }
                    }
                    if (currentPlatformSum > maxSum)
                    {
                        maxSum = currentPlatformSum;
                    }
                }
            }

            Console.WriteLine("The max sum within a platform of 2x2 in the matrix is: {0}", maxSum);
        }
    }
}

