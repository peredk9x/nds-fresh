var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

//Su kien show gio hang
let btn_cart = $('.menu_right--cart')
let cart =$('.cart')
let list_cart = $('.list_cart')
btn_cart.onclick=()=>{
    cart.classList.toggle('active')
    list_cart.classList.toggle('active');
} 
let btn_close = $('.btn_close');
btn_close.onclick=()=>{
    cart.classList.toggle('active')
    list_cart.classList.toggle('active');
}

//Scroll Top
var scroll_top = $('.scroll-top');
var nav = $('nav')
window.addEventListener("scroll",()=>{
    var x= pageYOffset;
    if(x>500)
    {
        scroll_top.style.display="block";
        scroll_top.onclick=()=>{
        
            document.documentElement.scrollTop=0;
    }
    }
    else{
        scroll_top.style.display="none";
    }
})
//----------------------------

//Show anh product


//Xóa sản phẩm trong giỏ hàng


//Menu truot doc
var btn_tabmenu=document.querySelector('.nav_menu--left')

function tabmenu(){
   btn_tabmenu.classList.toggle('show');
   
}
//Show list menu
    var menuScroll = document.querySelectorAll('.menu_product') 
    var btn_click = document.querySelectorAll('.fa-ellipsis-h')
    for(let i=0;i<btn_click.length;i++){
        btn_click[i].onclick=(e)=>{
            var menuScroll=e.target.parentElement.parentElement.parentElement.parentElement;
            menuScroll.classList.toggle('height')
        }
    }
    
//filter
let filter_btn=document.querySelector('.filter')
let list_filter = document.querySelector('.section_list_menu')
filter_btn.onclick=()=>{
    list_filter.classList.toggle('actived')
    filter_btn.classList.toggle('op')
}
function Pr_all(){
    let product_list_all= document.querySelector('.list_products')
    let html='';
    datas.forEach((index)=>{
        return html+=` <div class="section_list-deal product_list product_list_all">
        <div class="item_deal item_product">
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
                     </div>
                     </div>`
                            
    })
    product_list_all.innerHTML=html
}
Pr_all()
