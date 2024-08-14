import React, { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { randomInteger } from '../../helpers/methods';


// Создайте экземпляр GiphyFetch с вашим API-ключом
const gf = new GiphyFetch('9NOVLZp7KqnkSa7bszSL8IXk3vvE477e');


const GifSearch = ({ query }) => {
    const [gifUrl, setGifUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGif = async () => {
            try {
                const { data } = await gf.search(query, {
                    limit: 20,
                    offset: randomInteger(0, 20)
                });
                if (data.length > 0) {
                    setGifUrl(data[0].images.fixed_height.url);
                } else {
                    console.log('No GIF found at the specified index');
                }
            } catch (error) {
                console.error('Error fetching GIF:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGif();
    }, [query]);

    return (
        <div>
            {loading ? <p>Loading...</p> : gifUrl ? <img src={gifUrl} alt={query} /> : <p>No GIF found</p>}
        </div>
    );
};

export default GifSearch;