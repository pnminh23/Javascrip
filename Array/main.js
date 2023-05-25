/**
 * Làm việc với array
 * toString
 * join
 * pop
 * push
 * shift
 * unshift
 * splicing
 * concat
 * slicing
 */
var champ = [
    'Yasuo',
    'Leesin',
    'Darius',
    'Jhin',
    'Amumu',
    'Teemo',
    'Ashe'
]
console.log(champ)
console.log('----toString----')
console.log(champ.toString())
console.log(typeof champ.toString())
// hàm toString chuyển 1 mảng thành 1 chuỗi, các phần tử ngăn cách nhau bởi dấu ','
console.log('----join----')
console.log(champ.join())
// hàm join cũng chuyển 1 mảng thành 1 chuỗi, nếu ko truyền vào tham số thì các phần tử sẽ cách nhau bởi dấu ','
console.log(champ.join(""))
//chuyền vào kí tự rỗng thì các phần tử sẽ đứng sát vào nhau
console.log(champ.join('-'))
// tham số truyền vào hàm join sẽ là kí tự để ngăn cách các phần tử khi chuyển sang kiểu string
console.log(typeof champ.join())
console.log('----pop----')
console.log(champ.pop())
// hàm pop sẽ xoá 1 phần tử ở cuối mảng và trả về giá trị của phần tử vừa xoá
console.log('Sau khi dùng hàm pop chuỗi mới là:')
console.log(champ)
console.log('----push----')
console.log(champ.push('Samira'))
// hàm push sẽ thêm phần tử vào cuối mảng và trả về độ ài mới của mảng
console.log('Mảng sau khi push:')
console.log(champ)
// hàm push có thể thêm nhiều phần tửu vào cuối mảng
console.log(champ.push('Nasus','Garen'))
console.log('Mảng sau khi push thêm 2 phần tử:')
console.log(champ)

console.log('----shift----')
// Ngược lại của pop, hàm shift sẽ xoá 1 phần tử ở đầu mảng và trả về giá trị của phần tử đã xoá
console.log(champ.shift())
console.log('Mảng sau khi shift:')
console.log(champ)
console.log('----unshift----')
// Ngược lại của push, hàm unshift sẽ thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(champ.unshift('Yone'))
console.log('Mảng sau khi unshift 1 phần tử:')
console.log(champ)
console.log(champ.unshift('Yasuo','Nunu'))
console.log('Mảng sau khi unshift 2 phần tử:')
console.log(champ)
console.log('----splice----')
console.log(champ.splice(4,1))
// hàm splice sẽ xoá đi 1 phần tử bất kí trong mảng tuỳ theo index truyền vào. Số đầu tiên sẽ là vị trí con trỏ đặt vào, số thứ 2 sẽ là số phần tử cần xoá sau vị trí đó.Sau khi cắt splice sẽ trả về 1 mảng con chứa phần tử vừa xoá
console.log('Mảng sau khi splice(4,1) (xoá đi 1 phần tử tính từ index4):')
console.log(champ)
console.log(champ.splice(5,3))
console.log('Mảng sau khi splice(5,3) (xoá đi 3 phần tử tính từ index5):')
console.log(champ)
console.log('----chèn phần tử = splice----')
console.log(champ.splice(5,1,'Morgana','Lux'))
// tham số thứ 3 truyền vào hàm splice sẽ là các phần tử dc thêm vào sau khi xoá 0 phần tử và thêm vào trước phần tử có index 5
console.log('Mảng sau khi splice(5,1,\'Morgana\',\'Lux\') (xoá đi 1 phần tử tính từ index5 và thêm 2 phần tử trc index5):')

console.log(champ)
console.log('----concat----')
// hàm concat dùng để nối 2 chuỗi vào với nhau trả về mảng mới có giá trị là các phần tử sau khi nối 2 mảng
console.log('tạo mảng 2')
var champ2 =[
    'Gnar',
    'Sivir',
    'Shaco'
]
console.log(champ2)
console.log('Nối mảng 2 vào bảng 1')
console.log(champ.concat(champ2))
console.log(champ)
console.log('----slice----')
// hàm slide để cắt 1 hoặc nhiều phần tử trong mảng trả về 1 mảng mới chứa các phần tử đã chọn để cắt
console.log(champ.slice(3,4))
// hàm slice sẽ cắt mảng từ vị trí tham số truyền vào đầu tiên đến tham số truyền vào thứ 2
// hàm slice còn có thẻ dùng để copy mảng
/**
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */
var yasuo = [
    {
        id: 1,
        name: 'mặc định',
        price: 100
    },
    {
        id:2,
        name:'ma kiếm',
        price: 120
    },
    {
        id:3,
        name:'siêu phẩm',
        price: 100
    },
    {
        id:4,
        name:'tối thượng',
        price:100
    },
    {
        id:5,
        name:'ma kiếm',
        price: 100
    },

]
console.log(yasuo)
console.log('----forEach()----');
yasuo.forEach(function(skin,index){
    console.log(skin,'index: '+index);
});
// hàm forEach() giúp truy cập từng phần tử trong mảng
console.log('----every()----');
var checkPrice=yasuo.every(function(skin,index){
    console.log(index)

    return skin.price ==99;
});
console.log(checkPrice)
// hàm every() là hàm kiểm tra tất cả các phần tử phải thoả mãn điều kiện nó sẽ dừng lại luôn khi duyệt qua 1 phần tử ko thoả mãn điều kiện và trả về false nếu tất cả phần tử trong mảng thoả mãn điều kiện thì trả về true
// ==> hàm every() dừng lại khi gặp 1 phần tử sai
console.log('----some()----');
checkPrice = yasuo.some(function(skin,index){
    console.log(index)
    return skin.price === 150;
});
console.log(checkPrice)
// Ngược lại với hàm every(), hàm some cũng ktra tất cả các phần tử nó sẽ dừng lại luôn khi gặp 1 phần tử đúng trả về true
// ==> hàm some() dừng lại khi gặp 1 phần tử đúng
console.log('----find()----');
var search = yasuo.find(function(skin,index){
    return skin.name==='ma kiếm';
})
console.log(search)
// hàm find() là hàm tìm kiếm nó sẽ duyệt tất cả phần tử trong mảng đến khi có 1 phần tử thỏa mãn điều kiện thì sẽ dừng và trả về giá trị của phần tử đó
// Nếu hàm find() không tìm thấy giá trị thỏa mãn nó sẽ trả về undefined
// hàm find() chỉ trả về 1 phần tử là phẩn tử đầu tiên nó tìm thấy
console.log('----filter()----');
var search = yasuo.filter(function(skin,index){
    return skin.name==='ma kiếm';
})
console.log(search)
// hàm filter trả về tất cả phần tử mà nó tìm thấy
console.log('----map()----');
var newYasuo = yasuo.map(function(skin,index){
    return {
        id: skin.id,
        name: `Trang phục: Yasuo ${skin.name}`,
        price: `${skin.price}\$`,
    }
});
console.log(newYasuo.find(function(skin,index){
    return skin.id===2;
}))
console.log('----reduce()----');
function TinhTong(sum,yasuoValue){
    return sum+=yasuoValue.price;
}
var sumPrice = yasuo.reduce(TinhTong,0)
console.log(sumPrice)


