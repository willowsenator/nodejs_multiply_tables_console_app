const  fs = require("fs");
require("colors");

const createFileTable = async (base, list, limit) => {
    try {
        let salida = '';
        let consoleOutput = '';
        let fileName = `output/tabla-${base}.txt`;

        for (let i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consoleOutput += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
        }

        if (list){
            console.log("=============================".rainbow);
            console.log(`Tabla del: ${base}`.rainbow);
            console.log("=============================".rainbow);
                console.log(consoleOutput);    
        }
        
        fs.writeFileSync(fileName, salida);
        return fileName;
    } catch(err) {
        throw err;
    }
}

module.exports = {createFileTable};