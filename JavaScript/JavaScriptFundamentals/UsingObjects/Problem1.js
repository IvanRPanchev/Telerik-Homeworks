//Write functions for working with shapes in standard Planar coordinate system.
//Points are represented by coordinates P(X, Y)
//Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//Check if three segment lines can form a triangle.

console.log('----------------------------------------');
console.log('Problem 1. Planar coordinates');
console.log('----------------------------------------');

function planar ()   {
			var line1 = new Line(new Point(0, 0), new Point(5, 0));
			var line2 = new Line(new Point(5, 0), new Point(5, 4));
			var line3 = new Line(new Point(0, 0), new Point(5, 4));

			console.log(line1, "length > ", line1.length());
			console.log(line2, "length > ", line2.length());
			console.log(line3, "length > ", line3.length());
			console.log("Can the lines form a triangle: ", triangleByLines(line1, line2, line3));

			function Point(x, y) {
				this.x = x;
				this.y = y;
			}

			function Line(p1, p2) {
				var self = this;
				self.p1 = p1;
				self.p2 = p2;

				self.length = function() {
					return Math.sqrt(Math.pow((self.p2.x - self.p1.x), 2) + Math.pow((self.p2.y - self.p1.y), 2));
				};
			}

			function triangleByLines(line1, line2, line3) {
				return Math.pow(line1.length(), 2) + Math.pow(line2.length(), 2) === Math.pow(line3.length(), 2);
			}
		}

planar ();