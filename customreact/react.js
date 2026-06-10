// task 1 : Understand how react convert html elements into objects 
// task 2 : Open 01vitereact folder 

const mainContainer = document.getElementById('root');

const customReact = {
    type : 'a',
    props : {
        href : 'https://chatgpt.com',
        target : '_blank'
    },
    child : 'Click me' 
}

function createEle(react , con){
    const ele = document.createElement(react.type)
    ele.innerHTML = react.child
    for(const i in react.props){
        ele.setAttribute(i,react.props[i])
    }

    con.appendChild(ele)
}

createEle(customReact , mainContainer);