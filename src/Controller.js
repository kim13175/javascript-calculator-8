import CalcModel from "./CalcModel.js"
import CalcView from "./CalcView.js"
import { CALC_PATTERN } from "./Constant.js"

class Controller {
    constructor() {
        this.view = new CalcView()
        this.model = new CalcModel()
    }

    hasCustomDelimeter(input) {
        const pattern = CALC_PATTERN
        return pattern.test(input)
    }

    validateDelimeter(customCh, input) {
        let isDifferent = false
        for (const ch of input) {
            if (customCh !== ch) {
                isDifferent = true
            }
        }
        if (isDifferent === true) throw new Error("[ERROR] 커스텀 문자와 일치하지 않는 문자열입니다.")
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

            const customCh = this.model.delimiters[this.model.delimiters.length]
            this.validateDelimeter(customCh, input)

            const numberArray = model.parse(input)
            this.validateNegative(numberArray)
            this.view.display(model.calculate(numberArray))

        } catch(error) {
            throw error
        }
    }
}

export default Controller