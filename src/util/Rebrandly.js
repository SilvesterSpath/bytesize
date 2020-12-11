// Information to reach API
const apiKey = '4643e66af34b477d8ac4df7ec64b0e2c';
const url = 'https://api.rebrandly.com/v1/links';

const Rebrandly = {
    async shortenUrl(urlToShorten) {
        const data = JSON.stringify({destination: urlToShorten});

        try {
            const response = await fetch(url, {
                headers: {
                    "Content-type": "application/json",
                    'apikey': apiKey,
                },
                method: 'POST',
                body: data
            });
            if(response.ok){
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                return {
                    id: jsonResponse.id,
                    shortUrl: jsonResponse.shortUrl
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
};

export default Rebrandly;