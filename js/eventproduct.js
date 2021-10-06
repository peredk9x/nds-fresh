
const local = JSON.parse(window.localStorage.getItem('data'));
const localConcem = JSON.parse(window.localStorage.getItem('dataconcem'));
function renderLocal(){
    //Show Title
    var header = document.querySelector('.title_header')
    var nameTitle='';
    local.forEach((e)=>{
        return nameTitle+=`
                        <h2>${e.foodName}</h2>
                        <ul>
                            <li class="list_item"><a href="../index.html">Trang chủ</a></li>
                            <li>${e.foodName}</li>
                        </ul>     `
    })
    header.innerHTML=nameTitle
   //Show list anh
    var img_list = document.querySelector('.list_image_product')
    var img_listShow = document.querySelector('.list_image_show')
    var list_img=''
    var list_imgShow=''
    local.forEach((e)=>{
        return list_img+=`<img src='${e.image[0].imageUrl}' class="checked">
                            <img src='${e.image[1].imageUrl}'>
                            <img src='${e.image[2].imageUrl}'>`

    })
     local.forEach((e)=>{
        return list_imgShow+=`<img src='${e.image[0].imageUrl}' class="active">
                            <img src='${e.image[1].imageUrl}'>
                            <img src='${e.image[2].imageUrl}'>`

    })
    if(img_list &&img_listShow){
    img_list.innerHTML=list_img
    img_listShow.innerHTML=list_imgShow}
    // -----------------------------------
    //Name
    let namePr=document.querySelector('.name_and_status')
    let name=''
    local.forEach((e)=>{
        return name+=`<h2>${e.foodName}</h2>
                        <p>SKU: <b>(Updating....)</b></p>`
    })
    if(namePr){
    namePr.innerHTML=name}
    //Price
    let costPr = document.querySelector('.cost_info')
    let cost =``
    local.forEach((e)=>{
        return cost+=`<span>${e.price}&#8363</span>
                    <del>68.000&#8363</del>
                    <p>Tiết kiệm: <b>28.000&#8363</b> so với giá thị trường</p>
                    <p id="price"style="display:none">${e.price}</p>`
    })
    if(costPr){
    costPr.innerHTML=cost}
    
    
    //Thong tin san pham
    let info = document.querySelector('.detail_show .row-1')
    let info_detail=''
    local.forEach((e)=>{
        return info_detail+=`<p>${e.description}</p>`
    })
    if(info){
    info.innerHTML=info_detail}
}
renderLocal()
function renderConcem(){
    let concem_Pr= document.querySelector('.concem')
    let concem =''
    localConcem.map((e)=>{
        
        e.forEach(index=>{
            return concem+=`<div class="item_deal item_product">
            <div class="id_pr" style="display:none">${index.foodId}</div>
            <div class="cate_id" style="display:none">${index.cateId}</div>
                             <div class="sale-label"><p>-${index.sale}%</p></div>
                             <div class="product_transition" onclick="detail_PR()">
                                 <img src="${index.image[0].imageUrl}">
                                 <div class="product-action">
                                     <button><i class="fa fa-heart"></i></button>
                                     <button onclick="addToCart()"><i class="fa fa-shopping-bag"></i></button>
                                 </div>
                             </div>
                             
                             <div class="product-info">
                                 <a onclick="detail_PR()">${index.foodName}</a>
                                 <div class="cost">
                                     <span><span>${index.price}</span>&#8363</span>
                                     <del>50.000&#8363</del>
                                 </div>
                             </div>
                         </div>`
        })

        
    })
    if(concem_Pr){
    concem_Pr.innerHTML=concem}
}
renderConcem()
//Show anh
let img_checked = document.querySelectorAll('.list_image_product img')
let img_active = document.querySelectorAll('.list_image_show img')
 img_checked.forEach((render,index)=>{
    var img_check=img_active[index]
    render.onclick=()=>{
        document.querySelector('.list_image_show img.active').classList.remove('active')
        img_check.classList.add('active')
   
        document.querySelector('.list_image_product img.checked').classList.remove('checked')
        render.classList.add('checked')
    }
 })
 let list_row = document.querySelectorAll('.row')
 let detail_row = document.querySelectorAll('.detail')
 list_row.forEach((render,index)=>{
    var detail=detail_row[index]
    render.onclick=()=>{
        document.querySelector('.row.row-active').classList.remove('row-active')
        render.classList.add('row-active')
   
        document.querySelector('.detail.detail-active').classList.remove('detail-active')
        detail.classList.add('detail-active')
    }
}) 
//check btn
function price(){
    let btn_kg = document.querySelectorAll('.btn_choose div')
    for(let i=0; i<btn_kg.length;i++)
    {
            var total=0;

            btn_kg[i].onclick=()=>{
            document.querySelector('.btn_choose div.checked').classList.remove('checked')
            btn_kg[i].classList.add('checked')
            let nmb_kg=btn_kg[i].querySelector('span').innerHTML;
            let ipVl=document.querySelector('.input_value input').value
            let price = document.querySelector('.cost_info #price').innerHTML
            let cost = document.querySelector('.cost_info span')
            total = nmb_kg*ipVl*price
            cost.innerHTML=total + "&#8363"

        }
    }
}
price()
//input
function sumValue(){
    let ipVl=document.querySelector('.input_value input')
    var total = 0
    if(ipVl.value<999)
    {
           ipVl.value++
           let btn_kg = document.querySelector('.btn_choose div.checked .number_btn').innerHTML
           let price = document.querySelector('.cost_info #price').innerHTML
            let cost = document.querySelector('.cost_info span')

           total = btn_kg*price*ipVl.value
            cost.innerHTML=total +"&#8363"
        }
   
}
function minusValue(){
    let ipVl=document.querySelector('.input_value input')
    var total=0
    if(ipVl.value>1)
    {
           ipVl.value--
           let btn_kg = document.querySelector('.btn_choose div.checked .number_btn').innerHTML
           let price = document.querySelector('.cost_info #price').innerHTML
            let cost = document.querySelector('.cost_info span')

           total += btn_kg*price*ipVl.value
            cost.innerHTML=total +"&#8363"

    }
}
function inputVl(){
    let ipVl=document.querySelector('.input_value input')

            let btn_kg = document.querySelector('.btn_choose div.checked .number_btn').innerHTML
           let price = document.querySelector('.cost_info #price').innerHTML
            let cost = document.querySelector('.cost_info span')

           total = btn_kg*price*ipVl.value
            cost.innerHTML=total +"&#8363"
}

