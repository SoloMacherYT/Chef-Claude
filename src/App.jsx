
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { createRoot } from "react-dom/client"
import "./index.css"

const root = createRoot(document.getElementById('root'))
root.render(<>
      <Header />
      <div className="divider">
            <Main />
            <Footer/>
      </div>

</>)

