# JADE 简介

[TOC]

## 是什么
 JADE 是一门 `html` 的模版语言 
## 什么样
看看下面两段代码，直接感受一下

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <script type="text/javascript">
      if (foo) {
         bar(1 + 5)
      }
    </script>
  </head>
  <body>
    <h1>Jade - node template engine</h1>
    <div id="container" class="col">
      <p>Get on it!</p>
      <p>
        Jade is a terse and simple
        templating language with a
        strong focus on performance
        and powerful features.
      </p>
    </div>
  </body>
</html>
```
如果用 JADE 写，上面的代码可以写成这样：

```
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) {
         bar(1 + 5)
      }
  body
    h1 Jade - node template engine
    #container.col
      if youAreUsingJade
        p You are amazing
      else
        p Get on it!
      p.
        Jade is a terse and simple
        templating language with a
        strong focus on performance
        and powerful features.
```
 比较以上两片代码，你会发觉后面一段明显简洁漂亮了许多，往细看，你能发现，相比原生html，jade的特点有：
 * 标签不用写尖角号了，直接写标签名就可以了。如body标签，不再是`<body></body>`而是`body`,简洁明了。
 * 标签的层级关系通过缩进表示，如`<body><p>...</p></body>`用jade就是：
		
		body
			p
 * 不写尖角号，那标签里的内容放哪。通过观察，就可发可以用以下方式实现：
	* 便签名后打空格，在用一行继续写。如上所示`<h1>Jade - node template engine</h1>`，可写为`h1 Jade - node template engine`。如果文字太多，一行放不下怎么办？看下一点。
	* 便签后打点`.`,换一行继续写。如:
			
			p.
		      Jade is a terse and simplete mplating language with a strong focus on performanceand powerful features.
这种很适合添加长段文字，文字过长就另起一行，与标签分开显示，易于阅读。可能有些人还会问，如果一个标签内容里既有文字，又有子标签，怎么办？还是往下看。

* 前面的问题，实际就是怎么用jade表示下面这段代码：
			
			<p> Jade is a <strong>terse and simplete mplating </strong> language with a strong focus on performanceand powerful features.</p>		      
还是先上代码
		
			p
			  | Jade is a 
			  strong terse and simplete mplating 
			  | language with a strong focus on performanceand powerful features.
观察后又可以发现，还可以另起一行，空格缩进，然后把内容写在`|`后面，其他子便签写法跟之前一样。

> **Tips:**
> `JADE`通过缩进表示层级关系,缩进可以是空格，也可以是tap。但不能混用。
> 写jade强烈建议能显式表现空格和tap的编辑器，能大大提高debug的效率。如sublime，选中代码，就是看到你用的是哪种锁进，`...`表示你用的是空格，`---`表示你用的是tap。而且sublime还可以很方便地转化这两种缩进。


	
## 怎么用
上一节从大处讲了JADE的简洁特点和缩进方式，这节从小的地方说说她的具体用法 —— 语法。

根据语法功能的使用频率，分为基础，中级，高级三小段

### 基础

这一节介绍了...

#### 注释 (comments)

##### 行注释
`JADE` 的行注释语法与`JavaScript`的是一样的, 即行首加`//`

```
// just some paragraphs
p foo
p bar
```
转成`html`为

```
<!-- just some paragraphs-->
<p>foo</p>
<p>bar</p
```

`JADE`也支持`unbuffered comments`(编译后不出现在`html`中), 在双斜线后加个连字符即可： `//-`

```
//- will not output within markup
p foo
p bar
```
转成`html`为

```
<p>foo</p>
<p>bar</p>
```

##### 块注释
要添加块注释，在内容前添加`//`即可：

```
body
  //
    As much text as you want
    can go here.
```
转成`html`为

```
<body>
  <!--
  As much text as you want
  can go here.
  -->
</body>
```


##### 条件注释
这一点上，跟`html`的条件注释，是一样的：
```
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->
```
转成`html`为

```
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->
```

#### 文档类型（doctype）
现在常用的`html5`文档类型是
```
doctype html
```
即

```
<!DOCTYPE html>
```

还有其他的一些文档类型，可以移步官网。



#### 标签 (tags)
JADE标签及标签嵌套在上文提过，这里不赘述，只介绍下行内嵌套。如下：
```
a: img
```
转
```
<a><img/></a>
```
注意`:`和另一个标签之间的空格。



