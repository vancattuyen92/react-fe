import httpRequest from "services/httpRequest";

export const fetchPhotos = async () => {
    const res = await httpRequest.get(`https://tony-json-server.herokuapp.com/api/photos`)
    return res.data;
}

export async function fetchSinglePhoto(id) {
    const res = await httpRequest.get(`https://tony-json-server.herokuapp.com/api/photos/${id}`);
    return res.data;
}