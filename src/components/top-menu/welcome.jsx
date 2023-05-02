const Welcome = (props) => {

    return (
        <div className="border border-black p-4 flex flex-col justify-center">
            Welcome, {props.currentUser}
        </div>
    );
}

export default Welcome;