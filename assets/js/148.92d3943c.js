(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{516:function(t,a,s){"use strict";s.r(a);var e=s(47),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("p",[t._v("jQuery 作为 JavaScript 库诞生于 2006 年 1 月，由 Johon Resig 编写、发布。它虽然不是第一款 JavaScript 库，但是是当今最流行的 JavaScript 库。")]),t._v(" "),s("p",[t._v("jQuery 的核心功能包括：")]),t._v(" "),s("ul",[s("li",[t._v("取得文档中的元素")]),t._v(" "),s("li",[t._v("修改页面的外观")]),t._v(" "),s("li",[t._v("改变文档的内容")]),t._v(" "),s("li",[t._v("响应用户的交互操作")]),t._v(" "),s("li",[t._v("为页面添加动态效果")]),t._v(" "),s("li",[t._v("无需刷新页面从服务器获取信息")]),t._v(" "),s("li",[t._v("简化常见的 JavaScript 任务")])]),t._v(" "),s("p",[t._v("jQuery 有 "),s("code",[t._v("1.x")]),t._v("、"),s("code",[t._v("2.x")]),t._v(" 和 "),s("code",[t._v("3.x")]),t._v(" 三大版本。它们的主要区别在于：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.x 版本支持低版本浏览器"),s("small",[t._v("（特别是 IE8）")]),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("2.x 版本则不支持低版本浏览器，从而『瘦身』很多；")])]),t._v(" "),s("li",[s("p",[t._v("3.x 版本更加激进，它需要利用新浏览器的 "),s("strong",[t._v("Strict Mode")]),t._v(" 特性和浏览器的新功能。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择器"}},[t._v("#")]),t._v(" 2. 选择器")]),t._v(" "),s("p",[t._v("jQuery 最强大、最吸引人的特性之一就是它能够简化在 DOM 中选择元素的任务。")]),t._v(" "),s("p",[t._v("jQuery 中可以通过与 CSS 相同的『"),s("strong",[t._v("选择器语法")]),t._v("』来选中 DOM 树中的某个或某些元素节点。甚至 jQuery 还提供了它所特有的选择器。")]),t._v(" "),s("h3",{attrs:{id:"_1-jquery-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-jquery-对象"}},[t._v("#")]),t._v(" 1. jQuery 对象")]),t._v(" "),s("p",[t._v("在使用 jQuery 选择器时，我们首先必须使用 "),s("code",[t._v("$()")]),t._v(" 函数来包装我们的 CSS 规则。而 CSS 规则作为参数传递到 jQuery 对象内部后，再返回包含页面中对应元素的『"),s("strong",[t._v("jQuery 对象")]),t._v("』。随后，我们就可以对这个获取到的 DOM 节点进行行为操作了。")]),t._v(" "),s("p",[t._v("通过使用 jQuery 对象可以实现和使用 DOM 对象同样的效果。但是 jQuery 对象和 DOM 对象是不同的。")]),t._v(" "),s("p",[t._v("jQuery 对象和 DOM 对象是不同的体系中的对象，两者的属性和方法『"),s("strong",[t._v("不能")]),s("small",[t._v("（不能、不能）")]),t._v("』混用。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("你获得的是 DOM 对象"),s("small",[t._v("（例如，"),s("strong",[t._v("getElementById")]),t._v(" 方法的返回值）")]),t._v("，接下来，你要使用的是 DOM 对象的属性和方法。")])]),t._v(" "),s("li",[s("p",[t._v("你获得的是 jQuery 对象"),s("small",[t._v("（例如，"),s("code",[t._v("$")]),t._v(" 方法的返回值）")]),t._v("，接下来，你要使用的是 jQuery 对象的属性和方法。")])])]),t._v(" "),s("p",[t._v("jQuery 对象是 DOM 对象的容器、集合。一个 jQuery 对象中包含着一个或多个 DOM 对象。如果有需要，你可以从中取出 DOM 对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("dom_obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jquery_obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("反过来，如果你手头拥有的是一个 DOM 对象，你也可以直接构造出一个 jQuery 对象，从而去使用 jQuery 体系中的属性和方法来简化代码。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("jqeury_obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom_obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-核心选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心选择器"}},[t._v("#")]),t._v(" 2. 核心选择器")]),t._v(" "),s("ul",[s("li",[t._v("类型选择器")]),t._v(" "),s("li",[t._v("id 选择器")]),t._v(" "),s("li",[t._v("class 选择器")]),t._v(" "),s("li",[t._v("选择器复合使用："),s("strong",[t._v("与")]),t._v(" 和 "),s("strong",[t._v("或")])])]),t._v(" "),s("p",[t._v("例如："),s("code",[t._v("$('#box').css('color', 'red');")])]),t._v(" "),s("p",[t._v("元素的 id（应该）具有唯一性，但是元素的标签名和 class 不具备唯一性，所以在使用标签选择器和 class 选择器时，可能会匹配多个，此时可以使用 jQuery 自带的 "),s("strong",[t._v("length")]),t._v(" 属性和 "),s("strong",[t._v("size")]),t._v(" 方法来查看匹配的元素个数。")]),t._v(" "),s("p",[t._v("我们通过 jQuery 的各种选择符和方法取得的结果集合会被包装在 jQuery 对象中。通过 jQeury 对象实际地操作这些元素会非常简单。")]),t._v(" "),s("h3",{attrs:{id:"_3-属性选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-属性选择器"}},[t._v("#")]),t._v(" 3. 属性选择器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("具有属性 attr 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr='val']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("属性 attr 的值为 val 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr!='val']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("属性 attr 的值不为 val 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr^='val']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("属性 attr 的值以 val 开头的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr$='val']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("属性 attr 的值以 val 结尾的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[attr*='val']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("属性 attr 的值含有 val 的元素")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-亲属关系选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-亲属关系选择器"}},[t._v("#")]),t._v(" 4. 亲属关系选择器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("<选择器1> <选择器2>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在满足 <选择器1> 的元素的子孙元素中查找"),s("br"),t._v("满足  <选择器2> 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("<选择器1> > <选择器2>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在满足 <选择器1> 的元素的子元素中查找"),s("br"),t._v("满足 <选择器2> 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("<选择器1> + <选择器2>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个元素的紧邻弟弟元素，"),s("br"),t._v("哥哥必须满足 <选择器1> ，"),s("br"),t._v("弟弟必须满足 <选择器2>")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("<选择器1> ~ <选择器2>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个元素的所有弟弟元素，"),s("br"),t._v("哥哥必须满足 <选择器1> ，"),s("br"),t._v("弟弟必须满足 <选择器2>")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-表单选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-表单选择器"}},[t._v("#")]),t._v(" 5. 表单选择器")]),t._v(" "),s("p",[t._v("相较于 CSS 选择器，表单选择器是 jQuery『多』出来选择器。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("表单选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":input")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的 input、textarea、select 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的单行文本框")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":password")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的密码框")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":radio")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的单选按钮")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":checkbox")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的复选框")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":submit")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的提交按钮")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":reset")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的重置按钮")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":button")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中所有的按钮")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-过滤器"}},[t._v("#")]),t._v(" 3. 过滤器")]),t._v(" "),s("p",[t._v("有些伪类、伪元素结合选择器使用起到了过滤结果集的作用，所以也称它们为『"),s("strong",[t._v("过滤器")]),t._v("』，过滤器也叫筛选器 。")]),t._v(" "),s("p",[t._v("jQuery 提供了若干伪选择器以便于在页面上选取表单元素。")]),t._v(" "),s("h3",{attrs:{id:"_1-索引过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引过滤器"}},[t._v("#")]),t._v(" 1. 索引过滤器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("索引过滤器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":first")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中的第一个元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":last")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中的最后一个元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":not(<选择器>)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中不符合 <选择器> 的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":even")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中索引为偶数的元素，索引从 0 开始")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":odd")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中索引为奇数的元素，索引从 0 开始")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":eq(index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中索引为指定索引的元素，索引从 0 开始")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":gt(index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中索引大于指定索引的元素，索引从 0 开始")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":lt(index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中索引小于指定索引的元素，索引从 0 开始")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-内容过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-内容过滤器"}},[t._v("#")]),t._v(" 2. 内容过滤器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("内容过滤器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":contains(<text>)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中含有指定文本的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":has(<选择器>)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中含有符合 <选择器> 的子元素的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":empty")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中不包含任何子元素或任何文本的元素")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-身份过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-身份过滤器"}},[t._v("#")]),t._v(" 3. 身份过滤器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("身份过滤器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":parent")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『具有父亲身份"),s("small",[t._v("（即含有子元素或文本）")]),t._v("』的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":first-child")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『具有长子身份』的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":last-child")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『具有幼子身份』的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":only-child")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『具有独生子身份』的元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":nth-child(odd | even | N)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『具有特定儿子身份的元素』的元素。"),s("br"),t._v("若传入数字，参数从 1 开始")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-表单控件状态过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-表单控件状态过滤器"}},[t._v("#")]),t._v(" 4. 表单控件状态过滤器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("表单控件状态过滤器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":enabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中处于『可用状态』的表单控件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中处于『不可用状态』的表单控件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":checked")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中处于『选中状态』的表单控件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":selected")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中『被选中』的 "),s("code",[t._v("<option>")]),t._v(" 元素")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-可见性过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-可见性过滤器"}},[t._v("#")]),t._v(" 5. 可见性过滤器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("可见性过滤器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":hidden")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中所有不可见元素。包括: "),s("br"),t._v(" "),s("code",[t._v("visibility: hidden")]),t._v("、 "),s("code",[t._v("display: none")]),t._v("、"),s("code",[t._v('<input type="hidden">')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":visible")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("过滤出原结果集中所有可见元素")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-操作-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-操作-dom"}},[t._v("#")]),t._v(" 4. 操作 DOM")]),t._v(" "),s("h3",{attrs:{id:"_1-元素属性操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-元素属性操作"}},[t._v("#")]),t._v(" 1. 元素属性操作")]),t._v(" "),s("p",[s("strong",[t._v("attr")]),t._v(" 方法『"),s("strong",[t._v("同时兼具")]),t._v("』对元素属性的『取值、设值』功能。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("attr")]),t._v(" 方法当前操作是取值操作，还是设值操作？取决于方法的 "),s("strong",[t._v("参数细节")]),t._v(" 。")])]),t._v(" "),s("li",[s("p",[t._v("如果是『取值』操作，则该操作针对结果集中的『"),s("strong",[t._v("第一个")]),t._v("』元素。")])]),t._v(" "),s("li",[s("p",[t._v("如果是『设值』操作，则该操作针对结果集中的『"),s("strong",[t._v("每一个")]),t._v("』元素。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("像 attr 方法这样，同时兼具取值和设值功能的常见方法还有： "),s("strong",[t._v("pro")]),t._v(" 方法、"),s("strong",[t._v("text")]),t._v(" 方法、"),s("strong",[t._v("html")]),t._v(" 方法、"),s("strong",[t._v("val")]),t._v(" 方法、"),s("strong",[t._v("css")]),t._v(" 方法。")]),t._v(" "),s("p",[t._v("关于它们的『取值』和『设值』、『第一个』和『每一个』问题后续不再重复讲解。")])]),t._v(" "),s("p",[s("strong",[t._v("attr")]),t._v(" 方法常见形式:")]),t._v(" "),s("ul",[s("li",[t._v("取值："),s("strong",[t._v(".attr( 属性名 )")])]),t._v(" "),s("li",[t._v("设值："),s("strong",[t._v(".attr( 属性名, 属性值 )")])]),t._v(" "),s("li",[t._v("设值："),s("strong",[t._v(".attr( {属性名:属性值, 属性名:属性值, ...} )")])])]),t._v(" "),s("p",[t._v("通过 "),s("strong",[t._v("removeAttr(属性名)")]),t._v(" 方法可以删除元素的指定属性，该操作针对结果集中的『"),s("strong",[t._v("每一个")]),t._v("』元素。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("此处的『"),s("strong",[t._v("属性")]),t._v("』指的是 HTML 属性"),s("small",[t._v("（Attribute）")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_2-html-属性和-dom-属性、attr-方法和-prop-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-html-属性和-dom-属性、attr-方法和-prop-方法"}},[t._v("#")]),t._v(" 2. HTML 属性和 DOM 属性、attr 方法和 prop 方法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Attribute 是指 HTML 中的属性；")])]),t._v(" "),s("li",[s("p",[t._v("Property 是指 DOM 中的属性。"),s("strong",[t._v("优先考虑使用")]),t._v("。")])])]),t._v(" "),s("p",[t._v("由于页面上的元素，和内存中的元素对象"),s("small",[t._v("（DOM 对象）")]),t._v("是一一对应的。因此，大多数情况下，HTML 中的 "),s("strong",[t._v("attribute")]),t._v("，DOM 中都有与之对应的 "),s("strong",[t._v("property")]),t._v(" 。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#li1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#li1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("但是两者也有不一样的地方：")]),t._v(" "),s("h4",{attrs:{id:"区别一-有可能没有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别一-有可能没有"}},[t._v("#")]),t._v(" 区别一：有可能没有")]),t._v(" "),s("p",[t._v("有些 DOM 中有的 property，HTML 中没有这样的 attribute")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#li1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nodeName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#li1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nodeName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"区别二-数据类型不一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别二-数据类型不一致"}},[t._v("#")]),t._v(" 区别二：数据类型不一致")]),t._v(" "),s("p",[t._v("虽然有，但是有些 DOM 中的与之对应的 property 的值的类型却不一样")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("总的来说，在 JavaScript 中『"),s("strong",[t._v("优先考虑使用 Property")]),t._v("』。")]),t._v(" "),s("h3",{attrs:{id:"_3-元素内容操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-元素内容操作"}},[t._v("#")]),t._v(" 3. 元素内容操作")]),t._v(" "),s("p",[s("strong",[t._v("html")]),t._v(" 方法和 "),s("strong",[t._v("text")]),t._v(" 方法是对元素的 html 内容和文本内容进行读写操作。")]),t._v(" "),s("ul",[s("li",[t._v("取值："),s("code",[t._v(".html()")]),t._v(" 、 "),s("code",[t._v(".text()")])]),t._v(" "),s("li",[t._v("设值："),s("code",[t._v(".html(内容)")]),t._v(" 、 "),s("code",[t._v(".text(内容)")])])]),t._v(" "),s("p",[s("strong",[t._v(".html")]),t._v(" 方法获取和设置的是 HTML 内容，例如："),s("code",[t._v("<strong>好好学习</strong>")]),t._v("；"),s("strong",[t._v(".text")]),t._v(" 方法获取和设置的是纯文本内容，例如："),s("code",[t._v("好好学习")]),t._v(" 。")]),t._v(" "),s("p",[t._v("对于表单元素，jQuery 提供了 "),s("strong",[t._v(".val")]),t._v(" 方法获得表单元素的值进行读写。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("取值："),s("code",[t._v(".val()")])])]),t._v(" "),s("li",[s("p",[t._v("设值："),s("code",[t._v(".val(新值)")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-元素样式操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-元素样式操作"}},[t._v("#")]),t._v(" 4. 元素样式操作")]),t._v(" "),s("p",[t._v("通过 "),s("strong",[t._v(".css")]),t._v(" 方法可以对样式的内容进行 "),s("strong",[t._v("获取")]),t._v("、"),s("strong",[t._v("设置")]),t._v(" 操作。")]),t._v(" "),s("ul",[s("li",[t._v("取值："),s("em",[t._v(".css( 属性名 )")])]),t._v(" "),s("li",[t._v("设值："),s("em",[t._v(".css( 属性名, 属性值 )")])])]),t._v(" "),s("p",[t._v("另外，对于元素的 "),s("strong",[t._v("class")]),t._v(" 属性的读写，jQuery 专门提供了方法：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v(".addClass(class属性值)")]),t._v(" 为元素的 class 属性"),s("strong",[t._v("追加")]),s("small",[t._v("（追加、追加）")]),t._v("值。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v(".removeClass(class属性值)")]),t._v(" 为元素移除指定的 class。")])])]),t._v(" "),s("p",[s("strong",[t._v(".addClass")]),t._v(" 方法和 "),s("strong",[t._v(".removeClass")]),t._v(" 方法都是对选中的『"),s("strong",[t._v("每一个")]),t._v("』元素生效。")]),t._v(" "),s("h3",{attrs:{id:"_5-创建新的元素节点和插入新节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建新的元素节点和插入新节点"}},[t._v("#")]),t._v(" 5. 创建新的元素节点和插入新节点")]),t._v(" "),s("p",[t._v("通过 "),s("strong",[t._v("$(html)")]),t._v(" 即可创建一个元素节点"),s("small",[t._v("（确切地说是一个 jQuery 对象）")]),t._v("，再通过上述方法可以为该"),s("small",[t._v("（新）")]),t._v("节点添加内容、属性、CSS 样式。")]),t._v(" "),s("p",[t._v("添加节点从『"),s("strong",[t._v("添加角度")]),t._v("』和『"),s("strong",[t._v("添加位置")]),t._v("』两个条件来看分为四种：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("父子添加")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.append(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 A 元素的末尾添加 B 元素。添加后，A 是父元素，B 是其最后子元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.appendTo(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 A 元素添加至 B 元素某位。添加后，B 是父元素，A 是其最后子元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.prepend(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 A 元素的前部添加 B 元素。添加后，A 是父元素，B 是其第一子元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.prependTo(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 A 元素添加至 B 元素前部。添加后，B 是父元素，A 是其第一子元素")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("兄弟添加")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.after(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 A 元素的后面添加 B 元素。添加后，A 是兄元素，B 是其弟元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.insertAfter(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 A 元素添加到B元素的后面。添加后，B 是兄元素，A 是其弟元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.before(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 A 元素的前面添加 B 元素。添加后，B 是兄元素，A 是其弟元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A.insertBefore(B)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 A 元素添加到 B 元素的前面。添加后，A 是兄元素，B 是其弟元素")])])])]),t._v(" "),s("p",[s("strong",[t._v(".clone")]),t._v(" 方法是以复制的方式创建一个新的元素节点。默认情况下是不复制源元素的事件处理方法的。"),s("strong",[t._v(".clone(true)")]),t._v(" 表示也复制其事件处理方法。")]),t._v(" "),s("h3",{attrs:{id:"_6-删除和替换元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-删除和替换元素节点"}},[t._v("#")]),t._v(" 6. 删除和替换元素节点")]),t._v(" "),s("p",[s("strong",[t._v(".remove")]),t._v(" 方法将会从页面上删除结果集中的『"),s("strong",[t._v("每一个")]),t._v("』元素。")]),t._v(" "),s("p",[s("strong",[t._v(".empty")]),t._v(" 方法删除的并非元素本身，而是清空元素的所有『"),s("strong",[t._v("子元素")]),t._v("』"),s("small",[t._v("（包括文本内容）")]),t._v("，但本元素仍存在。")]),t._v(" "),s("p",[t._v("通过 "),s("strong",[t._v(".replaceWith")]),t._v(" 方法可以将结果集中的『"),s("strong",[t._v("每一个")]),t._v("』元素替换成参数指定的 HTML 或 DOM 元素。")]),t._v(" "),s("h3",{attrs:{id:"_7-遍历结果集中的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-遍历结果集中的元素"}},[t._v("#")]),t._v(" 7. 遍历结果集中的元素")]),t._v(" "),s("p",[t._v("jQuery 提供了 "),s("strong",[t._v(".each")]),t._v(" 方法简化了 for 循环遍历结果集。该方法要求传入一个函数，jQuery 会循环调用这个函数。")]),t._v(" "),s("p",[t._v("该函数每一轮循环中有 "),s("strong",[t._v("this")]),t._v(" 关键字可用，它代表着本轮循环所处理的 DOM 对象。另外，该函数还接受一个形参 index，此参数为遍历的当前元素的下标索引，从 0 开始。")]),t._v(" "),s("h2",{attrs:{id:"_5-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-事件"}},[t._v("#")]),t._v(" 5. 事件")]),t._v(" "),s("h3",{attrs:{id:"_1-jquery-的-ready-事件的两种写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-jquery-的-ready-事件的两种写法"}},[t._v("#")]),t._v(" 1. jQuery 的 ready 事件的两种写法")]),t._v(" "),s("p",[s("code",[t._v("$(document).ready()")]),t._v(" 事件处理程序可以用来响应网页的加载（load）事件。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("表面上看起来，"),s("code",[t._v("$(document).ready()")]),t._v(" 实现了和 window.onload 同样的效果，但是两者有些许小区别：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("触发时机不同")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("window.onload 触发时，表示浏览器接受/下载了所有文档（例如，包括图片）；")])]),t._v(" "),s("li",[s("p",[t._v("而 "),s("code",[t._v("$(document).ready()")]),t._v(" 触发时，表示 DOM 完全就绪并可用，此时页面所关联的文件并不意味下载完毕。")])])])]),t._v(" "),s("li",[s("p",[t._v("调用次数不同")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("一个页面上只能执行一次 window.onload；")])]),t._v(" "),s("li",[s("p",[t._v("但可以执行多个 "),s("code",[t._v("$(document).ready()")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-绑定事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-绑定事件"}},[t._v("#")]),t._v(" 2. 绑定事件")]),t._v(" "),s("p",[t._v("jQuery 还提供了 "),s("strong",[t._v(".bind()")]),t._v(" 方法进行事件的绑定。"),s("strong",[t._v(".bind()")]),t._v(" 方法需要两个必要的参数，一个是事件名称，另一个是处理函数。")]),t._v(" "),s("p",[t._v("除此之外，jQuery 为 "),s("strong",[t._v(".bind()")]),t._v(" 方法提供了简化方式： "),s("strong",[t._v("xxx()")]),t._v(" 方法。 对于 "),s("strong",[t._v("xxx")]),t._v(" 事件直接使用 "),s("strong",[t._v(".xxx()")]),t._v(" 绑定方法，例如: "),s("strong",[t._v(".click()")]),t._v(" 方法。这样的绑定方法要求传入一个函数，表示当指定元素上发生此事件时，就执行所传入的函数。")]),t._v(" "),s("h3",{attrs:{id:"_3-模拟鼠标悬停事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-模拟鼠标悬停事件"}},[t._v("#")]),t._v(" 3. 模拟鼠标悬停事件")]),t._v(" "),s("p",[s("strong",[t._v("hover()")]),t._v(" 方法模拟了鼠标悬停事件，当进入元素区域时，执行一个参数 function，离开元素区域时执行另一个参数 function 。")]),t._v(" "),s("h3",{attrs:{id:"_4-移除事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-移除事件"}},[t._v("#")]),t._v(" 4. 移除事件")]),t._v(" "),s("p",[t._v("在 jQuery 中，可以通过 "),s("strong",[t._v("unbind()")]),t._v(" 方法可以移除绑定的所有事件或指定某一个事件，它是 "),s("strong",[t._v("bind()")]),t._v(" 操作的反向操作。")]),t._v(" "),s("p",[t._v("如果没有参数，则删除所有绑定事件。如果提供事件类型作为参数，则只删除该类型的绑定事件。如果还有第二个参数 function，则只移除绑定指定的函数。")]),t._v(" "),s("h2",{attrs:{id:"_6-动画与特效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-动画与特效"}},[t._v("#")]),t._v(" 6. 动画与特效")]),t._v(" "),s("p",[t._v("jQuery 中的 "),s("strong",[t._v("show()")]),t._v(" 与 "),s("strong",[t._v("hide()")]),t._v(" 方法，不仅可以实现“无动画”版的显示与隐藏，还可以完成有动画效果的显示和隐藏，只需要在为方法传入表示动画持续时间（或 "),s("strong",[t._v("slow")]),t._v(" | "),s("strong",[t._v("normal")]),t._v(" | "),s("strong",[t._v("fase")]),t._v("）的参数 。")]),t._v(" "),s("p",[s("strong",[t._v("slideDown()")]),t._v(" 和 "),s("strong",[t._v("slideUp()")]),t._v(" 方法实现了元素滑动的效果 。")]),t._v(" "),s("p",[s("strong",[t._v("fadeIn()")]),t._v(" 和 "),s("strong",[t._v("faseOut()")]),t._v(" 方法实现了淡入淡出效果")])])}),[],!1,null,null,null);a.default=_.exports}}]);