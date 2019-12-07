import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('ji')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'pittsburgh'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Oh no! Something went wrong!')
        }
    };
    useEffect(() => {
        searchApi('pizza')
    }, []);

    return [searchApi, results, errorMessage];
}
