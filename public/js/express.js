$( document ).ready(function() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    var params = {test:'test'};
    var link ='test';
    var myInit = { method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };
    fetch(link,myInit)
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
});