import axios from 'axios';

const URL_GET_JOBS = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';

export const serviceGetJobs = async () => {
    try {
        let req = await axios.get(URL_GET_JOBS)

        if (!req || !req.data) {
            throw new Error('Getting no response from API');
        }

        return req.data.vagas ?? [];
    } catch (e) {
        console.error(e);
        return [];
    }
}