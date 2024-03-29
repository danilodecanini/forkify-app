import axios from 'axios';
import  { key, proxy } from '../config';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(query) {
        try {
            const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
    
        } catch (error) {
            alert(error);
        }        
    }

}

// aad265480afb41187c61b768157de60d

// https://www.food2fork.com/api/search

// https://www.food2fork.com/api/get