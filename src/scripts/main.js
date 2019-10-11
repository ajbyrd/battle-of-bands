let bandNumber = 0

const takeNumber = function (name) {
        bandNumber += 1
        return(`${bandNumber}.  ${name}`)  
}

const turnpike = takeNumber("Turnpike Troubadours")
console.log(turnpike)  // This should print "1. Galactic Scum" in the console

const unit = takeNumber("Jason Isbell and the 400 Unit")
console.log(unit)  // This should print "2. Underdogs" in the console

const wars = takeNumber("The Civil Wars")
console.log(wars)
