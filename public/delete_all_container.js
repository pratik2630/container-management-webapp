const express = require("express")

const { exec } = require("child_process");

function delete_all_container(req, res) {

    var c_name = req.query.containerAllToDelete;
    console.log(typeof c_name)
    console.log("from js file "+c_name)
    // var Delete = "Delete"
    
    if (c_name==="Delete") {
        console.log("delete")
        cname = "docker rm `docker ps -a` " ;
        exec(cname , (err , stdout , stderr)=>{
            res.write("<br /><pre>"+stdout+"</pre>");
        })    

        
    }
    else{
        console.log("false")
        res.write('<script>alert("Enter correct spelling")</script>')
     
    }
    
    // if (confirm("delete all")) {
    //     cname = "docker rm `docker ps -a` " ;
    //     res.write(cname)
    
    //     exec(cname , (err , stdout , stderr)=>{
    //         res.write("<br /><pre>"+stdout+"</pre>");
    //     })    
    //   } else {
    //     txt = "You pressed Cancel!";
    //   }
      
   
      res.send();
        
//	})
}

module.exports = {
    delete_all_container
}
