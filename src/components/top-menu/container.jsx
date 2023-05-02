import Welcome from "./welcome";

const username = "Othman";

const TopMenuContainer = () => {

    return <div className="flex justify-between border border-green-500 p-2 absolute w-full top-0">
        <div className="border border-black p-4">Logo</div>
        <div className="border border-black p-4">Hyperlinks</div>
        <Welcome currentUser={username} />
    </div>
}

export default TopMenuContainer;