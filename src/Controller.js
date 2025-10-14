import { Console } from "@woowacourse/mission-utils"
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

    validateDelimeter(customCh, ch) {
        if (customCh !== ch) throw new Error("[ERROR]커스텀 문자와 일치하지 않는 문자열입니다.")
    }

    async run() {
        try {

            const input = await this.view.start()

            if (this.hasCustomDelimeter(input)) {
                delimeter = model.extractDelimiter(input)
            }

            const model = this.model
            model.parse(input)
            const numberArray = model.parse(input)
            this.view.display(model.calculate(numberArray)) 

        } catch(error) {
            Console.print(error)
            throw new Error("[ERROR] 계산에 실패하였습니다.")
        }
    }
}

export default Controller