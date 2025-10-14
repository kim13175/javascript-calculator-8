import CalcView from "./CalcView.js"
import Validator from "./Validator.js"

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
            const validate = new Validator()

            const input = await this.view.start()

            validate.hasCustomDelimeter(input)
        } catch {
            throw new Error("[ERROR] 계산에 실패하였습니다.")
        }
    }
}

export default Controller