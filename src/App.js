import CalcView from "./CalcView.js"

class App {
  async run() {
    const view = new CalcView()
    let string = ''
    string = await view.start(string)
    if (string !== '' && string !== undefined) {
      view.display(string)
    }
  }
}

export default App;
