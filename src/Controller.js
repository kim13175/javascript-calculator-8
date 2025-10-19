import CalcModel from "./CalcModel.js"
import CalcView from "./CalcView.js"
import { CALC_PATTERN, CHAR_PATTERN } from "./Constant.js"

class Controller {
    constructor() {
        this.view = new CalcView()
        this.model = new CalcModel()
    }

    hasCustomDelimeter(input) {
        const pattern = CALC_PATTERN
        return pattern.test(input)
    }

    validateDelimeter(delimiters, input) {
        for (const ch of input) {
            if (CHAR_PATTERN.test(ch)) {
                if (!delimiters.includes(ch)) throw new Error("[ERROR] 커스텀 문자와 일치하지 않는 문자열입니다.")
            }
        }
    }

    validateNegative(numberArray) {
        for (const num of numberArray) {
            if (num < 0) throw new Error("[ERROR] 음수는 계산할 수 없습니다")
        }
    }

    validateEndString(input) {
        if (parseInt(input[input.length]) !== typeof Number) throw new Error("[ERROR] 맨 끝은 숫자가 와야 합니다.")
    }

    async run() {
        try {

            const input = await this.view.start()

            const model = this.model
            if (this.hasCustomDelimeter(input)) {
                model.extractDelimiter(input)
            }

            const extraInput = this.model.extractExtraString(input)
            const delimiters = [...model.delimiters] 
            this.validateDelimeter(delimiters, extraInput)

            const numberArray = model.parse(input)
            this.validateNegative(numberArray)
            this.view.display(model.calculate(numberArray))

        } catch(error) {
            throw error
        }
    }
}

export default Controller