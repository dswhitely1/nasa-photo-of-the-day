import axios from 'axios';
import {api_key} from '../secrets/secret';

export default axios.create({
	baseURL : `https://api.nasa.gov/planetary/apod?api_key=${api_key}`,
});
