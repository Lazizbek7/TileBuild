import './App.css'
import Header from './components/header'
import About from './components/about'
import Main from "./components/main"
import Center from './components/center'
import Footer from './components/footer'
function App() {
  window.oncontextmenu = function () {
    return false;
 }
      document.onkeydown=function(e){
        if(event.keyCode == 123){
          return false
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
          return false
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
          return false
        }
        if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
          return false
        }
      }

  return (
    <>
      <Header/>
      <About/>
      <Main/>
      <Center/>
      <Footer/>
    </>
  )
}

export default App
