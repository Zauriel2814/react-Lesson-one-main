import {useState} from "react";
import DiaryEntry from "./DiaryEntry";
import DiaryHistory from "./DiaryHistory";

const Home = () => {

    const [diaryHistories, setDiaryHistories] = useState([]);

    const addDiaryHistory = (entry) => {
        setDiaryHistories((prevState) => [...prevState, entry]);
    }
    console.log(diaryHistories)
    return (
        <div className="flex">
            <DiaryEntry add={addDiaryHistory} />
            <DiaryHistory />
        </div>
    );
}

export default Home;