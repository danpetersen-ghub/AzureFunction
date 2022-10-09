class name {
    constructor(name){
        this.name = name;
        this.dateCreated = new Date().toLocaleDateString('en-GB');
    }
    log() {
        return `Person Created with Name: ${this.name} on ${this.dateCreated}. `
    }
}

module.exports = name; 

