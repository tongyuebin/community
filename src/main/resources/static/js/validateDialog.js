//验证对话框所有字段
function verifyDialogFields(array){
    var i = 0,
        length = array.length,
        isVadlid=true;//默认此数组数据有效
	//遍历数组里面
    for(i; i < length; i++) {
        var obj = array[i],
            _this = $(obj.id);
        validata = validateField(obj, _this);
		//如果数组里面存在一组值无效直接返回false，停止遍历
        if(!validata){
             return validata;
        }
    }
    return validata;
}
//验证字段
function validateField(obj,_this){
		//输入提示
    var notBlankTip = obj.notBlankTip,
		//错误提示
        errorTip = obj.errorTip,
		//正则名
        regName = obj.regName,
		//重复密码
		repeatPWD=obj.repeatPWD;
		//是否为空
        require = obj.require,
		//最小长度
        minlength = obj.minlength,
		//字符串长度
        strlength = obj.strlength,
		//当前元素的值去除空格
        value = $.trim(_this.val());
		
        //非空性验验证
        if ( require && (!value) ) {
            return tyb.fun.showValidateError(_this,notBlankTip);
        }else{
			//合法性验证
            if (regName && !tyb.regExp[regName].test(value)) {
                 return tyb.fun.showValidateError(_this,errorTip);
            }
			//最小长度
            if(minlength != undefined && value.length <= minlength){
                return tyb.fun.showValidateError(_this,'输入长度需大于'+minlength+'位');
            }

			//长度
            if(strlength != undefined && value.length != strlength){
                 return tyb.fun.showValidateError(_this,'输入长度必须为'+strlength+'位');
            }

			//重复密码校验
            if(repeatPWD != undefined && value != $(repeatPWD).val()){
                return tyb.fun.showValidateError(_this,tyb.msg.repeatPwdMsg2);
            }

        }
		//如果字段验证通过
		//移除错误样式
        _this.parent().removeClass('errorput');
		//移除错误提示框
        _this.parent().siblings('.error').hide();
        return true;
}