#### 纯文本 ( plain text ) 
JADE中写文本方法上文已经提过，以下只是小节一下。赶时间可以跳过。
#####  管道式 ( piped Text )
即上文提到的`| + 空格`的形式
```
| Plain text can include <strong>html</strong>
p
  | It must always be on its own line
```
转为
```
Plain text can include <strong>html</strong>
<p>It must always be on its own line</p>
```
##### 內联式 ( Inline in a Tag )
即在`标签后加空格`，再直接输入文本
```
p Plain text can include <strong>html</strong>
```
转
```
<p>Plain text can include <strong>html</strong></p>
```
##### 块方式 ( Block in a Tag )
在写脚本或样式的时候，你可能需要在标签内写入大量文本，这时候，可以在标签后`加点`的方法
```
script.
  if (usingJade)
    console.log('you are awesome')
  else
    console.log('use jade')
```
转
```
<script>
  if (usingJade)
    console.log('you are awesome')
  else
    console.log('use jade')
</script>
```
#### 属性 ( attributes )
JADE 里元素的属性和html里的很类似，从形式上看， html便签的属性写在尖角号里，而JADE则是写在括号里
```
a(href='google.com') Google
a(class='button', href='google.com') Google
```
转
```
<a href="google.com">Google</a><a href="google.com" class="button">Google</a>
```
属性较多时，还可以分行书写
```
input(
  type='checkbox'
  name='agreement'
  checked
)
```
转
```
<input type="checkbox" name="agreement" checked="checked"/>
```
另外，class可简写为`.classname`,id可简写为`#idname`
```
#wrap
	p#main-link
		a.btn
```
转
```
<div id="wrap">
  <p id="main-link"><a class="btn"></a></p>
</div>
```
从上还可发现`#wrap`被解析成了`<div id="wrap"></div>`。`div`作为如此常用的标签，JADE中可以默认可以省去不写标签名,`#wrap`即代表`div#wrap`。


**高级篇**

虽然JADE里的属性值形式跟html差不多，但实际上，JADE的属性，就是正常的javaScript。基于此，JADE里的属性值，还有一些更高级的功能。

布尔属性值 ( Boolean Attributes )
属性值支持布尔值，当没有指定时，默认就是为真
```
input(type='checkbox', checked)
input(type='checkbox', checked=true)
input(type='checkbox', checked=false)
input(type='checkbox', checked=true.toString())
```
转
```
<input type="checkbox" checked="checked"/>
<input type="checkbox" checked="checked"/>
<input type="checkbox"/>
<input type="checkbox" checked="true"/>
```

如果文档类型是`html`，jade可以将属性值编译成所有浏览器都能理解的形式
```
doctype html
input(type='checkbox', checked)
input(type='checkbox', checked=true)
input(type='checkbox', checked=false)
input(type='checkbox', checked=true && 'checked')
```
转
```
<!DOCTYPE html>
<input type="checkbox" checked>
<input type="checkbox" checked>
<input type="checkbox">
<input type="checkbox" checked="checked">
```

同样，属性也支持三目形式
```
- var authenticated = true
body(class=authenticated ? 'authed' : 'anon')
```
转
```
<body class="authed"></body>
```

而且，class不仅可以是字符串，更可以是对象
```
- var classes = ['foo', 'bar', 'baz']
a(class=classes)
//- the class attribute may also be repeated to merge arrays
a.bing(class=classes class=['bing'])
```
转
```
<a class="foo bar baz"></a><a class="bing foo bar baz bing"></a>
```
class也可以是通过映射真假的对象来确定，这在条件判断的场景下很有用。
```
- var currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
a(class={active: currentUrl === '/about'} href='/about') About
```
转
```
<a href="/">Home</a><a href="/about" class="active">About</a>
```

同样style属性也可以是对象
```
a(style={color: 'red', background: 'green'})
```
转
```
<a style="color:red;background:green"></a>
```

为了防止xss攻击，JADE里所有的属性值默认都是编码过的。如果你需要一些特殊字符，你可以用`!=`而不是`=`
```
div(escaped="<code>")
div(unescaped!="<code>")
```
转

```
<div escaped="&lt;code&gt;"></div>
<div unescaped="<code>"></div>
```

> **注意：** 未编码的代码隐藏着风险，使用前要确保里面没有`xss`

