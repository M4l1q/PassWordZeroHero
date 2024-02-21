fetch('https://raw.githubusercontent.com/M4l1q/PassWordZeroHero/main/passw0rD_')
  .then(response => {
    if (!response.ok) {
        alert("jaringan tidak stabil");
        throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
      let pas = prompt("Password :");
        if (pas == data.replace(/[\r\n]/gm, '')) {
            let nik = prompt("NIK Target :");
            window.open("http://google.com/"+nik,"co");
        }
        else{
            alert("Password Salah!")
        }
    }
  )
  .catch(error => console.error('Fetch error:', error));
