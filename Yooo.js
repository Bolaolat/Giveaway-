const {
    smd,
    prefix, 
    Config ,
    sleep
} = require('../lib')

smd({
    cmdname: "accz",    
    type: "payment",    
    info: "payment",    
    filename: __filename,
},

async(citel) => {    
    await citel.send("*`Payment Details`*

🔢 *Account Number: 7041039367*
🏦 *Bank: PalmPay*

```Feel free to reach out if you need further assistance!```")    
    await sleep(1000);
}
)
