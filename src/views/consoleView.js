import { Console } from "@woowacourse/mission-utils"

class consoleView {
    start() {
        return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    }

    display(result) {
        Console.print("결과 : " + result) 
    }
}

export default consoleView