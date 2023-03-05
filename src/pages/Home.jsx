import Sidebar from "../components/SideBar"
import Chat from "../components/Chat"
const Home = () =>{
    return(
        <div className="bg-purple-500 h-screen flex items-center justify-center">
            <div className="border border-white rounded-xl w-4/6 h-4/5 flex overflow-hidden">
            <Sidebar />
            <Chat />
            </div>
        </div>
    )
}

export default Home