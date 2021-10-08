/**
 * 包装防抖函数
 * @param { Function } fn 需要被包装的函数
 * @param { Object } thisArg this
 * @param { Number } delay 延时
 * @returns { Function } 防抖函数
 */
 export const debounce = (fn, thisArg, delay = 300)=>{
    let timmer;
    return args => {
        clearTimeout(timmer)
        timmer = setTimeout(fn.bind(thisArg), delay, args);
    }

}