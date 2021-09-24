import axios from 'axios';

const KEY = 'AIzaSyDJtKqcwA3iBOVJYkE21rUDD3kPBvKNLzE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
