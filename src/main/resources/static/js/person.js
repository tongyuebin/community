var cropper =null;
var originalImageURL = null;
var uploadedImageType = 'image/jpeg';
var uploadedImageName = 'cropped.jpg';
var uploadedImageURL=null;
var Cropper = window.Cropper;
var URL = window.URL || window.webkitURL;
var options = {
	aspectRatio:1/1,
	viewMode:3,//3表示图片填充满整个画布
	preview:'.preview',
	ready: function (e) {
		console.log(e.type);
    },
    crop: function (e) {
		console.log(e.type);
    },
};
	$(function(){
	
	
			//修改按钮绑定点击事件
	$('#changeAvatarBtn').click(function(){
		tyb.fun.showDialog('#changeAvatar');
		var container = document.querySelector('.mod-body-left');
		var image=container.getElementsByTagName('img').item(0);
		originalImageURL = image.src;
		//image.crossOrigin = "anonymous";
		cropper= new Cropper(image, options);
	});
			
	$("#avatar").on("change",function(){
	  var files = this.files;
	  var file;
	  if (cropper && files && files.length) {
		file = files[0];
		if (/^image\/\w+/.test(file.type)) {
		  uploadedImageType = file.type;
		  uploadedImageName = file.name;
		  if (uploadedImageURL) {
			//释放一个通过URL.createObjectURL()创建的对象URL
			URL.revokeObjectURL(uploadedImageURL);
		  }
		  image.src = uploadedImageURL = URL.createObjectURL(file);
		  cropper.destroy();
		  cropper = new Cropper(image, options);
		  this.val = null;
		} else {
		  window.alert('请上传一个图片类型文件！');
		}
	  }

	})
	
	$("#leftRotate").on("click",function(){
		cropper.rotate(-90);
	})
	$("#rightRotate").on("click",function(){
		cropper.rotate(90);
	})
	
	$("#reset").on("click",function(){
		cropper.reset();
	})
	$("#uploadAvatar").on("click",function(){
		var cas=cropper.getCroppedCanvas({maxWidth:100,maxHeightproperties:0.8});
		console.log(cas);
		cas.toBlob(function (e) {
		console.log(e);  //生成Blob的图片格式
	});
	})
	
			//修改按钮绑定点击事件
			$('.changeemai_btn').click(function(){
				//显示修改邮箱对话框
				tyb.fun.showDialog('#changeEmailDialog');
			});
			
			//修改密码按钮点击事件
			$("#changePWDBtn").click(function(){
				//显示修改密码框对话框	
				tyb.fun.showDialog("#changePWD");
			});
			
			//弹出框关闭按钮点击事件
			$('.close').on('click', function(){
				//隐藏总的对话框
				$('#dialogs').hide();
				$('html').removeClass('dialog-open');
				//隐藏当前点击对象所在对话框
				$(this).parents('.dialog').hide();
				//隐藏对话框背景
				$('#dialogBg').hide();
				//重置表单
				if($(this).parent().find('form')[0]){
					$(this).parent().find('form')[0].reset();
				}
			});
			
			//输入框的focus和blur效果
			$('.dialog .box input').focus(function(){
				$(this).parent('.box').removeClass().addClass('box focus');
			});
			$('.dialog .box input').blur(function(){
				$(this).parent('.box').removeClass().addClass('box blur');
			});
			
			//文本输入框获得焦点事件
			$('input[type=text]').focus(function(){
			//移除错误提示样式
			$(this).parent().removeClass('errorput');
			//隐藏当前错误提示框
			$(this).parent().siblings('.error').hide();   
			})
			
			//修改邮箱获取验证码单击事件
			$('#getEmailCodeBtn').on('click', function(){
				sendCodeChangeEmail($(this));
			});
			
			//修改邮箱完成单击事件
			$("#changeEmailBtn").on('click',function(){
				changeEmailSubmit($(this));
			});
			

			//基本信息下的inputfocus事件
			$('.person-ul li input').focus(function(){
				//隐藏错误提示
				$(this).siblings('i').hide();
			})
			
			//输入框失去焦点验证
			verify([{id: '#nick_name', notBlankTip: tyb.msg.nickNameMsg, require: true},
					{id: '#mobile', notBlankTip: tyb.msg.phoneMsg1, errorTip:tyb.msg.phoneMsg2,require: true,regName:'phone'},
			]);
			
			//
			$("#submitPWDBtn").click(function(){
				changePWDSubmit($(this));
			});
			
	});

	//发送个人中心邮箱验证码
	function sendCodeChangeEmail($btn){
		var verify = verifyDialogFields([
			{id: '#changeEmail', notBlankTip: tyb.msg.emailMsg1, errorTip: tyb.msg.emailMsg2, 
			regName: 'email', require: true
			}
		]
		);
		//如果验证未通过，则不发送验证码
		if(!verify){
		   return;
		}
		//异步发送邮箱验证码
		$.ajax({
			cache: false,
			type: "get",
			dataType:'json',
			url:"Access-Control-Allow-Origin:http://www.baidu.com",
			data:$('#changeEmail').serialize(),
			async: true,
			beforeSend:function(XMLHttpRequest){
				console.log("11");
				$btn.val("发送中...");
				$btn.attr('disabled',true);
			},
			/*success: function(data){
				if(data.email){
					Dml.fun.showValidateError($('#jsChangeEmail'), data.email);
				}else if(data.status == 'success'){
					Dml.fun.showErrorTips($('#jsChangeEmailTips'), "邮箱验证码已发送");
				}else if(data.status == 'failure'){
					 Dml.fun.showValidateError($('#jsChangeEmail'), "邮箱验证码发送失败");
				}else if(data.status == 'success'){
				}
			},
			complete: function(XMLHttpRequest){
				$btn.val("获取验证码");
				$btn.removeAttr("disabled");
			}*/
		});
	}
	
	
	//邮箱修改提交
	function changeEmailSubmit($btn){
		var verify = verifyDialogFields(
				[
				  {id: '#changeEmail', notBlankTip: tyb.msg.emailMsg1, errorTip: tyb.msg.emailMsg2, regName: 'email', require: true},
				  {id: '#changeEmailCode', notBlankTip: tyb.msg.emailCodeMsg1, errorTip: tyb.msg.emailCodeMsg2, regName: 'emailCode', require: true,strlength:4}
				]
			);
		if(!verify){
		   return;
		}
		$.ajax({
			cache: false,
			type: 'post',
			dataType:'json',
			url:"/users/update_email/ ",
			data:$('#changeEmailForm').serialize(),
			async: true,
			beforeSend:function(XMLHttpRequest){
				$btn.val("发送中...");
				$btn.attr('disabled',true);
				$("#jsChangeEmailTips").html("验证中...").show(500);
			},
			success: function(data) {
				if(data.email){
					Dml.fun.showValidateError($('#jsChangeEmail'), data.email);
				}else if(data.status == "success"){
					Dml.fun.showErrorTips($('#jsChangePhoneTips'), "邮箱信息更新成功");
					setTimeout(function(){location.reload();},1000);
				}else{
					 Dml.fun.showValidateError($('#jsChangeEmail'), "邮箱信息更新失败");
				}
			},
			complete: function(XMLHttpRequest){
				$btn.val("完成");
				$btn.removeAttr("disabled");
			}
		});
	}

