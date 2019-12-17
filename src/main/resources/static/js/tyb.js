var tyb={};
//函数
tyb.fun={
	//显示对话框
	showDialog: function(dialog){
		//显示总的对话框
		$("#dialogs").show();
		//显示对话框灰色背景
		$("#dialogBg").show();
		//隐藏其他对话框
		$(".dialog").hide();
		//居中显示指定对话框
		centerDialog(dialog);
    },
	
	//当前对象错误提示
	showErrorTips: function($elem,tips){
            $elem.html(tips).show();
            //setTimeout(function(){$elem.hide()},3000);
			//返回false字段验证不通过
            return false;
        },
	//当前对象的错误提示框进行显示
	showValidateError: function($elem,tip){
		//当前元素获取焦点
		$elem.focus();
		//设置定时事件
		setTimeout(function(){
			//给当前对象的父级div添加错误样式
			$elem.parent().addClass('errorput');
			//显示错误提示框
			$elem.parent().siblings('.error').html(tip).show();
			/*if($elem.attr('id') == 'mobile-register-captcha_1'){
			$('#jsMobileTips').html(tip).show();*/
		},10);
		//返回false字段验证不通过
		return false;
	},
	
};
//正则样式
tyb.regExp = {
	phone: /^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/,
	tel:/(^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$)|(^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
	email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
	phMail: /(^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$)|(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)/,
	number: /^[0-9]*$/,
	float: /^\d+(\.\d+)?$/,
	zsNumber: /^(-?[1-9]\d*|0)$/,
	name: /^[\u4e00-\u9fa5a-zA-Z]+$/,
	password: /^([^\u4e00-\u9fa5]{6,20})$/,
	verifyCode: /^[a-zA-z]{5}$/,
	phoneCode: /^\d{6}$/,
	emailCode: /^\d{4}$/,
	rsiName: /^[\u4e00-\u9fa5\-a-zA-Z0-9]{2,30}$/,
	idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
};
//提示信息
tyb.msg = {
	usernameMsg1: '请输入登录手机或邮箱！',
	usernameMsg2: '请输入正确的登录手机或邮箱！',
	phoneMsg1: '请输入您的手机号码！',
	phoneMsg2: '请输入正确的手机号码！',
	telMsg1: '请输入您的电话号码！',
	telMsg2: '请输入正确的电话号码，固定电话：区号-号码！',
	verifyCodeMsg1: '请输入验证码！',
	verifyCodeMsg2: '请输入正确的验证码！',
	emailMsg1: '请输入您的邮箱！',
	emailMsg2: '请输入正确的邮箱！',
	passwordMsg1: '请输入登录密码！',
	passwordMsg2: '密码为6-20位非中文字符！',
	resetPwdMsg1: '请输入密码！',
	resetPwdMsg2: '密码为6-20位非中文字符！',
	repeatPwdMsg1:'请重复输入密码！',
	repeatPwdMsg2:'两次密码输入不一致！',
	phoneCodeMsg1: '请输入手机验证码！',
	phoneCodeMsg2: '请输入正确的手机验证码！',
	emailCodeMsg1: '请输入邮箱验证码！',
	emailCodeMsg2: '请输入正确的邮箱验证码！',
	realNameMsg: '请输入您的姓名！',
	nickNameMsg: '请输入昵称！',
	maxNumMsg:"超出要求的最大值",
	minNumMsg:"小于要求的最小值",
};
//中心对话框
function centerDialog(value){
	//参数0表示立刻显示
    $(value).show(0,function(){
		//当前窗口高度
        var winHeight = $(window).height(),
		//对话框窗口高度
        dialogHeight = $(this).height();
        if(dialogHeight+120< winHeight){
            $(this).css('margin-top',(winHeight-dialogHeight)/2 + 'px');
            $('html').removeClass('dialog-open');
        }else{
             $(this).css('margin-top','30px');
            $('html').addClass('dialog-open');
        }
    });
}