另外，`&attributes`也可以将一个对象添加到元素上将之作为属性
```
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})
```
转
```
<div id="foo" data-bar="foo" data-foo="bar"></div>
```
这个对象不仅可以是字面量，也可以是表示对象的变量。
```
- var attributes = {'data-foo': 'bar'};
div#foo(data-bar="foo")&attributes(attributes)
```
转
```
<div id="foo" data-bar="foo" data-foo="bar"></div>
```
> **注意：** JADE并没有对`&attributes`语法引入的对象进行编码，所以，用到它时，得确保数据安全，防止`xss`





### 中

这一节主要关于模版的引用

#### extends
extends 能够让当前模版继承其他的模版，而且可以覆盖其他模版预设的属性。
```
//- layout.jade
doctype html
html
  head
    block title
      title Default title
  body
    block content

```
index 模版
```
//- index.jade
extends ./layout.jade

block title
  title Article Title

block content
  h1 My Article

```

转

```
<!doctype html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <h1>My Article</h1>
  </body>
</html>
```


#### inheritance
上一节介绍JADE模版间的继承时介绍了`extend`，这节介绍另一个方法`block`
假设有`layout.jade`模版如下
```
html
  head
    title My Site
    block scripts
      script(src='/jquery.js')
  body
    block content
    block foot
      #footer
        p some footer content

```
然后`page-a.jade`引用了它
```
extends ./layout.jade

block scripts
  script(src='/zepto.js')
  script(src='/pets.js')

block content
  h1 page title
  p page content
```
转
```
<html>
  <head>
    <title>My Site</title>
    <script src="/zepto.js"></script>
    <script src="/pets.js"></script>
  </head>
  <body>
    <h1>page title</h1>
    <p>page content</p>
    <div id="footer">
      <p>some footer content</p>
    </div>
  </body>
</html>
```
通过对比可以发现`block [name]`的特点有
1. 插入内容，如`block content`
2. 会覆盖原来的内容, 如`block scripts`
3. 能预设默认值， 如`block fooot`

**代码前置和后置**
如上的`block scripts`，在引入模版的block中插入值，jade会覆盖父级模版原有的内容。这是JADE的默认行为，当然，也可以通过`block append [name]`和`block prepend [name]`在父级模版后或前插入代码块(也可简写成`append [name]`和`prepend [name]`)

有`layout.jade`如下
```
html
  head
    block head
      script(src='/vendor/jquery.js')
      script(src='/vendor/caustic.js')
  body
    block content
```
有`page-b.jade`如下
```
extends layout
append head
  script(src='/vendor/three.js')
  script(src='/game.js')
```
转后`page-b.html`
```
<html>
  <head>
    <script src="/vendor/jquery.js"></script>
    <script src="/vendor/caustic.js"></script>
    <script src="/vendor/three.js"></script>
    <script src="/game.js"></script>
  </head>
  <body>
  </body>
</html>
```


有`page-c.jade`如下
```
extends layout
prepend head
  script(src='/vendor/three.js')
  script(src='/game.js')
```
转后`page-c.html`
```
<html>
  <head>
    <script src="/vendor/three.js"></script>
    <script src="/game.js"></script>
    <script src="/vendor/jquery.js"></script>
    <script src="/vendor/caustic.js"></script>
  </head>
  <body>
  </body>
</html>
```






#### 插入模版(includes)
可以将其它模版插入当前模版中

head.jade
```
//- includes/head.jade
head
  title My Site
  script(src='/javascripts/jquery.js')
  script(src='/javascripts/app.js')
```

foot.jade
```
//- includes/foot.jade
#footer
  p Copyright (c) foobar
```

index.jade
```
//- index.jade
doctype html
html
  include ./includes/head.jade
  body
    h1 My Site
    p Welcome to my super lame site.
    include ./includes/foot.jade
```

转
```
<!doctype html>
<html>
  <head>
    <title>My Site</title>
    <script src='/javascripts/jquery.js'></script>
    <script src='/javascripts/app.js'></script>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my super lame site.</p>
    <div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```

include 也可以用来插入纯文本

有一下代码块
```
/* style.css */
h1 { color: red; }

// script.js
console.log('You are awesome');

```

将它们插入
```
//- index.jade
doctype html
html
  head
    style
      include style.css
  body
    h1 My Site
    p Welcome to my super lame site.
    script
      include script.js
```

转

```
<!doctype html>
<html>
  <head>
    <style>
      /* style.css */
      h1 { color: red; }
    </style>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my super lame site.</p>
    <script>
      // script.js
      console.log('You are awesome');
    </script>
  </body>
</html>
```

include 还可以用来插入 `Filtered Text`(后面解释)

