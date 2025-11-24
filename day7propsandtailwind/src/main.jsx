import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentComponent from './ParentComponent.jsx'
import ChildComponent from './ChildComponent.jsx'
import AnotherParentComponent from './AnotherParentComponent.jsx'
import Withoutpropparent from './WithoutPropsParent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  {/* <ChildComponent /> */}
{/* <ParentComponent/> */}

{/* <AnotherParentComponent/> */}
{/* <Withoutpropparent/> */}
  </StrictMode>
)
