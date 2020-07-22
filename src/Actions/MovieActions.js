import axios from "axios";
import { API_URI } from "../consts/consts";

export const getAllMovies = async () => {
    try {
         return await axios.get(`${API_URI}/`).then(res => {
            return res.data;
        });
    } catch (error) {
        console.log(error)
    }
}

export const getUniqueMoviesList = async () => {
    try {
        return await axios.get(`${API_URI}/unique-movies`).then(res => res.data);
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesWithPromoBanner = async () => {
    try {
        return await axios.get(`${API_URI}/get-promo-Movies`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesWithList = async () => {
    try {
        return await axios.get(`${API_URI}/getAllMoviesWithLocation`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesLocations = async () => {
    try {
        return await axios.get(`${API_URI}/locations-list`).then(res => res.data)
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesDetails = async (title,locations) => {
    try {
        return await axios.get(`${API_URI}/get-movies-details`, {
            params: {
                "title":title,
                "location":locations
              }
        }).then(res => res.data)
    } catch (error) {
        console.log(error)
    }
}