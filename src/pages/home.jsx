import { useState, useEffect } from "react";

const Home = () => {

    const defaultFormData = {
        summary:null,
        currentDate:null,
        activity:null
    }
    const [formData, setFormData] = useState(defaultFormData);
    const [errorData, setErrorData] = useState({});
    const [activityCharCount, setActivityCharCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect callback fn"); // Called when component load or formData state changes
        setActivityCharCount(formData.activity ? formData.activity.length : 0); // if formData.activity is not null, set the length of activity value. Otherwise, set 0.

        return () => console.log("component unmount") // Called when Home.jsx component is unmounted
    }, [formData]); // The state defined in the array will be watched. The callback function will be invoked when the watched state changed.

    const validateData = () => {
        console.log("validate data")
        let newErrorData = {};
        for(const property in formData){
            newErrorData[property] = formData[property] ? null : "Cannot be empty"; 
        }        
        setErrorData(newErrorData);
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        validateData();
    }

    const handleInputChange = (e) => { // Event object as argument

        // setFormData is a function provided by useState
        setFormData((prevState) => { // The previous state is passed as first argument

            // Look at the console to understand how the state is dynamically updated
            console.log(`target name: ${e.target.name}`);
            console.log(`target value: ${e.target.value}`);

            // Return a new object to update the state
            return {                
                ...prevState, // Copy previous state into new object 
                [e.target.name]: e.target.value // Dynamically update
            }
        })
    }

    return (
        <div className="flex">

            {/* Form Entry */}
            <div className="basis-4/5 border border-red-500 p-4">
                <form>
                    <div className="flex mt-4">
                        <label className="basis-1/5 custom-display-label">Summary</label>
                        <div className="basis-4/5">
                            <input type='text' name="summary" onChange={handleInputChange} className={`custom-input ${errorData?.summary ? "red-border" : ""}`} />                            
                            <div className="custom-error">{errorData.summary ? errorData.summary : null}</div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <label className="basis-1/5 custom-display-label">Date</label>
                        <div className="basis-4/5">
                            <input type='date' name="currentDate" onChange={handleInputChange} className={`custom-input ${errorData?.currentDate ? "red-border" : ""}`} />                            
                            <div className="custom-error">{errorData.currentDate ? errorData.currentDate : null}</div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <label className="basis-1/5 custom-display-label">Activity</label>
                        <div className="basis-4/5">
                            <div className="flex">
                                <textarea name="activity" onChange={handleInputChange} className={`custom-input ${errorData?.activity ? "red-border" : ""}`} />              
                                <div className="flex flex-col justify-end text-xs basis-2/12">{activityCharCount} characters</div>
                            </div>
                            <div className="custom-error">{errorData.activity ? errorData.activity : null}</div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button className="primary-button" onClick={handleSubmitClick}>Submit</button>
                    </div>
                </form>
            </div>

            {/* List of Entries */}
            <div className="basis-1/5 border border-blue-500 p-4">
                List
            </div>

        </div>
    )
}

export default Home;