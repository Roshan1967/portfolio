localStorage.setItem("key","24")

let value = localStorage.getItem("key")
console.log(typeof value)

let arr = [1,2,3,4,5,6,7,8]

localStorage.setItem("arr",JSON.stringify(arr))

let values = JSON.parse(localStorage.getItem("arr"))
console.log(values)
console.log(typeof values)