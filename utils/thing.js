function AND(in1, in2) {
  return in1 && in2
}

function OR(in1, in2) {
  return in1 || in2
}

function XOR(in1, in2) {
  if (in1 === in2) {
    return 0
  } else {
    return 1
  }
}

function NEGATE(in1) {
  if (in1) {
    return 0
  } else {
    return 1
  }
}

function NAND(in1, in2) {
  if (AND(in1, in2)) {
    return 1
  } else {
    return 0
  }
}

// a functioning halfA adder
function halfAdder(A, B) {
  // init outputs
  output = {
    sum: 0,
    carry: 0
  }
  // if inputs are different add them and output sum of 1 otherwise,
  // if theyre the same, carry the output of 1 bit
  if (XOR(A, B)) {
    output.sum = 1
  } else if (A && B) {
    output.carry = 1
  }
  return output
}

function test(input) {
  testInputs = [[0, 0], [0, 1], [1, 0], [1, 1]]
  if (input === "and") {
    console.log("AND test:")
    for (i = 0; i < testInputs.length; i++) {
      console.log(
        `${testInputs[i][0]} AND ${testInputs[i][1]} = ${AND(
          testInputs[i][0],
          testInputs[i][1]
        )}`
      )
    }
  } else if (input === "or") {
    console.log("OR test:")
    for (i = 0; i < testInputs.length; i++) {
      console.log(
        `${testInputs[i][0]} OR ${testInputs[i][1]} = ${OR(
          testInputs[i][0],
          testInputs[i][1]
        )}`
      )
    }
  }
}

test("and")
test("or")
console.log(NEGATE(1))

console.log(halfAdder(1, 1))
