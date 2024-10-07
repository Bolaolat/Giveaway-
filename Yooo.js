const {
    smd,
    prefix, 
    Config ,
    sleep
} = require('../lib')

smd({
    cmdname: "payment",    
    type: "payment",    
    info: "payment",    
    filename: __filename,
},

async(citel) => {    
    await citel.send("*`Payment Details`*\n\n🔢 *Account Number: 7041039367*")    
    await sleep(1000);
}
)
