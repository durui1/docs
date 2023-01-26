(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{510:function(t,a,e){"use strict";e.r(a);var v=e(47),l=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jdbc中的日期时间问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdbc中的日期时间问题"}},[t._v("#")]),t._v(" JDBC中的日期时间问题")]),t._v(" "),e("h2",{attrs:{id:"jdbc-中的日期时间类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-中的日期时间类型"}},[t._v("#")]),t._v(" JDBC 中的日期时间类型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("列类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Java 类型")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DATE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("java.sql.Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("TIME")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("java.sql.Time")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DATETIME")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("java.sql.Timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("TIMESTAMP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("java.sql.Timestamp")])])])]),t._v(" "),e("p",[t._v("逻辑上，数据库中的 "),e("code",[t._v("DATETIME")]),t._v(" 和 "),e("code",[t._v("TIMESTAMP")]),t._v(" 都会含有 "),e("code",[t._v("DATE")]),t._v(" 和 "),e("code",[t._v("TIME")]),t._v(" 信息，它们的不同在于：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("TIMESTAMP 出现更早，DATETIME 出现更晚；")])]),t._v(" "),e("li",[e("p",[t._v("TIMESTAMP 中会包含『纳秒』级别数据，而 DATETIME 中没有；")])]),t._v(" "),e("li",[e("p",[e("small",[t._v("（和上条区别有关）")]),t._v("，TIMESTAMP 的上限更低，而 DATETIME 的上限更高。")])])]),t._v(" "),e("h2",{attrs:{id:"java-util-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-util-date"}},[t._v("#")]),t._v(" java.util.Date")]),t._v(" "),e("p",[t._v("java.util.Date 很容易和 java.sql.Date 混淆，但是它们是完全不同的两个东西。")]),t._v(" "),e("blockquote",[e("p",[t._v("java.util.Date 中会包含『日期』和『时间』两个概念；而 java.sql.Date 中只包含『日期』信息。")])]),t._v(" "),e("p",[t._v("当然，这两个 Date 也有一些关系：java.util.Date 是 java.sql.Date 的父类。基于多态特性"),e("small",[t._v("（父类的引用可指向子类的对象）")]),t._v("，你可以将 java.sql.Date 对象赋值给 java.util.Date 类型的引用。")]),t._v(" "),e("ul",[e("li")]),t._v(" "),e("p",[t._v("『』")])])}),[],!1,null,null,null);a.default=l.exports}}]);