# 箭头函数

## 参数
1. 1个参数

	```
	var f = v => v;
	```
2. 0 或 多个 , 就使用一个圆括号代表参数部分

	```
	var f = () => 5;
	
	var sum = (num1, num2) => num1 + num2;			
	```
3. 与变量解构结合使用，用圆括号

	```
	const full = ({ first, last }) => first + ' ' + last;
	```
	
## 函数体

1. 只有返回值
	a. 返回值是简单数据类型
	
		```
		var f = v => v;
		var sum = (num1, num2) => num1 + num2;
		
		```
	b. 返回值为对象
	
		```
		var getTempItem = id => ({ id: id, name: "Temp" });
		```
	
2. 函数体有多条语句，就要使用大括号将它们括起来

	```
	var sum = (num1, num2) => { 
		...
		return num1 + num2; 
	}
	```
	
## 注意点
1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。