(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{512:function(t,a,s){"use strict";s.r(a);var e=s(47),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-编程基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-编程基础"}},[t._v("#")]),t._v(" JavaScript 编程基础")]),t._v(" "),s("h2",{attrs:{id:"_1-基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础知识"}},[t._v("#")]),t._v(" 1. 基础知识")]),t._v(" "),s("p",[t._v("JavaScript 是一种可以用来给网页增加交互性的编程语言。")]),t._v(" "),s("p",[t._v("JavaScript 脚本也是一种程序，它们包含在")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("HTML 页面内部（原先编写脚本的方式），或者")]),t._v(" "),s("li",[t._v("驻留在外部文件中（现在的首选方法）。")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js/hello.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("在 HTML 页面上，因为脚本文本包围在 "),s("code",[t._v("<script>")]),t._v(" 标签中，所以它不会显示在用户的屏幕上，而 Web 浏览器知道应该运行 JavaScript 程序。")]),t._v(" "),s("p",[t._v("<script> 标签常常放在 HTML 页面的 <head> 部分中。"),s("small",[t._v("但是如果愿意，也可以将脚本放在 <body> 部分中。")])]),t._v(" "),s("h2",{attrs:{id:"_2-值和变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-值和变量"}},[t._v("#")]),t._v(" 2. 值和变量")]),t._v(" "),s("p",[t._v("值类型:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类 型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描 述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数字")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("任何数字值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("引号中的字符")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("布尔值（Boolean）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true 或 false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("空值（null）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("空且无含义")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("对象")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("与对象相关联的任何值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("函数返回的值")])])])]),t._v(" "),s("p",[t._v("typeof 操作符是用来检测变量的数据类型。对于值或变量使用 typeof 操作符会返回如下字符串：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型字符串")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'undefined'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("未定义。表示该变量从未被赋过值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'boolean'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("布尔值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'string'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("字符串")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'number'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'object'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表示对象，或 null。注意，如果变量的值为 null，此处也是返回 object，表示空对象。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("'function'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("函数。函数是对象的一种，但又是极特殊的一种。")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-定义变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义变量"}},[t._v("#")]),t._v(" 3. 定义变量")]),t._v(" "),s("p",[t._v("要在 JavaScript 中定义变量，需要使用 var 关键字，然后为变量指定一个名字。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("JavaScript 是区分大小写的。这意味着 "),s("code",[t._v("HELLO")]),t._v(" 、"),s("code",[t._v("hello")]),t._v("、"),s("code",[t._v("Hello")]),t._v(" 并不相同，")]),t._v(" "),s("p",[t._v("作为动态语言，JavaScript 中变量的类型随着其所存储的数据的类型而变化。")]),t._v(" "),s("p",[t._v("JS中的 "),s("strong",[t._v("基本数据类型")]),t._v(" 只有三种："),s("strong",[t._v("数字")]),t._v("、"),s("strong",[t._v("字符串")]),t._v(" 和 "),s("strong",[t._v("布尔值")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("注意")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JS 不区分 "),s("strong",[t._v("整数")]),t._v(" 和 "),s("strong",[t._v("浮点数")]),t._v(" 。")])]),t._v(" "),s("li",[s("p",[t._v("JS 中也没有 "),s("strong",[t._v("字符")]),t._v(" 类型。")])])]),t._v(" "),s("p",[t._v("JavaScript 中数组变量的声明不需要 "),s("code",[t._v("[]")]),t._v(" 符号，仍然是 "),s("code",[t._v("var 变量名;")]),t._v(" 的形式，不过初始化还是 "),s("code",[t._v("= [xxx, xxx, xxx]")]),t._v(" 的形式。")]),t._v(" "),s("p",[t._v("JavaScript 中多出一个 "),s("em",[s("code",[t._v("undefined")])]),t._v(" 关键字，如果对一个变量从未赋过值，那么该变量的类型就是 "),s("em",[s("code",[t._v("undefined")])]),t._v(" 类型。")]),t._v(" "),s("p",[t._v("JS 中多出一个判断运算符 "),s("em",[s("code",[t._v("===")])]),t._v("，它被称为【严格判等运算符】。还是因为变量类型的原因，JS 中允许出现两个变量 “类型不一样，但值一样” 的情况。而严格判等运算符要求两个变量类型和值都必须一样。")]),t._v(" "),s("p",[s("code",[t._v("注意")]),t._v(" undefined 是派生自 null 的，因此 JavaScript 中对它们的相等性测试（==）会返回 true。常用的比较“套路”是结合 typeof 比较："),s("em",[s("code",[t._v("alert(typeof xx == typeof yy)")])])]),t._v(" "),s("h2",{attrs:{id:"_4-运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-运算符"}},[t._v("#")]),t._v(" 4. 运算符")]),t._v(" "),s("p",[t._v("略")]),t._v(" "),s("h2",{attrs:{id:"_5-分支与循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-分支与循环"}},[t._v("#")]),t._v(" 5. 分支与循环")]),t._v(" "),s("p",[t._v("略")]),t._v(" "),s("h2",{attrs:{id:"_6-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-数组"}},[t._v("#")]),t._v(" 6. 数组")]),t._v(" "),s("p",[t._v("本质上，JavaScript 没有所谓的【数组】，JavaScript 中的数组实际上就是一个对象。")]),t._v(" "),s("p",[t._v("每个数组都有一个 "),s("em",[s("code",[t._v("length")])]),t._v(" 属性。和其他语言不一样，JavaScript 数组的 "),s("em",[s("code",[t._v("length")])]),t._v(" 是没有上界的。")]),t._v(" "),s("p",[t._v("如果使用大于或等于 "),s("em",[s("code",[t._v("length")])]),t._v(" 的数组作为下标，那么 "),s("em",[s("code",[t._v("length")])]),t._v(" 将增大来容纳新元素。")]),t._v(" "),s("p",[t._v("你可以直接设置 "),s("em",[s("code",[t._v("length")])]),t._v(" 的值。设置为更大的值时，系统无须给数组分配更多的空间。设置为更小的值时，所有下标大于或等于 "),s("em",[s("code",[t._v("length")])]),t._v(" 的属性都被删除。")]),t._v(" "),s("p",[s("em",[s("code",[t._v("length")])]),t._v(" 属性的值是数组最大下标加 1 。它不一定等于数组里元素的个数。")]),t._v(" "),s("p",[t._v("数组更多的内置方法参见官方 API 文档。")]),t._v(" "),s("h2",{attrs:{id:"_7-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-函数"}},[t._v("#")]),t._v(" 7. 函数")]),t._v(" "),s("p",[t._v("函数的定义包括："),s("em",[s("code",[t._v("function")])]),t._v(" 关键字、描述函数用途的名字、包含在 () 中的 0 个和多个参数的列表，以及由一条或多条代码语句组成的块。")]),t._v(" "),s("p",[t._v("JavaScript 中函数和方法的声明不需要声明函数/方法返回值类型，形参中的 "),s("code",[t._v("var")]),t._v(" 关键字也可以省略。")]),t._v(" "),s("p",[t._v("JavaScript 中函数/方法是“一等公民”可以对变量赋值，自然也可以作为参数和返回值。")]),t._v(" "),s("p",[t._v("没有名字的函数被称为匿名函数，常用于对变量的赋值。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8-变量的作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-变量的作用域"}},[t._v("#")]),t._v(" 8. 变量的作用域")]),t._v(" "),s("p",[t._v("略")])])}),[],!1,null,null,null);a.default=v.exports}}]);