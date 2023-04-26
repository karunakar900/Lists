import React, { useEffect, useState } from "react";

const Fetch = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            setdata(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    )
}

export default Fetch;
