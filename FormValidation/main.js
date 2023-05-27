function Validator(option){
    var selectorRules = {};
    function validate(inputElement,rule){
        var erroElement = inputElement.parentElement.querySelector('.form-message');
        var erroElement = inputElement.parentElement.querySelector('.form-message');
        var erroMessage ;
        var rules = selectorRules[rule.selector];
        for(var i =0; i<rules.length ;++i){
            erroMessage = rules[i](inputElement.value)
            if(erroMessage) break;
        }
        if(erroMessage){
            erroElement.innerText = erroMessage;
            erroElement.parentElement.classList.add('Error');
        }
        else{
            erroElement.innerText = '';
            erroElement.parentElement.classList.remove('Error');
        }
        return !erroMessage;
    }
    var formElement = document.querySelector(option.form);
    if (formElement){
        formElement.onsubmit = function(e){
            e.preventDefault();
            // sửa lỗi khi submit form
            var formValid = true; 
            option.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement,rule)
                if(!isValid){
                    formValid = false;
                }
                
            });
            if(formValid){
                window.alert('Đăng kí thành công')

                
            }else{
                window.alert('Vui lòng nhập tất cả thông tin')
            }
        }
        option.rules.forEach(function(rule){
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.check);
            }else{
                selectorRules[rule.selector] = [rule.check];
            }
            var inputElement = formElement.querySelector(rule.selector)
           
            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rule)
                }
                inputElement.oninput =  function(){
                    var erroElement = inputElement.parentElement.querySelector('.form-message');
                    erroElement.innerText = '';
                    erroElement.parentElement.classList.remove('Error');
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
        check: function(value){
            var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return filter.test(value) ? undefined : "Vui lòng nhập đúng định dạng email";
        }
    };
};
Validator.isPassword = function(selector,min){
    return{
        selector:selector,
        check: function(value){
            return value.length>=min ? undefined : `Nhập mật khẩu ít nhất ${min} kí tự`
        }
    };
};
Validator.isForgotPassword = function(selector,password){
    return{
        selector:selector,
        check: function(value){
            console.log(password())
          return value == password() ? undefined : 'Mật khẩu nhập lại chưa khớp'
        }
    };
}