let string = "";
    let buttons = document.getElementsByTagName('button');
    Array.from(buttons).forEach((button) => {
      button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
         let take= document.getElementById('text').value;
            take=eval(take)
            string=take
         document.getElementById('text').value=string;
        }
        else if (e.target.value == 'c') {
          string = ""
          document.getElementById('text').value = string;
        }
        else {
          // console.log(e.target)
          string = string + e.target.value;
          document.getElementById('text').value = string;
        }
      })
    })