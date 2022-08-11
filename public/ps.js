const express = require("express")

const { exec } = require("child_process")
function ps_code(req, res) {
     exec("docker ps | tail -n +2", (err, stdout, stderr) => {
      //  exec("docker ps | sed '1d;$d'", (err, stdout, stderr) => {
        let a = stdout.split("\n");
        res.write("<table  align='center' width='80%'>");
        // res.write(`<tr>
        //                 <th>Container ID</th>
        //                 <th>Image Name</th>
        //                 <th>Command</th>
        //                 <th>Container name</th>
        //             </tr>`)
                    // let cinfo = a.trim().split(/\s+/)
                     //console.log("a:"+typeof a)
                    //console.log(cinfo)

        a.forEach((cdetails) => {
           console.log("cdetails:" +typeof cdetails)
            const cinfo = cdetails.trim().split(/\s+/)
                console.log("cinfo:"+typeof cinfo)
                console.log(cinfo)
                res.write("<tr>" + "<td>" + cinfo[0] + "</td>" + "<td>" + cinfo[1] + "</td>" + "<td>" + cinfo[2] + "</td>" + "<td>" + cinfo[cinfo.length - 1] + "</td>" + "</tr>")    
      })
        res.write("</table>")
        res.send()
        //res.send("<pre>"+stdout+"</pre>")
    })
}

module.exports = {
    ps_code,
}
