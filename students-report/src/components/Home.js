import {Link} from 'react-router-dom'
function Home() {
    return(
        <div className="home">
            <div>
            <Link to="/form"><button>Enter Marks</button></Link>

            </div>
            <div>
            <Link to="/leaderboard"><button>Dashboard</button></Link>

            </div>
        </div>
    )
}
export default Home