import { Link } from "react-router-dom"; // ADDED

const HyperLinks = () => {
    return (
        <div className="border border-black p-4 flex justify-between">

            {/* UPDATED - from <a> to <Link to={}> */}
            <Link to={`/`} className="px-2 flex flex-col justify-center">Home</Link>
            <a className="px-2 flex flex-col justify-center">Reports</a>
            <Link to={`/about`} className="px-2 flex flex-col justify-center">About Me</Link>
        </div>
    )
}

export default HyperLinks;