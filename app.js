// var url = require('url');
// var fs  = require('fs');

// function renderHTML(path, response){
//     fs.readFile(path, null, function(error, data){
//         if(error){
//             response.writeHead(404);
//             response.write('file not found')
//         }else{
//             response.write(data)
//         }
//         response.end();
//     });
// }

// module.exports = {
//     handleRequest : function(request, response){
//         response.writeHead(200, {'Content-Type' : 'text/html'});

//         var path = url.parse(request.url).pathname;
//         switch(path){
//             case '/' :
//                 renderHTML('./index.html', response)
//                 break;
//             case '/login' :
//                 renderHTML('./login.html', response)
//                 break;
//             case '/contact' :
//                 renderHTML('./contact.html', response)
//                 break;
//             default : 
//                 response.writeHead(404);
//                 response.write('router not defined!');
//                 response.end();
//         }
//     }
// }

var url = require('url');
var fs  = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('file not found');            
        }else{
            response.write(data)
        }
        response.end();
    })
}

module.exports = {
    handleRequest : function(request, response){

        var path = url.parse(request.url).pathname;
        switch(path){
            case '/' :
                renderHTML('./index.html', response)
            break;
            case '/contact' :
                renderHTML('./contact.html', response)
            break;
            case '/login' :
                renderHTML('./login.html', response)
            break;
            default :
                response.writeHead(404);
                response.write('Routing not defined');
                response.end();
        }
    }
}











