const express = require("express")

const { exec } = require("child_process")
function dimage_code(req, res) {
     exec("docker images | tail -n +2", (err, stdout, stderr) => {
     
        let a = stdout.split("\n");
        res.write('<table id="image_table_content">'); 
        // align='center' width='80%'
       
        a.forEach((cdetails) => {
            const cinfo = cdetails.trim().split(/\s+/)
                res.write("<tr>" + "<td>" + cinfo[0] + "</td>" + "<td>" + cinfo[1] + "</td>" + "<td>" + cinfo[2] + "</td>" + "<td>" + cinfo[cinfo.length - 1] + "</td>" + "</tr>")    
      })
        res.write("</table>")
        res.send()
    })
}

module.exports = {
    dimage_code,
}
