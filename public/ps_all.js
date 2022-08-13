const express = require("express")

const { exec } = require("child_process")
function psall_code(req, res) {
    // res.write(alert("hi"))
     exec("docker ps -a| tail -n +2", (err, stdout, stderr) => {
      //  exec("docker ps | sed '1d;$d'", (err, stdout, stderr) => {
        let a = stdout.split("\n");
        res.write("<table  align='center' width='80%'>");

        a.forEach((cdetails) => {
        
            const cinfo = cdetails.trim().split(/\s+/)
            res.write("<tr>" + "<td>" + cinfo[0] + "</td>" + "<td>" + cinfo[1] + "</td>" + "<td>" + cinfo[2] + "</td>" + "<td>" + cinfo[cinfo.length - 1] + "</td>" + "</tr>")    
      })
        res.write("</table>")
        res.send()
        
    })

}

module.exports = {
    psall_code,
}
