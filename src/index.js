import x from './x.js'
console.log(x)

// import jpg from './assets/1.jpg'
// console.log(jpg)
const div = document.getElementById('app')
// div.innerHTML = `
//     <img src="${jpg}">
// `


const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy.js') //异步，Promise
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(button)