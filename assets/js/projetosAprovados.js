document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        const appUrl = "https://script.google.com/macros/s/AKfycbwa2JkI5j0jAH6apaztT8PO2wLuUjelxcsE9WiVAjSOCDCrReQCW3Yyo-7DgWD3_iCfdg/exec";
        const sheetUrl = "1kbtETCCR_BzUKkZvAi_Jh-Ewy9GXWSMEPR0TzrVf9Wc"

        if(sheetUrl != ""){
            const url = appUrl + "?id=" + sheetUrl ;
            const table = document.getElementById("aprovados");

            fetch(url)
            .then(data => {return data.clone().json();})
            .then(res =>  { 
                const descriptions = res['descriptions'];
                const projects = res['projects'];
                for(let i in descriptions) {

                    if(projects[i][0].length == 0 ) continue;

                    const row = table.insertRow(-1);
                    const number = row.insertCell(0);
                    const project = row.insertCell(1);
                    const desc = row.insertCell(2);

                    number.appendChild(document.createTextNode(parseInt(i) + 1));
                    project.appendChild(document.createTextNode(projects[i]));
                    desc.appendChild(document.createTextNode(descriptions[i]));

                }
            })
            .catch(error => { console.log(error); });
        }
    }
});
