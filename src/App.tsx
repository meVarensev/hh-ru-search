import './App.css';
import {Form} from "./components/form/form";
import {TableSort} from "./components/table/table";
import {ResponseData} from "./api/types";
import {useEffect, useState} from "react";
import {fetchAllData, fetchVacancyData} from "./api/fetch-data";
import {regExpURL} from "./helpers/reg-exp-url";


function App() {
    const [mockData, setMockData] = useState<ResponseData[]>([]);
    const [value, setValue] = useState("");
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if (initialRender) {
                const allData = await fetchAllData();
                if (allData) {
                    setMockData(allData);
                }
                setInitialRender(false);
                return;
            }

            const vacancyId = regExpURL(value);
            if (vacancyId) {
                const data = await fetchVacancyData(vacancyId);
                if (data) {
                    setMockData((prevState) => [...prevState, data]);
                }
            }
        }

        fetchData();
    }, [initialRender, value]);



    return (
        <div className='App'>
            <Form setValue={setValue}/>
            <TableSort data={mockData}/>
        </div>
    );
}

export default App;