```

// markdown 文档
# article.md
This is an article written in markdown.


//- index.jade
doctype html
html
  head
    title An Article
  body
    include:markdown article.md


```

转

```
<!doctype html>
<html>
  <head>
    <title>An Article</title>
  </head>
  <body>
    <h1>article.md</h1>
    <p>This is an article written in markdown.</p>
  </body>
</html>

```

#### 混合 (mixins)
Mixins 能 JADE 有能力创建可复用的代码块

```
//- Declaration
mixin list
  ul
    li foo
    li bar
    li baz
//- Use
+list
+list

// 转
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
```
而且可以接受参数

```
mixin pet(name)
  li.pet= name
ul
  +pet('cat')
  +pet('dog')
  +pet('pig')

//转
<ul>
  <li class="pet">cat</li>
  <li class="pet">dog</li>
  <li class="pet">pig</li>
</ul>
```

Mixin 还可以将一段 JADE 代码块作为其内容

```
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided

+article('Hello world')

+article('Hello world')
  p This is my
  p Amazing article

//转
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>No content provided</p>
  </div>
</div>
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>This is my</p>
    <p>Amazing article</p>
  </div>
</div>
```

Mixins 隐式地从 attributes 中获取参数

```
mixin link(href, name)
  //- attributes == {class: "btn"}
  a(class!=attributes.class, href=href)= name

+link('/foo', 'foo')(class="btn")

//转
<a href="/foo" class="btn">foo</a>
```
> **注意** `attributes`的值已经编码过了，所以最好用`!=`而不是`=`避免二次编码（关于` unescaped attributes`可以查看`attributes`一节)

mixin里调用参数还可以直接用`&attributes`

```
mixin link(href, name)
  a(href=href)&attributes(attributes)= name

+link('/foo', 'foo')(class="btn")

// 转
<a href="/foo" class="btn">foo</a>
```

和ES6的分离参数一样，JADE也有这一功能，称为`Rest Arguments`。在不知道参数的个数时，可以用`rest arguments"`语法格式。
```
mixin list(id, ...items)
  ul(id=id)
    each item in items
      li= item

+list('my-list', 1, 2, 3, 4)

// 转
<ul id="my-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```


### 高
介绍高级点的用法

#### code
JADE 支持在模版里写javaScript。共有三种格式
其一，Unbuffered Code。这种形式的代码以`-`开头，代码不会出现在编译后的模版中
```
- for (var x = 0; x < 3; x++)
  li item

// 转
<li>item</li>
<li>item</li>
<li>item</li>
```
它也支持直接写代码块
```
-
  list = ["Uno", "Dos", "Tres",
          "Cuatro", "Cinco", "Seis"]
each item in list
  li= item

// 转
<li>Uno</li>
<li>Dos</li>
<li>Tres</li>
<li>Cuatro</li>
<li>Cinco</li>
<li>Seis</li>
```
> **注意** 写入代码块时，`-`后不能有空格

JADE也支持以`=`开头的 `Buffered Code`。如果是 javaScript表达式，输出的就是表达式的值。为了安全，模版优先输出的是HTML
```
p
  = 'This code is <escaped>!'

=>
<p>This code is &lt;escaped&gt;!</p>

// 写在行间也是可以的
p= 'This code is' + ' <escaped>!'

=>
<p>This code is &lt;escaped&gt;!</p>


```

以`!=`输出的是未编码的代码

```
p
  != 'This code is <strong>not</strong> escaped!'

=>
<p>This code is <strong>not</strong> escaped!
</p>

// 它也是支持行间的
p!= 'This code is' + ' <strong>not</strong>

=>
<p>This code is <strong>not</strong> escaped!</p>

```

>**警告** 未编码的代码隐藏着风险，在写入之前应该确保代码的安全性。警惕`xxs`攻击。

#### interpolation
JADE 通过`#{}`、`!{}`和`#[]`向文本中插入内容
**#{} :**插入编码后的字符串
这种格式支持 产生字符串的javaScript字符串和表达式
```
- var title = "On Dogs: Man's Best Friend";
- var author = "enlore";
- var theGreat = "<span>escape!</span>";

h1= title
p Written with love by #{author}
p This will be safe: #{theGreat}

=>
<h1>On Dogs: Man's Best Friend</h1>
<p>Written with love by enlore</p>
<p>This will be safe: &lt;span&gt;escape!&lt;/span&gt;</p>

// 表达式
- var msg = "not my inside voice";
p This is #{msg.toUpperCase()}

=>
<p>This is NOT MY INSIDE VOICE</p>
```
 **!{}: **插入未编码的字符串，如