function product_Cart(){
    let btn = document.querySelector('.btn_add-cart')
    btn.onclick=()=>{
        let img_pr=document.querySelector('.list_image_show img:nth-child(1)').src
        let cost = document.querySelector('.cost_info span').innerHTML
        let name= document.querySelector('.name_and_status h2').innerHTML
        let ipVl=document.querySelector('.input_value input').value
        let btn_notifi = document.querySelector('.notifi')
        btn_notifi.classList.add('in-fo')
        setTimeout(()=>{
            btn_notifi.classList.remove('in-fo')
        },2000)
        render_cart(img_pr,cost,name,ipVl)
    }
}
product_Cart()
function render_cart(img_pr,cost,name,ipVl)
{
    const productAdd = document.createElement('div');
    productAdd.classList.add('list_product_add')
    document.querySelector('.list_add').appendChild(productAdd)
    var addPrCart =` 
                <div class="img_product_add">
                    <img src="${img_pr}">
                </div>
                <div class="info_product_add">
                    <h5>${name}</h5>
                    <p>So luong</p>
                    <span><button><i class="fa fa-minus minus"></i></button></span><input type="text" onkeyup="inputVl()" maxlength="3" min="0" class="number_product" value="${ipVl}"><span><button><i class="fa fa-plus sum"></i></button></span>
                </div>
                <div class="cost_product_add">
                    <h5><span>${cost}</span></h5>
                    <p class="clear_pr"onclick="clear_pr()">Bo san pham</p>
                    <p class="cost-display" style="visibility: hidden">${cost}</p>
                </div>
            </div>`
            productAdd.innerHTML=addPrCart
totalPR()

}