function changePWDSubmit($btn){
		//验证两次密码
		var verify = verifyDialogFields(
			[
			  {id: '#password1', notBlankTip: tyb.msg.resetPwdMsg1, errorTip: tyb.msg.resetPwdMsg2, regName: 'password', require: true},
			  {id: '#password2',repeatPWD:'#password1',notBlankTip: tyb.msg.repeatPwdMsg1, errorTip: tyb.msg.resetPwdMsg2, regName: 'password', require: true},
			]
			);
		if(!verify){
		   return;
		}
		$.ajax({
			cache: false,
			type: "POST",
			dataType:'json',
			url:"/users/update/pwd/",
			data:$('#jsResetPwdForm').serialize(),
			async: true,
			success: function(data) {
				if(data.password1){
					Dml.fun.showValidateError($("#pwd"), data.password1);
				}else if(data.password2){
					Dml.fun.showValidateError($("#repwd"), data.password2);
				}else if(data.status == "success"){
					Dml.fun.showTipsDialog({
						title:'提交成功',
						h2:'修改密码成功，请重新登录!',
					});
					Dml.fun.winReload();
				}else if(data.msg){
					Dml.fun.showValidateError($("#pwd"), data.msg);
					Dml.fun.showValidateError($("#repwd"), data.msg);
				}
			}
		});

}