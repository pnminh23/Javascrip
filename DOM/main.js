var item = document.getElementById('heading');
console.log(item)
var listitems = document.getElementsByClassName('name')
console.log(listitems[0])
var listBoxItems = document.getElementsByClassName('box')
console.log(listBoxItems[0])
console.log(listBoxItems[0].querySelector('li'))

var h1Element = document.querySelector('#heading')
console.log(h1Element) 
h1Element.setAttribute('href','https://www.facebook.com/pnminh305')
// set giá trị cho attribute node
console.log(h1Element.getAttribute('id'))
console.log(h1Element.innerText)
// inner text trả về đoạn text giống nhu những gì nhìn thấy dc trên trang web
//innerText là thuộc tính của elementNode

console.log(h1Element.textContent)
// textContent trả về đoạn text thật ko hề bị ảnh hưởng bởi css
// textContent là thuộc tính tồn tại trên cả elementNode và textNode
h1Element.innerText = '<i>HELLO</i>'
// ko thể đọc dc code mà đoạn code trình duyệT sẽ tự hiểu đó là text
h1Element.innerHTML = '<i>HELLO</i>'
//innerHTML đọc dc code dùng để thêm elementNode, attributeNode và textNode
// innerHTML để viết code vào bên trong elementNode đã chọn
// khi set bằng innerHTML nó sẽ thay thế tất cả các thẻ con bên trong elementNode đã chọn
// outerHTML để viết code bên ngoài, thay thế luôn cả elemnetNoded đã chọn

