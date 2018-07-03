// A rational number is any number that can be expressed as the quotient or
// fraction p/q of two integers, a numerator p and a non-zero denominator q.
const gcd = (p, q) => {
  if (p === q) {
    return p
  } else if (p > q) {
    return gcd(p-q, q)
  } else if (q > p) {
    return gcd(p, q-p)
  }
}

function Rational(numerator, denominator) {
  const common = gcd(numerator, denominator)
  this.p = numerator / common
  this.q = denominator / common
}

Rational.prototype.toString = function () {
  return `${this.p}/${this.q}`
}

Rational.prototype.decimal = function () {
  return this.p/this.q
}

Rational.prototype.add = function (rational) {
  const num = (this.p * rational.q ) + (this.q * rational.p)
  const den = this.q * rational.q
  return new Rational(num, den)
}

Rational.prototype.substract = function (rational) {
  const num = (this.p * rational.q ) - (this.q * rational.p)
  const den = this.q * rational.q
  return new Rational(num, den)
}

module.exports = Rational
