import { ALL_REG_EXP, CALC_PATTERN } from "./Constant.js";

class CalcModel {
    constructor() {
        this.delimiters = [',', ':']
    }
    
    extractDelimiter(input) {
        const match = input.match(CALC_PATTERN)
        if (match) {
            this.delimiters.push(match[1])
        }
        return this.delimiters
    }

    extractExtraString(input) {
        if (input.startsWith('//') && input.includes('\\n')) {
            return input.split('\\n')[1]
        }
        return input
    }

    splitExtraString(input) {
        const escapedDelimiters = this.delimiters.map(d => 
            d.replace(ALL_REG_EXP, '\\$&')
        )
        const pattern = new RegExp(escapedDelimiters.join('|'))  
        return input.split(pattern)
    }

    parse(input) {
        this.extractDelimiter(input)
        const extraString = this.extractExtraString(input)
        const numbers = this.splitExtraString(extraString)
        return numbers.map((number) => parseInt(number))
    }

    calculate(inputs) {
        return inputs.reduce((sum, num) => sum + num, 0)
    }
}

export default CalcModel