let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    try {
        const result = await fetch('https://t.ly/api/v1/link/shorten', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YLUw4oMeJhbg6ImKlkWnhfI2zqSJJn5cfs9QfdbbqOFJsZhQ7pUJawStgw0O', // Replace with your t.ly API key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ long_url: longURL })
        });

        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const data = await result.json();
        shortURL.value = data.short_url;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to shorten URL. Please try again later.');
    }
}
