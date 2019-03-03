'use strict';

const uuid = require('uuid/v4');

// Schemas in mongoose are just objects
// This is not a real mongoose schema, just an object that
// looks like a schema
const schema = {
  // name (think about this as your "column" : {DESCRIPTION}
  id: {required:true},
  name: {required:true},
};

class Team {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter( (record) => record.id === id ) : this.database;
    return Promise.resolve(response);
  }

  post(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if ( record.id ) { this.database.push(record); }
    return Promise.resolve(record);
  }

  put(id, entry) {
    let record = this.sanitize(entry);
    if( record.id ) { this.database = this.database.map((item) => (item.id === id) ? record : item  ); }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id );
    return Promise.resolve();
  }

  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(schema).forEach( field => {
      if ( schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Team;