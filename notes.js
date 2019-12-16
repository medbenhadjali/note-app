
// const list = process.argv[2];
const fs = require ('fs');
const notes=require('./note.json')

var fetchNote =()=>{
    try 
    {
        return console.log(JSON.parse(fs.readFileSync('./note.json')));
    }
    catch (err)
    {
        return [];
    }
}

var addNote =(title,body)=>{
    var notes = fetchNote();

    var note ={
        title,
        body
    }
    JSON.parse(notes).concat(note);
    
    fs.writeFileSync("./note.json",JSON.stringify(notes));
    console.log(notes)
}

 
const removeNotes = (title)=>
{
    var notes=fetchNote()
    var deleteNotes = JSON.parse(notes).filter(el => el.title === title);
    fs.writeFileSync("./note.json",JSON.stringify(deleteNotes),"utf8");
    console.log(deleteNotes);
    // console.log(notes);


}



module.exports=
{
    addNote,
    removeNotes

}