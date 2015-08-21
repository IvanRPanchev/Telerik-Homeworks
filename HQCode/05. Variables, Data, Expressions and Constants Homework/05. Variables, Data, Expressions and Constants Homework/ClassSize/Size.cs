namespace ClassSize
{
    using System;
    public class Size
    {
        private double width;
        private double heigth;
        public Size(double width, double height)
        {
            this.Width = width;
            this.Height = height;
        }

        /// <exception cref="ArgumentOutOfRangeException" accessor="set">Width should not be negative</exception>
        public double Width
        {
            get
            {
                return this.Width;
            }

            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentOutOfRangeException("Width must be greater than zero!");
                }

                this.Width = value;
            }
        }

        /// <exception cref="ArgumentOutOfRangeException" accessor="set">Height should not be negative</exception>

        public double Height
        {
            get
            {
                return this.Height;
            }

            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Height must be greater than zero!");
                }

                this.Height = value;
            }
        }

        public static Size GetRotatedSize(
            Size size, double angleOfRotation)
        {
            double sinusTimesWidth = Math.Abs(Math.Sin(angleOfRotation) * size.Width);
            double cosinusTimesWidth = Math.Abs(Math.Cos(angleOfRotation) * size.Width);
            double sinusTimesHeight = Math.Abs(Math.Sin(angleOfRotation) * size.Height);
            double cosinusTimesHeigth = Math.Abs(Math.Cos(angleOfRotation) * size.Height);

            double rotatedFigureWidth = cosinusTimesWidth + sinusTimesHeight;
            double rotatedFigureHeight = sinusTimesWidth + cosinusTimesHeigth;

            Size rotatedFigure = new Size(rotatedFigureWidth, rotatedFigureHeight);

            return rotatedFigure;
        }
    }
}
