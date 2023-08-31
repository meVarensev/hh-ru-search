import axios from "axios";
import {baseServerUrl, baseUrl} from "./url";
import {ResponseData} from "./types";
import {regExpURL} from "../helpers/reg-exp-url";


export const postDb = async (url: string) => {
    try {
        const response = await axios.get(baseServerUrl);
        const existingData = response.data;
        const urlExists = existingData.some((item: { url: string }) => item.url === url);

        if (!urlExists) {
            await axios.post(baseServerUrl, {url: url});
        }

    } catch (error) {
        throw error;
    }
}

export const getDb = async () => {
    try {
        const response = await axios.get(baseServerUrl);
        return await response.data.map((item: { url: string }) => item.url)
    } catch (error) {
        throw error;
    }
}



export const handleSubmit = async (values: { url: string }) => {
    const {url} = values;

    if (!url) {
        console.log("URL is required.");
        return;
    }

    const vacancyId = regExpURL(url)

    try {
        if (vacancyId) {
            await postDb(vacancyId)
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error occurred while fetching vacancy data:", error.message);
        }
    }
};


export async function fetchVacancyData(vacancyId: string) {
    try {
        if (vacancyId) {
            const response = await axios.get(`${baseUrl}${vacancyId}`);
            return await response.data;
        }

    } catch (error) {
        throw error;
    }
}


export async function fetchAllData() {
    const urls = await getDb()
    if (!urls) {
        return
    }
    try {
        const data: ResponseData[] = await Promise.all(
            urls.map(async (vacancyId: string) => {
                return await fetchVacancyData(vacancyId)
            })
        );

        return data
    } catch (error) {
        console.error(error);
    }
}
