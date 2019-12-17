//表单验证
function verify(array) {
    var i = 0,length = array.length;
    for(i;i<length;i++) {
        newBlur(array[i]);
    }
}
//失去焦点触发函数
function newBlur(obj){
	//获取当前失去焦点对象
    var _this = $(obj.id);
	//添加失去焦点事件
    _this.blur(function () {
         var  validata = true;
         validata = _validate(obj,_this,validata);
    });
}

//验证表单提交数据（数组形式）
function verifySubmit(array){
    var i = 0,
        length = array.length,
        validata = true;
    for(i; i < length; i++) {
        var obj = array[i],
            _this = $(obj.id);
        validata = _validate(obj, _this, validata);
    }
    return validata;
}

function _validate(obj,_this,validata){
		//非空提示
	var notBlankTip = obj.notBlankTip,
		//错误提示
        errorTip = obj.errorTip,
		//正则名
        regName = obj.regName,
		//是否为空
        require = obj.require,
		//二次密码输入
        repeatPWD = obj.repeatPWD,
		//最大数
        maxNum = $(obj.maxNum).val() || 0,
		//最小数
        minNum = $(obj.minNum).val() || 0,
		//最小长度
        minlength = obj.minlength,
		//规定长度
        strlength = obj.strlength,
		//当前对象值去除空格
        value = $.trim(_this.val());
        //为空验证
        if (require && value == '') {
            validata = _showValidateError(_this,notBlankTip);
        }else{
            if (regName && !tyb.regExp[regName].test(value)) {
                 validata = _showValidateError(_this,errorTip);
            }

			//最小长度
            if(minlength != undefined){
                if(value.length<=minlength){
                    validata = _showValidateError(_this,'输入长度需大于'+minlength+'位');
                }
            }

			//长度
            if(strlength != undefined){
                if(value.length != strlength){
                     validata = _showValidateError(_this,'输入长度必须为'+strlength+'位');
                }
            }
			//重复密码校验
            if(repeatPWD != undefined){
                if(value != $(repeatPWD).val()){
                    validata = _showValidateError(_this,tyb.msg.repeatPwdMsg2);
                }
            }
			//最大值检查
            if(obj.maxNum){
                if( +value > +maxNum){
                    validata = _showValidateError(_this,tyb.msg.maxNumMsg);
                }
            }

			//最小值检查
            if(obj.minNum){
                if( +value < +minNum ){
                    validata = _showValidateError(_this,tyb.msg.minNumMsg);
                }
            }

        }
		//验证通过移除警告信息和错误样式
        if(validata){
            _this.siblings('i').hide();
            //_this.parent().removeClass('errorput').addClass('rightput');
        }
    return validata;
}


function _showValidateError(elem,errorTip){
    elem.siblings('i').html(errorTip).css('display','inline-block').show();
    //elem.parent().removeClass('rightput').addClass('errorput');
    return false;
}