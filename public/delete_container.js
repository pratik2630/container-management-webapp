const express = require("express")

const { exec } = require("child_process");

function delete_container(req, res) {

    // document.getElementById("deleteContainerMainBox").style.display = "block";

    var c_name = req.query.containerNameToDelete;
    console.log("c_name fron delete container js :"+c_name)
    cname = "docker rm " + c_name;

    exec(cname, (err, stdout, stderr) => {
        res.write("<br /><pre>Deleted " + stdout + "</pre>");

        res.send();

    })
}

module.exports = {
    delete_container,
}
