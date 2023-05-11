
import Welcome from "./welcome";
import HyperLinks from "./hyperlinks";

const username = "Othman";

const TopMenuContainer = () => {

    return <div className="flex justify-between border border-green-500 p-2 absolute w-full top-0">
        <Welcome currentUser={username} />
        <HyperLinks />
    </div>
}

export default TopMenuContainer;