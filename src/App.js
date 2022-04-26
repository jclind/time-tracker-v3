import AuthProvider from './context/AuthContext'
import Navbar from './Components/Navbar/Navbar'
import TimerContainer from './Components/TimerContainer/TimerContainer'

function App() {
  return (
    <AuthProvider>
      <div className='app' id='#app'>
        <Navbar />
        <TimerContainer />
      </div>
    </AuthProvider>
  )
}

export default App
