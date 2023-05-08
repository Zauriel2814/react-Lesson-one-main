const DiaryHistory = ({ data, setSelectedEntry }) => {

    console.log("Data:", data);
    const handleEntryOnClick = (entry) => {
        setSelectedEntry(entry);
    }
    // This is a functional component within a functional component
    const List = () => {
        return (
            <ul>
                {
                    data.map(d => {
                        return <li key={d.id} className="text-sm"><a onClick={()=>{handleEntryOnClick(d)}} className="underline cursor-pointer">{d.summary}</a> ({d.currentDate})</li>
                    })
                }
            </ul>
        );
    }

    return (
        <div className="basis-1/5 border border-blue-500 p-4">
            <div className="font-semibold">Histories</div>
            {
                // This is a conditional rendering
                data.length > 0 ? <List /> : <div className="italic text-sm">No items yet</div>
            }
        </div>
    );
}

export default DiaryHistory;