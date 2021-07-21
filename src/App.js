import Sidmenu from './components/SIdemenu'
import AuthRoutes from './routes/auth.route'
import AppRoutes from './routes/app.route'

const auth = true

function App() {
  return <Sidmenu routes={auth ? AppRoutes : AuthRoutes} />    
}

export default App;