```
- var riskyBusiness = "<em>Some of the girls are wearing my mother's clothing.</em>";
.quote
  p Joel: !{riskyBusiness}

=>
<div class="quote">
  <p>Joel: <em>Some of the girls are wearing my mother's clothing.</em></p>
</div>
```

>**警告：**未编码的代码隐藏着风险，在写入之前应该确保代码的安全性。警惕`xxs`攻击。

**#[]: **插入标签
```
p.
  If you take a look at this page's source #[a(target="_blank", href="https://github.com/jadejs/jade/blob/master/docs/views/reference/interpolation.jade") on GitHub],
  you'll see several places where the tag interpolation operator is
  used, like so.

=>
<p>If you take a look at this page's source <a target="_blank" href="https://github.com/jadejs/jade/blob/master/docs/views/reference/interpolation.jade">on GitHub</a>,
  you'll see several places where the tag interpolation operator is
  used, like so.
</p>
```

当然在JADE文本中直接插入html标签也是可以的。但是，这么做的话，学JADE的意义在哪呢？

#### conditionals
JADE 本身支持条件条件判断，所以在写`if`、`else if` 、和`else `这些javeScript的条件判断语句是，可以省略`-`:
```
- var user = { description: 'foo bar baz' }
- var authorised = false
#user
  if user.description
    h2 Description
    p.description= user.description
  else if authorised
    h2 Description
    p.description.
      User has no description,
      why not add one...
  else
    h1 Description
    p.description User has no description
=>
<div id="user">
  <h2>Description</h2>
  <p class="description">foo bar baz</p>
</div>
```
JADE 也支持 `unless`语句，所以下面两段代码，效果是一样的

```
unless user.isAnonymous
  p You're logged in as #{user.name}

// 也可以写成
if !user.isAnonymous
  p You're logged in as #{user.name}
```



#### case
JADE的case语句实际上是javaScript语句的缩写形式，格式如下：
```
- var friends = 10
case friends
  when 0
    p you have no friends
  when 1
    p you have a friend
  default
    p you have #{friends} friends

=>
<p>you have 10 friends</p>
```

它也支持`fall through`：
```
- var friends = 0
case friends
  when 0
  when 1
    p you have very few friends
  default
    p you have #{friends} friends
=>
<p>you have very few friends</p>
```
当然，也支持代码块
```
- var friends = 1
case friends
  when 0: p you have no friends
  when 1: p you have a friend
  default: p you have #{friends} friends

=>
<p>you have a friend</p>
```

#### iteration
JADE支持两种循环`each`、`while`
**each**
有了`each` 循环一个数组或对象是很容易的:
```
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```
它还支持获取数组的下标、对象的键名：
```
ul
  each val, index in ['zero', 'one', 'two']
    li= index + ': ' + val
=>
<ul>
  <li>0: zero</li>
  <li>1: one</li>
  <li>2: two</li>
</ul>

ul
  each val, index in {1:'one',2:'two',3:'three'}
    li= index + ': ' + val
=>
<ul>
  <li>1: one</li>
  <li>2: two</li>
  <li>3: three</li>
</ul>    
```
数组和对象都是纯的javaScript，所以他们也可以被变量、函数或者任何可以产生数组或对象的javaScript表达式
```
- var values = [];
ul
  each val in values.length ? values : ['There are no values']
    li= val
=>
<ul>
  <li>There are no values</li>
</ul>
```
上面的关键字`each`也可以用`for`代替

**while**
用while也是可以创建一个循环的
```
- var n = 0
ul
  while n < 4
    li= n++

=>
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```
#### filters
`Filters`使得在jade中使用其它语言成为可能。如：

```
:markdown
  # Markdown

  I often like including markdown documents.
script
  :coffee-script
    console.log 'This is coffee script'

=>
<h1>Markdown</h1>
<p>I often like including markdown documents.</p>
<script>console.log('This is coffee script')</script>
```

上面的`:markdown`就是一个JADE的`filter`。所有的`JSTransformers`都可以拿来作为JADE的`filter`。比较流行的`filter`有`:coffee-script`,` :babel`, `:uglify-js`, `:less`, 和 `:markdown-it`。

>**提示**
`filter`都是编译进行时的，这一特点使得它们编译得很快，同时也使得它们不支持动态输入。内置的`filter`在浏览器里运行并不良好，最好将它们放在服务端。





## personal views

 

Doctype Option
Custom Doctypes

