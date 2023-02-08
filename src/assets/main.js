const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LEXZO4hjzVk6wO3G9pJyQ&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content');
const array = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '486b1b15b0msh22f8218fd2d280ap12ae74jsnac9e36e1c681',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlAPI) {
    const response = await fetch(urlAPI, options);
    return response.json();
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>
        `).slice(0,7).join('')}`;
        document.content.appendChild(view);
    } catch (err){
        console.log(err);
    }
})();
