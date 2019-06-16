

--drop table if exists SCM.TB_EMAIL;
--drop table if exists SCM.TB_TELEFONE;
--drop table if exists SCM.TB_CLIENTE;

--drop table if exists SCM.AU_CLIENTE;
--drop table if exists SCM.AU_EMAIL;
--drop table if exists SCM.AU_TELEFONE;
--drop table if exists SCM.AU_AUDITORIA;

CREATE SCHEMA "SCM" ;

/*==============================================================*/
/* Table: TB_CLIENTE                                            */
/*==============================================================*/
create table SCM.TB_CLIENTE
(
   ID                   int(10) not null auto_increment,
   NOME                 varchar(100) not null,
   CPF                  bigint(11) not null,
   CEP                  integer(8) not null,
   LOGRADOURO           varchar(150) not null,
   BAIRRO               varchar(100) not null,
   CIDADE               varchar(100) not null,
   UF                   varchar(2) not null,
   COMPLEMENTO          varchar(200),
   primary key (ID)
);

/*==============================================================*/
/* Table: TB_EMAIL                                              */
/*==============================================================*/
create table SCM.TB_EMAIL
(
   ID                   int(10) not null AUTO_INCREMENT,
   ID_CLIENTE           int(10),
   ENDERECO             varchar(100) not null,
   primary key (ID)
);

/*==============================================================*/
/* Table: TB_TELEFONE                                           */
/*==============================================================*/
create table SCM.TB_TELEFONE
(
   ID                   int(10) not null AUTO_INCREMENT,
   ID_CLIENTE           int(10),
   NUMERO               bigint(11),
   TIPO                 int(1),
   primary key (ID)
);

alter table SCM.TB_EMAIL add constraint FK_REFERENCE_2 foreign key (ID_CLIENTE)
      references SCM.TB_CLIENTE (ID) on delete restrict on update restrict;

alter table SCM.TB_TELEFONE add constraint FK_REFERENCE_1 foreign key (ID_CLIENTE)
      references SCM.TB_CLIENTE (ID) on delete restrict on update restrict;
	  
	  
	  
create table SCM.AU_CLIENTE
(
   ID                   numeric(10,0),
   NOME                 varchar(100),
   CPF                  bigint(11) ,
   CEP                  numeric(8,0) ,
   LOGRADOURO           varchar(150),
   BAIRRO               varchar(100),
   CIDADE               varchar(100),
   UF                   varchar(2),
   COMPLEMENTO          varchar(200),
   REV                  bigint,
   REVTYPE              int,
   primary key (ID, REV)
);	  

create table SCM.AU_EMAIL
(
   ID                   int(10)  AUTO_INCREMENT,
   ID_CLIENTE           int(10),
   ENDERECO             varchar(100),
   REV                  bigint,
   REVTYPE              int,
   primary key (ID, REV)
);

create table SCM.AU_TELEFONE
(
   ID                   int(10)  AUTO_INCREMENT,
   ID_CLIENTE           int(10),
   NUMERO               bigint(11),
   TIPO                 int(1),
   REV                  bigint,
   REVTYPE              int,   
   primary key (ID, REV)
);

create table SCM.AU_AUDITORIA
(
   ID                   int(10)  AUTO_INCREMENT,
   TIMESTAMP            bigint,
   USUARIO              varchar(50),   
   primary key (ID, TIMESTAMP)
);


commit;