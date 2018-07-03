import { expect } from 'chai'

function requireUncached(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}

const Rational = requireUncached('../src/Rational')

describe('Rational', function () {
  beforeEach(function () {
    // Some test preparation work
  })

  afterEach(function () {
    // Some test tear down work
  })

  it('should allow creation', done => {
    let frac = new Rational(1,2)
    expect(frac.toString()).to.equal('1/2')
    expect(frac.decimal()).to.equal(0.5)
    done()
  })

  it('should represent minimal fraction', done => {
    let frac1 = new Rational(6,8)
    expect(frac1.toString()).to.equal('3/4')
    done()
  })

  it('should allow addition', done => {
    let frac1 = new Rational(1,2)
    let frac2 = new Rational(1,4)
    expect(frac1.add(frac2).decimal()).to.equal(0.75)
    expect(frac1.add(frac2).toString()).to.equal('3/4')
    done()
  })

  it('should allow substraction', done => {
    let frac1 = new Rational(1,2)
    let frac2 = new Rational(1,4)
    expect(frac1.substract(frac2).decimal()).to.equal(0.25)
    expect(frac1.substract(frac2).toString()).to.equal('1/4')
    done()
  })
})
