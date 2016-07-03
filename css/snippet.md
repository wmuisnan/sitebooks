# css 片段
1. 使用负的 nth-child 选择项目1到项目n
	
	```
	/* select items 1 through 3 and display them */
	li:nth-child(-n+3) {
	  ...
	}
	```
	
2. 优化显示文本

	```
	html {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}
	```
	注：请负责任地使用 optimizeLegibility。此外，IE /Edge没有 text-rendering 支持
	
3. 表格单元格等宽

	```
	.calendar {
		  table-layout: fixed;
	}
	```
	
4. **检测鼠标双击**


	```
	HTML：
	
	<div class="test3">
	  <span><input type="text" value=" " readonly="true" />
	  <a href="http://renpingjun.com">Double click me</a></span>
	</div>
	CSS：
	
	.test3 span {
	  position: relative;
	}
	.test3 span a {
	  position: relative;
	  z-index: 2;
	}
	.test3 span a:hover, .test3 span a:active {
	  z-index: 4;
	}
	.test3 span input {
	  background: transparent;
	  border: 0;
	  cursor: pointer;
	  position: absolute;
	  top: -1px;
	  left: 0;
	  width: 101%;  /* Hacky */
	  height: 301%; /* Hacky */
	  z-index: 3;
	}
	.test3 span input:focus {
	  background: transparent;
	  border: 0;
	  z-index: 1;
	}
	```
5. 文本渐变


	```
	文本渐变效果很流行，使用 CSS3 能够很简单就实现：
	
	h2[data-text] {
	  position: relative;
	}
	h2[data-text]::after {
	  content: attr(data-text);
	  z-index: 10;
	  color: #e3e3e3;
	  position: absolute;
	  top: 0;
	  left: 0;
	  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), color-stop(50%, rgba(0,0,0,1)), to(rgba(0,0,0,0)));}
	```
	
6. 模糊文本

	```
	.blur {
	   color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	```