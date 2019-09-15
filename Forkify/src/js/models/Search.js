import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults(query){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'd0f244efb955bcb02f797853716821f3';
    
        try {
            const res = await axios(`${proxy}https://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error){
            alert(error);
        }
    
    }
}


//export default 'I am an exported string';
