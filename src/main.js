let str = `/* 你好，我叫小白
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    width: 200px;
    height: 200px;
    border:1px solid red;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius:50%;
    box-shadow:0 0 2px rgb(0 0 0 / 50%);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(2,0,36,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 最后来个点睛之笔*/
#div1::after{
    position: absolute;
    content:'';
    left:25%;top:0;
    width:50%;
    height:50%;
    background-color: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::before{
    position: absolute;
    content:'';
    right:25%;bottom:0;
    width:50%;
    height:50%;
    background-color: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 25%);
}`

let codeHtml = document.querySelector('.code');
let style = document.querySelector('style')
let i = 0;
let strTemp = '';
let step = () => {
    if (i < str.length) {
        setTimeout(() => {
            if (str[i] === '\n') {
                strTemp += '<br>'
            } else if (str[i] === ' ') {
                strTemp += '&nbsp'
            } else {
                strTemp += str[i] // 获取一个修改一个，如果直接赋值substring(0,i+1)前面的修改会被覆盖
            }
            codeHtml.innerHTML = strTemp;
            style.innerHTML = str.substring(0, i + 1);
            window.scrollTo(0, 9999);
            codeHtml.scrollTo(0, 9999);
            i++;
            step();
        }, 10)
    }
}
step();