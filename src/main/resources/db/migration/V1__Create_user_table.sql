create table USER
(
	ID BIGINT auto_increment,
	USERNAME VARCHAR(50),
	PASSWORD VARCHAR(50),
	BIRTHDAY VARCHAR(50),
	GENDER VARCHAR(10),
	ADDRESS VARCHAR(50),
	TELEPHONE CHAR(11),
	EMAIL VARCHAR(50),
	AVATAR VARCHAR(100),
	ACCOUNT VARCHAR(50),
	TOKEN VARCHAR(100),
	ACTIVE CHAR(1),
	ACTIVE_CODE VARCHAR(50),
	GMT_CREATE BIGINT,
	GMT_MODIFY BIGINT,
	constraint USER_PK
		primary key (ID)
);

comment on table USER is '用户表';

comment on column USER.ID is '用户id';

comment on column USER.USERNAME is '昵称';

comment on column USER.PASSWORD is '密码';

comment on column USER.BIRTHDAY is '生日';

comment on column USER.GENDER is '性别';

comment on column USER.ADDRESS is '地址';

comment on column USER.TELEPHONE is '手机';

comment on column USER.EMAIL is '邮箱';

comment on column USER.AVATAR is '头像';

comment on column USER.ACCOUNT is '第三方账户';

comment on column USER.TOKEN is 'token';

comment on column USER.ACTIVE is '激活状态';

comment on column USER.ACTIVE_CODE is '激活码';

comment on column USER.GMT_CREATE is '创建时间';

comment on column USER.GMT_MODIFY is '修改时间';

