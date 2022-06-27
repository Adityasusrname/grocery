
const ul=document.querySelector('ul')
const inputField=document.getElementById('inputField')
const submitButton=document.getElementById('submitButton').setAttribute('onClick','postItem()')

 function postItem(){

    const d={
        name:inputField.value
    }
    
    fetch('/item',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',

        },
        body: JSON.stringify(d),
    }).then(response=>response.json())
    .then(

        (data)=>{
            
            if(data.success == true){
            let li=document.createElement('li')
            li.appendChild(document.createTextNode(d.name.toString()))
            ul.appendChild(li)
            
        }
    }

    )

}

function getItems(){
    fetch('/items')
    .then((res)=>res.json())
    .then((data)=>{
        
        data.forEach((x) => {
            let li=document.createElement('li')
            li.appendChild(document.createTextNode(x.name.toString()))
            ul.appendChild(li)
         })})
    
        

       


    
    
}



getItems()