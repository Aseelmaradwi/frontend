let courcename=document.getElementById('courcename');
let courcecategory=document.getElementById("courcecategory");
let courceprice=document.getElementById("courceprice");
let courcediscription=document.getElementById("courcediscription");
let cor=[];
let data = document.getElementById('data');

function addcource(){
    let corces={
         cname:courcename.value,
         ccat:courcecategory.value,
         cprice:courceprice.value,
         cdisc:courcediscription.value,
    }
cor.push(corces);
displayCourse();
clearinput();
}
function displayCourse(){
    let result=``;
    for(let i=0;i<cor.length;i++){
        result+=`
    <tr>
                <td>${i}</td>
                <td>${cor[i].cName}</td>
                <td>${cor[i].ccat}</td>
                <td>${cor[i].cprice}</td>
                <td>${cor[i].cdisc}</td>
                </td>
             
            </tr>
        `;
    }
    data.innerHTML=result;
}
function clearinput(){
    courcename.value="";
    courcecategory.value="";
    courceprice.value="";
    courcediscription.value="";
}


