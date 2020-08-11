(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(e,t,a){"use strict";a.r(t);var l=a(33),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orm"}},[e._v("#")]),e._v(" ORM")]),e._v(" "),a("h2",{attrs:{id:"orm简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orm简介"}},[e._v("#")]),e._v(" ORM简介")]),e._v(" "),a("ul",[a("li",[e._v("MVC或者MVC框架中包括一个重要的部分，就是ORM，它实现了数据模型与数据库的解耦，即数据模型的设计不需要依赖于特定的数据库，通过简单的配置就可以轻松更换数据库，这极大的减轻了开发人员的工作量，不需要面对因数据库变更而导致的无效劳动")]),e._v(" "),a("li",[e._v("ORM是“对象-关系-映射”的简称。（Object Relational Mapping，简称ORM）(将来会学一个sqlalchemy，是和他很像的，但是django的orm没有独立出来让别人去使用，虽然功能比sqlalchemy更强大，但是别人用不了)")]),e._v(" "),a("li",[e._v("类对象---\x3esql---\x3epymysql---\x3emysql服务端---\x3e磁盘，orm其实就是将类对象的语法翻译成sql语句的一个引擎，明白orm是什么了，剩下的就是怎么使用orm，怎么来写类对象关系语句。")])]),e._v(" "),a("p",[a("strong",[e._v("原生sql和python的orm代码对比")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#sql中的表                                                      \n\n #创建表:\n     CREATE TABLE employee(                                     \n                id INT PRIMARY KEY auto_increment ,                    \n                name VARCHAR (20),                                      \n                gender BIT default 1,                                  \n                birthday DATA ,                                         \n                department VARCHAR (20),                                \n                salary DECIMAL (8,2) unsigned,                          \n              );\n\n\n  #sql中的表纪录                                                  \n\n  #添加一条表纪录:                                                          \n      INSERT employee (name,gender,birthday,salary,department)            \n             VALUES   ("alex",1,"1985-12-12",8000,"保洁部");               \n\n  #查询一条表纪录:                                                           \n      SELECT * FROM employee WHERE age=24;                               \n\n  #更新一条表纪录:                                                           \n      UPDATE employee SET birthday="1989-10-24" WHERE id=1;              \n\n  #删除一条表纪录:                                                          \n      DELETE FROM employee WHERE name="alex"                             \n\n\n\n\n\n#python的类\nclass Employee(models.Model):\n     id=models.AutoField(primary_key=True)\n     name=models.CharField(max_length=32)\n     gender=models.BooleanField()\n     birthday=models.DateField()\n     department=models.CharField(max_length=32)\n     salary=models.DecimalField(max_digits=8,decimal_places=2)\n\n\n #python的类对象\n      #添加一条表纪录:\n          emp=Employee(name="alex",gender=True,birthday="1985-12-12",epartment="保洁部")\n          emp.save()\n      #查询一条表纪录:\n          Employee.objects.filter(age=24)\n      #更新一条表纪录:\n          Employee.objects.filter(id=1).update(birthday="1989-10-24")\n      #删除一条表纪录:\n          Employee.objects.filter(name="alex").delete()\n')])])]),a("h2",{attrs:{id:"单表操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单表操作"}},[e._v("#")]),e._v(" 单表操作")]),e._v(" "),a("h3",{attrs:{id:"_1-创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建表"}},[e._v("#")]),e._v(" 1.创建表")]),e._v(" "),a("p",[a("strong",[e._v("在models.py中创建模型：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from django.db import models\n\n# Create your models here.\n\n\nclass Book(models.Model):\n     id=models.AutoField(primary_key=True) #如果表里面没有写主键，表里面会自动生成一个自增主键字段，叫做id字段，orm要求每个表里面必须要写一个主键\n     title=models.CharField(max_length=32)  #和varchar(32)是一样的，32个字符\n     state=models.BooleanField()\n     pub_date=models.DateField() #必须存这种格式"2018-12-12"\n     price=models.DecimalField(max_digits=8,decimal_places=2) #max_digits最大位数，decimal_places小数部分占多少位\n     publish=models.CharField(max_length=32)\n')])])]),a("p",[e._v("接下来要创建对应的数据，连接上对应的数据库，然后执行创建表的命令，翻译成相应的sql，然后到数据库里面执行，从而创建对应的表。多了一步orm翻译成sql的过程，效率低了，但是没有太大的损伤，还能忍受，当你不能忍的时候，你可以自己写原生sql语句，一般的场景orm都够用了，开发起来速度更快，写法更贴近应用程序开发，还有一点就是数据库升级或者变更，那么你之前用sql语句写的数据库操作，那么就需要将sql语句全部修改，但是如果你用orm，就不需要担心这个问题，不管是你从mysql变更到oracle还是从oracle更换到mysql，你如果用的是orm来搞的，你只需要修改一下orm的引擎（配置文件里面改一些配置就搞定）就可以了，你之前写的那些orm语句还是会自动翻译成对应数据库的sql语句。")]),e._v(" "),a("p",[a("strong",[e._v("更多字段和参数")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<1> CharField\n        字符串字段, 用于较短的字符串.\n        CharField 要求必须有一个参数 maxlength, 用于从数据库层和Django校验层限制该字段所允许的最大字符数.\n \n<2> IntegerField\n       #用于保存一个整数.\n \n<3> DecimalField\n        一个浮点数. 必须 提供两个参数:\n         \n        参数    描述\n        max_digits    总位数(不包括小数点和符号)\n        decimal_places    小数位数\n                举例来说, 要保存最大值为 999 (小数点后保存2位),你要这样定义字段:\n                 \n                models.DecimalField(..., max_digits=5, decimal_places=2)\n                要保存最大值一百万(小数点后保存10位)的话,你要这样定义:\n                 \n                models.DecimalField(..., max_digits=17, decimal_places=10) #max_digits大于等于17就能存储百万以上的数了\n                admin 用一个文本框(<input type="text">)表示该字段保存的数据.\n \n<4> AutoField\n        一个 IntegerField, 添加记录时它会自动增长. 你通常不需要直接使用这个字段;\n        自定义一个主键：my_id=models.AutoField(primary_key=True)\n        如果你不指定主键的话,系统会自动添加一个主键字段到你的 model.\n \n<5> BooleanField\n        A true/false field. admin 用 checkbox 来表示此类字段.\n \n<6> TextField\n        一个容量很大的文本字段.\n        admin 用一个 <textarea> (文本区域)表示该字段数据.(一个多行编辑框).\n \n<7> EmailField\n        一个带有检查Email合法性的 CharField,不接受 maxlength 参数.\n \n<8> DateField\n        一个日期字段. 共有下列额外的可选参数:\n        Argument    描述\n        auto_now    当对象被保存时(更新或者添加都行),自动将该字段的值设置为当前时间.通常用于表示 "last-modified" 时间戳.\n        auto_now_add    当对象首次被创建时,自动将该字段的值设置为当前时间.通常用于表示对象创建时间.\n        （仅仅在admin中有意义...)\n \n<9> DateTimeField\n         一个日期时间字段. 类似 DateField 支持同样的附加选项.\n \n<10> ImageField\n        类似 FileField, 不过要校验上传对象是否是一个合法图片.#它有两个可选参数:height_field和width_field,\n        如果提供这两个参数,则图片将按提供的高度和宽度规格保存.    \n<11> FileField\n     一个文件上传字段.\n     要求一个必须有的参数: upload_to, 一个用于保存上载文件的本地文件系统路径. 这个路径必须包含 strftime #formatting,\n     该格式将被上载文件的 date/time\n     替换(so that uploaded files don\'t fill up the given directory).\n     admin 用一个<input type="file">部件表示该字段保存的数据(一个文件上传部件) .\n \n     注意：在一个 model 中使用 FileField 或 ImageField 需要以下步骤:\n            （1）在你的 settings 文件中, 定义一个完整路径给 MEDIA_ROOT 以便让 Django在此处保存上传文件.\n            (出于性能考虑,这些文件并不保存到数据库.) 定义MEDIA_URL 作为该目录的公共 URL. 要确保该目录对\n             WEB服务器用户帐号是可写的.\n            （2） 在你的 model 中添加 FileField 或 ImageField, 并确保定义了 upload_to 选项,以告诉 Django\n             使用 MEDIA_ROOT 的哪个子目录保存上传文件.你的数据库中要保存的只是文件的路径(相对于 MEDIA_ROOT).\n             出于习惯你一定很想使用 Django 提供的 get_<#fieldname>_url 函数.举例来说,如果你的 ImageField\n             叫作 mug_shot, 你就可以在模板中以 {{ object.#get_mug_shot_url }} 这样的方式得到图像的绝对路径.\n \n<12> URLField\n      用于保存 URL. 若 verify_exists 参数为 True (默认), 给定的 URL 会预先检查是否存在( 即URL是否被有效装入且\n      没有返回404响应).\n      admin 用一个 <input type="text"> 文本框表示该字段保存的数据(一个单行编辑框)\n \n<13> NullBooleanField\n       类似 BooleanField, 不过允许 NULL 作为其中一个选项. 推荐使用这个字段而不要用 BooleanField 加 null=True 选项\n       admin 用一个选择框 <select> (三个可选择的值: "Unknown", "Yes" 和 "No" ) 来表示这种字段数据.\n \n<14> SlugField\n       "Slug" 是一个报纸术语. slug 是某个东西的小小标记(短签), 只包含字母,数字,下划线和连字符.#它们通常用于URLs\n       若你使用 Django 开发版本,你可以指定 maxlength. 若 maxlength 未指定, Django 会使用默认长度: 50.  #在\n       以前的 Django 版本,没有任何办法改变50 这个长度.\n       这暗示了 db_index=True.\n       它接受一个额外的参数: prepopulate_from, which is a list of fields from which to auto-#populate\n       the slug, via JavaScript,in the object\'s admin form: models.SlugField\n       (prepopulate_from=("pre_name", "name"))prepopulate_from 不接受 DateTimeFields.\n \n<13> XMLField\n        一个校验值是否为合法XML的 TextField,必须提供参数: schema_path, 它是一个用来校验文本的 RelaxNG schema #的文件系统路径.\n \n<14> FilePathField\n        可选项目为某个特定目录下的文件名. 支持三个特殊的参数, 其中第一个是必须提供的.\n        参数    描述\n        path    必需参数. 一个目录的绝对文件系统路径. FilePathField 据此得到可选项目.\n        Example: "/home/images".\n        match    可选参数. 一个正则表达式, 作为一个字符串, FilePathField 将使用它过滤文件名. \n        注意这个正则表达式只会应用到 base filename 而不是\n        路径全名. Example: "foo.*\\.txt^", 将匹配文件 foo23.txt 却不匹配 bar.txt 或 foo23.gif.\n        recursive可选参数.要么 True 要么 False. 默认值是 False. 是否包括 path 下面的全部子目录.\n        这三个参数可以同时使用.\n        match 仅应用于 base filename, 而不是路径全名. 那么,这个例子:\n        FilePathField(path="/home/images", match="foo.*", recursive=True)\n        ...会匹配 /home/images/foo.gif 而不匹配 /home/images/foo/bar.gif\n \n<15> IPAddressField\n        一个字符串形式的 IP 地址, (i.e. "24.124.1.30").\n<16> CommaSeparatedIntegerField\n        用于存放逗号分隔的整数值. 类似 CharField, 必须要有maxlength参数.\n \n \n \n')])])]),a("p",[a("strong",[e._v("settings配置")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("DATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME':'bms',     　　 　  # 要连接的数据库，连接前需要创建好\n        'USER':'root',　　　　　　  # 连接数据库的用户名\n        'PASSWORD':'',　　　　　　  # 连接数据库的密码\n        'HOST':'127.0.0.1',       # 连接主机，默认本级\n        'PORT'：3306    　　　     #  端口 默认3306\n    }\n}\n")])])]),a("p",[e._v("注意1：NAME即数据库的名字，在mysql连接前该数据库必须已经创建，而上面的sqlite数据库下的db.sqlite3则是项目自动创建 USER和PASSWORD分别是数据库的用户名和密码。设置完后，再启动我们的Django项目前，我们需要激活我们的mysql。然后，启动项目，会报错：no module named MySQLdb 。这是因为django默认你导入的驱动是MySQLdb，可是MySQLdb 对于py3有很大问题，所以我们需要的驱动是PyMySQL 所以，我们只需要找到项目名文件下的__init__,在里面写入：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import pymysql\npymysql.install_as_MySQLdb()\n")])])]),a("p",[e._v("最后通过两条数据库迁移命令即可在指定的数据库中创建表 ：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("python manage.py makemigrations  #生成记录，每次修改了models里面的内容或者添加了新的app，新的app里面写了models里面的内容，都要执行这两条\npython manage.py migrate         #执行上面这个语句的记录来创建表，生成的表名字前面会自带应用的名字，例如：你的book表在mysql里面叫做app01_book表\n")])])]),a("p",[e._v("关于同步指令的执行简单原理：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  在执行 python manager.py magrations 时django 会在相应的 app 的migration文件夹下面生成 一个python脚本文件 \n    在执行 python manager.py migrte 时 django才会生成数据库表，那么django是如何生成数据库表的呢，\n    django是根据 migration下面的脚本文件来生成数据表的\n    每个migration文件夹下面有多个脚本，那么django是如何知道该执行那个文件的呢，django有一张django-migrations表，表中记录了已经执行的脚本，那么表中没有的就是还没执行的脚本，则 执行migrate的时候就只执行表中没有记录的那些脚本。\n    有时在执行 migrate 的时候如果发现没有生成相应的表，可以看看在 django-migrations表中看看 脚本是否已经执行了，\n    可以删除 django-migrations 表中的记录 和 数据库中相应的 表 ， 然后重新 执行\n")])])]),a("h3",{attrs:{id:"_2-增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-增"}},[e._v("#")]),e._v(" 2.增")]),e._v(" "),a("p",[a("strong",[e._v("方式一")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('book_obj=Book(title="python葵花宝典",state=True,price=100,publish="苹果出版社",pub_date="2012-12-12") #实例化一个对象表示一行记录，时间日期如果只写日期的话，时间默认是00.00.00，注意日期写法必须是2012-12-12这种格式\nbook_obj.save() #就是pymysql的那个commit提交\n')])])]),a("p",[a("strong",[e._v("方式二")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# create方法的返回值book_obj就是插入book表中的python葵花宝典这本书籍纪录对象\n  book_obj=Book.objects.create(title=\"python葵花宝典\",state=True,price=100,publish=\"苹果出版社\",pub_date=\"2012-12-12\")  #这个返回值就像是mysql里面咱们讲的那个new对象，还记得吗，他跟上面那种创建方式创建的那个对象是一样的\n  #这个Book.objects就像是一个Book表的管理器一样，提供了增删改查所有的方法\n  print(book_obj.title) #可以基于这个对象来取这个新添加的记录对象的属性值\n  dic1 = {'title':'linux','state'=True,'price':100,'publish'='2018-12-12'}  #这样写的时候，注意如果你用post提交过来的请求，有个csrf_token的键值对要删除，并且request.POST是不能直接在request.POST里面进行修改和删除的，data = request.POST.dict()转换成普通的字典--\x3eBook.objects.create(**data)\n  book.objects.create(**dic1)\n")])])]),a("p",[a("strong",[e._v("方式三：批量插入")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  book_list = []\n    for i in range(10):\n        bk_obj = models.Book(\n            name='chao%s'%i,\n            addr='北京%s'%i\n        )\n        book_list.append(bk_obj)\n\n    models.Book.objects.bulk_create(book_list) #批量插入，速度快\n")])])]),a("h3",{attrs:{id:"_3-查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-查"}},[e._v("#")]),e._v(" 3.查")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<1> all():                  查询所有结果，结果是queryset类型\n  \n<2> filter(**kwargs):       它包含了与所给筛选条件相匹配的对象，结果也是queryset类型 Book.objects.filter(title='linux',price=100) #里面的多个条件用逗号分开，并且这几个条件必须都成立，是and的关系，or关系的我们后面再学，直接在这里写是搞不定or的\n  \n<3> get(**kwargs):          返回与所给筛选条件相匹配的对象，不是queryset类型，是行记录对象，返回结果有且只有一个，\n                            如果符合筛选条件的对象超过一个或者没有都会抛出错误。捕获异常try。  Book.objects.get(id=1)\n  \n<4> exclude(**kwargs):      排除的意思，它包含了与所给筛选条件不匹配的对象，没有不等于的操作昂，用这个exclude，返回值是queryset类型 Book.objects.exclude(id=6)，返回id不等于6的所有的对象，或者在queryset基础上调用，Book.objects.all().exclude(id=6)\n 　　　　　　　　　　　　　　　　\n<5> order_by(*field):       queryset类型的数据来调用，对查询结果排序,默认是按照id来升序排列的，返回值还是queryset类型\n　　　　　　　　　　　　　　　　  models.Book.objects.all().order_by('price','id') #直接写price，默认是按照price升序排列，按照字段降序排列，就写个负号就行了order_by('-price'),order_by('price','id')是多条件排序，按照price进行升序，price相同的数据，按照id进行升序\n        \n<6> reverse():              queryset类型的数据来调用，对查询结果反向排序，返回值还是queryset类型\n  \n<7> count():                queryset类型的数据来调用，返回数据库中匹配查询(QuerySet)的对象数量。\n  \n<8> first():                queryset类型的数据来调用，返回第一条记录 Book.objects.all()[0] = Book.objects.all().first()，得到的都是model对象，不是queryset\n  \n<9> last():                queryset类型的数据来调用，返回最后一条记录\n  \n<10> exists():              queryset类型的数据来调用，如果QuerySet包含数据，就返回True，否则返回False\n　　　　　　　　　　　　　　     空的queryset类型数据也有布尔值True和False，但是一般不用它来判断数据库里面是不是有数据，如果有大量的数据，你用它来判断，那么就需要查询出所有的数据，效率太差了，用count或者exits\n　　　　　　　　　　　　　　　　 例：all_books = models.Book.objects.all().exists() #翻译成的sql是SELECT (1) AS `a` FROM `app01_book` LIMIT 1，就是通过limit 1，取一条来看看是不是有数据\n\n<11> values(*field):        用的比较多，queryset类型的数据来调用，返回一个ValueQuerySet——一个特殊的QuerySet，运行后得到的并不是一系列\n                            model的实例化对象，而是一个可迭代的字典序列,只要是返回的queryset类型，就可以继续链式调用queryset类型的其他的查找方法，其他方法也是一样的。\n<12> values_list(*field):   它与values()非常相似，它返回的是一个元组序列，values返回的是一个字典序列\n \n<13> distinct():            values和values_list得到的queryset类型的数据来调用，从返回结果中剔除重复纪录\n")])])]),a("p",[e._v("关于values的用法和返回结果举例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" all_books = models.Book.objects.all().values('id','title')\n    print(all_books) #<QuerySet [{'title': 'linux', 'id': 6}, {'title': '你好', 'id': 7}, {'title': 'linux', 'id': 8}, {'title': 'xxx', 'id': 9}, {'title': 'gogogo', 'id': 10}]>\n    '''\n        values做的事情：\n        ret = [] #queryset类型\n        for obj in Book.objects.all():\n            temp = {  #元素是字典类型\n                'id':obj.id,\n                'title':obj.title\n            }\n            ret.append(temp)\n\n    '''\n")])])]),a("p",[e._v("关于values_list的用法和返回结果举例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   all_books = models.Book.objects.all().values_list('id','title')\n    print(all_books) #<QuerySet [(6, 'linux'), (7, '你好'), (8, 'linux'), (9, 'xxx'), (10, 'gogogo')]>\n    '''\n        values做的事情：\n        ret = [] #queryset类型\n        for obj in Book.objects.all():\n            temp = (  #元素是元祖类型\n                obj.id,obj.title\n            )\n            ret.append(temp)\n\n    '''\n")])])]),a("p",[e._v("关于distinct的用法和返回结果举例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" # all_books = models.Book.objects.all().distinct() #这样写是表示记录中所有的字段重复才叫重复，但是我们知道有主键的存在，所以不可能所有字段数据都重复\n    # all_books = models.Book.objects.all().distinct('price') #报错，不能在distinct里面加字段名称\n    # all_books = models.Book.objects.all().values('price').distinct()#<QuerySet [(Decimal('11.00'),), (Decimal('111.00'),), (Decimal('120.00'),), (Decimal('11111.00'),)]>\n    all_books = models.Book.objects.all().values_list('price').distinct()#<QuerySet [{'price': Decimal('11.00')}, {'price': Decimal('111.00')}, {'price': Decimal('120.00')}, {'price': Decimal('11111.00')}]> 只能用于valuse和values_list进行去重\n　　all_books = models.Book.objects.all().values_list('title','price').distinct() #title和price两个同时重复才算一条重复的记录\n")])])]),a("p",[a("strong",[e._v("基于双下划线的模糊查询")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Book.objects.filter(price__in=[100,200,300]) #price值等于这三个里面的任意一个的对象\nBook.objects.filter(price__gt=100)  #大于，大于等于是price__gte=100，别写price>100，这种参数不支持\nBook.objects.filter(price__lt=100)\nBook.objects.filter(price__range=[100,200])  #sql的between and，大于等于100，小于等于200\nBook.objects.filter(title__contains="python")  #title值中包含python的\nBook.objects.filter(title__icontains="python") #不区分大小写\nBook.objects.filter(title__startswith="py") #以什么开头，istartswith  不区分大小写\nBook.objects.filter(pub_date__year=2012)\n')])])]),a("h3",{attrs:{id:"_4-改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-改"}},[e._v("#")]),e._v(" 4.改")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#方式1\nBook.objects.filter(title__startswith="py").update(price=120), update只能是querset类型才能调用，model对象不能直接调用更新方法，所以使用get方法获取对象的时候是不能update的。\n#方式2\nbook_obj = Book.objects.filter(title__startswith="py")\nbook_obj.price=100\nbook_obj.save() 这也是修改记录的一种方式，但是这种方式会将所有字段的数据都重新的赋值一遍（不是是不是需要更新的字段值），效率偏低，但是也是一种方式\n')])])]),a("h3",{attrs:{id:"_5-删"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删"}},[e._v("#")]),e._v(" 5.删")]),e._v(" "),a("p",[e._v("delete()方法的调用者可以是一个model对象，也可以是一个queryset集合。")]),e._v(" "),a("p",[e._v("删除方法就是 delete()。它运行时立即删除对象而不返回任何值。例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("model_obj.delete()\n")])])]),a("p",[e._v("你也可以一次性删除多个对象。每个 QuerySet 都有一个 delete() 方法，它一次性删除 QuerySet 中所有的对象。")]),e._v(" "),a("p",[e._v("例如，下面的代码将删除 pub_date 是2005年的 Entry 对象：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Entry.objects.filter(pub_date__year=2005).delete()\n")])])]),a("p",[e._v("在 Django 删除对象时，会模仿 SQL 约束 ON DELETE CASCADE 的行为，换句话说，删除一个对象时也会删除与它相关联的外键对象。例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Entry.objects.all().delete()　\n")])])]),a("p",[e._v("如果不想级联删除，可以设置为:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pubHouse = models.ForeignKey(to='Publisher', on_delete=models.SET_NULL, blank=True, null=True)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);