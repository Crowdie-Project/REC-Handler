//LICENSE GOES HERE!

import Papa from 'papaparse';
const fs = require('fs').promises;

export default class CKPP_Resolver {
 
  //options
  static locale = "EN";

  //storage
  static CategoriesCSV = {};
  static CodesCSV = {};
  static Categories = {};

  /**
  *Init CKPP_Resolver
  */
  static async init() {
  	//TODO: ADD LOCALE SELECTION
    //this.locale="EN";
    this.CategoriesCSV = await (this.loadCSV('./localization/EN/categories.csv'));
    this.CodesCSV = await (this.loadCSV('./localization/EN/code-table.csv'));

    this.Categories=Object.fromEntries(
    		Object.entries(this.CategoriesCSV)
    		.map(([ key, val ]) => [ val.Head, val.Translation ]));
  }

  /**
  *Read from csv
  */
  static async loadCSV(filename){

  	const CSVconfig = {header: true};

	let { data: CSV, error } = await fs.readFile(filename, 'utf-8')
	.then(csv => Papa.parse(csv,CSVconfig));
    if (error) console.log("error", error);
    else{
      return CSV;
    }
  }

  /**
  *Return name of code
  */

//list category

//return start of finish or finish of start

  //Call to reinit with different options
  static async reinit(){
  	this.init();
  }

}

CKPP_Resolver.init();