process.on('message',(message)=>{
    console.log(`message from parent ${JSON.stringify(message)}`);
})
process.send({hi:" message asdlkfjasdlkfj"})