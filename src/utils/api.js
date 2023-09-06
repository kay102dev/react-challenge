/**
 * fetch data from a URL using the Fetch API.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {object} [options] - An optional object containing fetch options.
 * @returns {Promise<any>} A Promise that resolves to the fetched data.
 * @throws {Error} If the network response is not OK or an error occurs during fetching.
 *
 * @example
 * // basic usage:
 * const data = await fetchData('https://kayngoatje.com/api/data');
 *
 * // with fetch options if there was auth jwt token required:
 * const options = {
 *   method: 'GET',
 *   headers: {
 *     'Authorization': 'Bearer token',
 *   },
 * };
 * const data = await fetchData('https://kayngoatje.com/api/data', options);
 */

export async function fetchData(url, options = {}) {
    try {
        const requestOptions = {
            ...options,
            headers: {'Content-Type': 'application/json', ...options.headers}
        }
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
