import consoleView from "./views/consoleView.js";

class App {
  async run() {
    const view = new consoleView()
    let string = ''
    string = await view.start(string)
    if (string !== '' && string !== undefined) {
      view.display(string)
    }
  }
}

export default App;
