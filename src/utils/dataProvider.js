import React, {createContext, useContext, useEffect, useState} from 'react';
import {fetchData} from './api';
import {API_URL} from "../config";

/**
 * creates a context for managing API data.
 * @type {React.Context}
 */
const ApiContext = createContext();

/**
 * Provides API data to the app using Reacts Context API.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 */
const ApiProvider = ({children}) => {
    /**
     * State to store the fetched data.
     * @type {Array}
     */
    const [data, setData] = useState([]);

    useEffect(() => {
        /**
         * Fetch slider data from the API and update the state.
         * @returns {void}
         */
        async function fetchSliderData() {
            try {
                const result = await fetchData(API_URL('api/data'));
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchSliderData();
    }, []);

    return (
        <ApiContext.Provider value={data}>
            {children}
        </ApiContext.Provider>
    );
}
/**
 * Custom hook to access API data from the context.
 * @returns {Array} The fetched API data.
 */
const useApiData = () => {
    return useContext(ApiContext);
};

export {ApiProvider, useApiData};