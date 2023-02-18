/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1

*/

// Solution

function digPow(n, p) {
  let sum = 0;
  const digits = n.toString().split("").map(Number);
  // converting digits into string using toString()
  //spliting them using split()(i.e. 89 is split at ''(no space) therefore,['8','9'])
  //it is made into an array using map()(i.e.map(Number) makes a list of Number datatype)
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] ** (p + i); //updating sum in each increment of i
  }
  if (sum % n == 0) {
    //if remainder of sum/n is integer
    return sum / n;
  } else {
    return -1;
  }
}

//Better way for this problem

function digPow(n, p) {
  let sum = 0;
  let digits = n.toString().split("").map(Number);
  for (let digit of digits) {
    sum += digit ** (p + i);
    i++;
  }
  if (sum % n === 0) {
    return sum / n;
  }
  return -1;
}
