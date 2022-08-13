const express = require("express")

const { exec } = require("child_process");

function delete_all_container(req, res) {

   
        cname = "docker rm `docker ps -a` " ;
    res.write(cname)

	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");

      res.send();
        
	})
}

module.exports = {
    delete_all_container
}
