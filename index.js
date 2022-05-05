let ip = document.querySelector('input');
let ul = document.querySelector('ul');
ip.addEventListener('keydown',function(e){
     if(e.key=='Enter'){
        let task = ip.value;
        if(task!=''){
        ip.value = "";
        let liTag = document.createElement('li');
      // liTag.innerText = task;
       liTag.innerHTML = `<div id="ok">${task}</div>
                             <div class="icons">
                             <i class="fa fa-trash delete" ></i></div>`
       handleDelete(liTag);
      // handleEdit(liTag);
       ul.appendChild(liTag);
        }
     }
})

let pIcon = document.querySelector('#icon');

pIcon.addEventListener('click',function(e){
     let task = ip.value;
     if(task!=''){
          ip.value='';
          let liTag = document.createElement('li');
      // liTag.innerText = task;
       liTag.innerHTML = `<div id="ok" >${task}</div>
                           <div class="icons">    
                           <i class="fa fa-trash delete" ></i></div>`
       
       handleDelete(liTag);
       ul.appendChild(liTag);
      // handleEdit(liTag);
      // <i class="fa fa-pencil-square-o edit" id = "edit" aria-hidden="true"></i>
      // handleSave(liTag)

     }
})

// function handleSave(liTag){
//      console.log('ok')
//      let saveDiv = liTag.querySelector('.edit.fa-save');
//      let data = liTag.querySelector("#ok");
//      saveDiv.addEventListener('click',function(){
//           console.log(saveDiv);
//           data.setAttribute("contentEditable", "false");
//           data.style.color="#420039";
//           liTag.style.backgroundColor = "#E2CFEA";
//           let list = liTag.querySelector('#edit');
//           list.classList.remove('fa','fa-save');
//           list.classList.add('fa','fa-pencil-square-o');


//      })
// }

// function handleEdit(liTag){
//      let editDiv = liTag.querySelector('.edit.fa-pencil-square-o');
//      let data = liTag.querySelector("#ok");
//      editDiv.addEventListener('click',function(){
//            data.setAttribute("contentEditable", "true");
//            data.style.color="red"
//            liTag.style.backgroundColor = "yellow"
//            //liTag.querySelector('.edit').removeAttribute('id');
//            let list = liTag.querySelector('#edit');
//            liTag.querySelector('.edit').id = 'save';
//            //console.log(list.classList)
//            list.classList.remove('fa','fa-pencil-square-o');
//            list.classList.add('fa','fa-save');
//            console.log(list.classList);

//           // editDiv2 = liTag.querySelector('.edit');
//      })
     
//       let ans =  liTag.querySelector('#save');
//      console.log(ans);

// }

 function handleDelete(liTag){
     let deleteDiv = liTag.querySelector('.delete');
     deleteDiv.addEventListener('click',function(){
           liTag.remove();
     })
}

