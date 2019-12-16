// const yargs = require('yargs');
const notes = require('./nt.js');

// const argv= require('argv');
// const argv=yargs.argv;

var title =process.argv[4];

var body =process.argv[6];

// var title= yargs.argv.title;
// var body= yargs.argv.body;

// const command= yargs.argv._[0];

 var command =process.argv[2];

if (command === "add")
{
    if (title && body)
    {
    console.log('add new notes');
    notes.addingNote(title,body);
    }
     if (typeof title === "undefined")
    {
        console.log('pls title')
        notes.help()
    }
    if (typeof body === "undefined") 
    {
            console.log('pls body');
            notes.help();
    }
}
else if (command === "remove")
{       
    if(title)
    {
         console.log('remove notes');
    notes.removeNote(title);
    }
    else if (typeof title === "undefined" )
    {
        notes.help();
        console.log('pls title');
    }
   
}
else if(command === "read") 
{
    console.log('read files');
    notes.readNote(title);
}
else if (command === "lister")
{
    console.log('afficher la liste');
    notes.GetAll();
}
else if (command ==="help")
{
    console.log('help');
    notes.help();
}
else 
{
    console.log('pls try again');
    note.help();
}