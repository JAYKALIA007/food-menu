import Navbar from "./Navbar"
import Menu from "./Menu"
export default function App() {
  return (
    <div className=" text-gray-600 flex ">
      <div className="w-1/3 ">
        <Navbar/>
      </div>
      <div className="w-2/3 ">
        <Menu/>
      </div>
    </div>
  )
}