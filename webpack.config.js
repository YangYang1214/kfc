const path=require('path');
module.exports = {
    entry:'./src/script/main.js',
    output:{
        path:'./dist/js',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                
                    test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                    loader: 'url-loader?limit=100000'
                  
            }
        ]

    }}