const csv = require('csv-parser');
const fs = require('fs');

const filepath = "./input_countries.csv"

const file1 = './canada.txt'
const file2 = './usa.txt'
try {
     //file removed if exists
    fs.unlinkSync(file1)
    console.log("file has been removed : canada.txt")
    fs.unlinkSync(file2)
    console.log("file has been removed : usa.txt")
} catch(err) {
    console.log(err)
}

fs.createReadStream(filepath)
    .on('error', (err) => {
        console.log(err)
    })

    .pipe(csv())
    .on('data', (row) => {
        
        if(row['country'] == "Canada")
        {
            var str = `${row['country']}, ${row['year']}, ${row['population']}\n`
            fs.appendFile('canada.txt',str, function (err) {
                if(err)()=> {console.log(err)};
            });

        }
        
        else if(row['country'] == "United States")
        {
            var str = `${row['country']}, ${row['year']}, ${row['population']}\n`
            fs.appendFile('usa.txt', str, function (err) {
                if(err)()=> {console.log(err)};
            });
        }
    })
    .on('end', () => {
        console.log("successfully completed")
    })