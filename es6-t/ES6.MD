1. 解构赋值

- 左右解构一样

```js
    let json = {a: 11, b: 12, c: 13};
    //let {a, b, c} = json;
    let [a, b, c] = [1, 2, 3];
```

2. 函数

- (1) 箭头函数
```js
/*window.onload = function () {
            alert("onload");
        };*/


window.onload = ()=>{
       alert("onload");
}
```

格式
```js
function (参数) {
  
}

(参数)=>{
    
}
```

- 如果只有1个参数的时候，可以省略()
```js
/* document.onclick = function (ev) {
            alert(ev.clientX + " " + ev.clientY);
        };*/

        document.onclick = ev => {
            alert(ev.clientX + " " + ev.clientY);
        };
```

- 如果函数体只有1个语句并且有1个return的时候，可以省略()
```js
let sum = (a, b) => a + b;
```

- js的this会变化的,箭头函数的this是不会变的


- (2) 参数展开