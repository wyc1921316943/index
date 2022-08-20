var imgs = document.getElementById('img1')
var address = ['../imgaes/xiaomi-816.png','../imgaes/xiaomi-huiyi.png','../imgaes/redmi-k50-zhizhong.png']
var len = address.length
var str = ''
var pp = document.getElementById('bt3')
var bt1 = document.getElementById('bt1')
var bt2 = document.getElementById('bt2')
var n = 0
for (let i = 0; i < len; i++) {
    str += '<a href = "#"></a>'
}
pp.innerHTML = str
var spans = pp.getElementsByTagName('a')
spans[0].className='active'
for (let i = 0; i < len; i++) {
    spans[i].index=i
    spans[i].onclick = function(){
        for (let i = 0; i < len; i++) {
           spans[i].className = ''
        }
        n=this.index
        this.className='active'
        imgs.src = address[this.index]
    }
}
bt2.onclick = function(){
    n++
    if (n>2) {
        n=0
    }
    for (let i = 0; i < len; i++) {
        spans[i].className=''
    }
    spans[n].className = 'active'
    imgs.src = address[n]
}
bt1.onclick = function(){
    n--
    if (n<0) {
        n = (len-1)
    }
    for (let i = 0; i < len; i++) {
        spans[i].className=''
    }
    spans[n].className = 'active'
    imgs.src = address[n]
}
$('.xiazai').hover(function(){
    $('.erweima').stop().slideToggle()
})
