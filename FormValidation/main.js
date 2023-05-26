function Validator(option){
    function validate(inputElement,rule){
        // gọi 1 hàm riêng để check lỗi
        var erroElement = inputElement.parentElement.querySelector('.form-message');
        // muốn gọi được thẻ span thì phải gọi đến cha của thẻ input rồi mới gọi tiếp đến nó
        var erroMessage = rule.check(inputElement.value)
        // lấy ra thông báo lỗi khi thực hiện sự kiện
        // value: inputElement.value
        // text: rule.check()
        if(erroMessage){
            erroElement.innerText = erroMessage;
            // thêm text cho thẻ span
            erroElement.parentElement.classList.add('Error');
            // thêm class Erro cho thẻ cha là thẻ form-group 
            
        }
        else{
            // nếu ko có thông báo lỗi thì trả về nguyên như ban đầu
            erroElement.innerText = '';
            erroElement.parentElement.classList.remove('Error');

        }
    }
    var formElement = document.querySelector(option.form);
    //gọi đến thẻ form trong HTML
    if (formElement){
        // nếu có thẻ form sẽ chạy tiếp
        option.rules.forEach(function(rule){
        // gọi đến key rules của đối tượng Validator và duyệt từng phần tử trong mảng mỗi phần tử khi duyệt đến là rule
            var inputElement = formElement.querySelector(rule.selector)
            // gọi đến ô input có id là selector
           
            if(inputElement){
                inputElement.onblur = function(){
                // thực hiện sự kiện blur: khi người dùng chọn vào input xong ấn ra ngoài thì được coi là 1 lần thực hiện sự kiện
                    validate(inputElement,rule)
                    // gọi hàm validate với tham số truyền vào là thẻ input thao tác bỏi sự kiện Blur và phần tử rule tương ứng với input đang chọn
                    

                }
            }
        });
    }
    
}
// Định nghĩa rules
Validator.isRequired = function(selector){
    return{
        selector:selector,
        check: function(value){
            return value ? undefined : 'Vui lòng nhập thông tin!'
        }
    };
};
Validator.isEmail = function(selector){
    return{
        selector:selector,
        check: function(){
            
        }
    };
};
Validator.isPassword = function(selector){
    return{
        selector:selector,
        check: function(){
            
        }
    };
};
Validator.isForgotPassword = function(selector){
    return{
        selector:selector,
        check: function(){
            
        }
    };
}