function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // 輸出成 json
}



function submit(){
    const pleasewait = "DATA PROCESSING AND MODEL BUILDING...PLEASE WAIT"
    document.getElementById('resultText').innerHTML=pleasewait
    
    const courseid=document.getElementById('courseid').value;
    const startdate=document.getElementById('startdate').value;
    const studentid=document.getElementById('studentid').value;
    
    const data = {
        courseid,
        startdate,
        studentid
    }
    
    postData('https://character-persona.herokuapp.com/table', data)
    .then(data => {
        const result = JSON.stringify(data);
        document.getElementById('resultText').innerHTML=result;
    })
    .catch(error => console.error(error))
}
