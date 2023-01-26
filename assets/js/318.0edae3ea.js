(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{686:function(t,a,s){"use strict";s.r(a);var e=s(47),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据校验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据校验"}},[t._v("#")]),t._v(" 数据校验")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("在 Web 应用程序中，为了防止客户端传来的数据引发程序异常，常常需要对数据进行验证。")]),t._v(" "),s("p",[t._v("数据验证分为：")]),t._v(" "),s("ul",[s("li",[t._v("客户端验证\n"),s("ul",[s("li",[t._v("客户端验证主要通过 JavaScript 脚本进行。")])])]),t._v(" "),s("li",[t._v("服务端验证\n"),s("ul",[s("li",[t._v("服务端验证主要通过 Java 代码进行验证。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("为了保证数据的安全性，客户端和服务端验证都是必须的。")])]),t._v(" "),s("p",[t._v("Spring MVC 提供了强大的数据校验功能，其中有两种方法可以验证输入：")]),t._v(" "),s("ul",[s("li",[t._v("利用 Spring 自带的 Validation 校验框架（早于 JSR 303，不建议使用）")]),t._v(" "),s("li",[t._v("利用 JSR 303（Java 校验规范）实现校验功能")])]),t._v(" "),s("p",[t._v("JSR 只是一套规范，其具体的实现中 Hibernate Validator 是最常见的实现，它即实现了 JSR 303 的要求，又实现了更新的 JSR 349 的要求）。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("由于版本原因，"),s("code",[t._v("使用 hibernate-validator 6.x 版本")]),t._v(" 和 "),s("code",[t._v("使用 tomcat 7 插件")]),t._v(" 只能二选一。")])]),t._v(" "),s("p",[t._v("Spring MVC 对 JSR 提供了良好的支持，如果，Spring MVC 的配置文件中配置了 "),s("code",[t._v("<mvc:annotation-driven />")]),t._v("，那么就不再需要其它任何配置了。")]),t._v(" "),s("p",[t._v("以下 "),s("strong",[t._v("所有")]),t._v(" 注解都有 "),s("code",[t._v("message")]),t._v(" 属性用以在验证不通过是显示提示信息。")]),t._v(" "),s("h2",{attrs:{id:"jsr-303-的注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsr-303-的注解"}},[t._v("#")]),t._v(" JSR 303 的注解")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("注解")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Null")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须为 null")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@NotNull")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须不为 null")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@AssertTrue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须为 true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@AssertFalse")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须为 false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Min")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须是一个数字，其值必须小于指定值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Max")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须是一个数字，其值必须大于指定值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@DecimalMin")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须是一个数字，其值必须小于指定值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@DecimalMax")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的元素必须是一个数字，其值必须大于指定值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Size(min, max)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被注解的数组和集合型元素的长度是必须给定的范围之内")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Digits(integer, fraction)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求字符串必须是数字型字符串，且整数部分有 interger 位，小数部分有 fraction 位。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Past")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求必须是一个过去日期。用于 Date 和 Calendar")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Future")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求必须是一个未来日期。用于 Date 和 Calendar")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Pattern(regexp, flag)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求字符串内容必须符合正则表达式的规则")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Valid")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求递归检查数组和容器中关联对象。")])])])]),t._v(" "),s("p",[t._v("所有的这些注解都有 message 属性，用于设置错误提示信息"),s("small",[t._v("（如果没有设置，则会有默认的错误提示信息）")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"hibernate-validator-的扩展注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hibernate-validator-的扩展注解"}},[t._v("#")]),t._v(" Hibernate Validator 的扩展注解")]),t._v(" "),s("p",[t._v("Hibernate Validator 实现了 JSR 303，它除了支持所有标准的校验注解外，还支持一些『额外』的注解：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("注解")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@NotBlank")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求字符串必须不为 NULL，且执行 trim() 后必须为非空字符串")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Email")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求字符串内容必须符合邮箱格式。但是 null 会放过")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Length(min, max)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要求字符串的长度必须在指定范围内")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@NotEmpty")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("备注解的字符串必须为非空")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("@Range(min, max)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查数字是否介于 min 和 max 之间")])])])]),t._v(" "),s("h2",{attrs:{id:"使用-jsr-303"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsr-303"}},[t._v("#")]),t._v(" 使用 JSR 303")]),t._v(" "),s("p",[s("code",[t._v("注意")]),t._v(" 使用验证框架时，请求处理方法的参数对象必须用 "),s("code",[t._v("@Valid")]),t._v(" 注解修饰，并且处理方法要多出一个 "),s("code",[t._v("BindingResult")]),t._v(" 参数对象。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Valid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BindingResult")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("BindingResult")]),t._v(" 参数对象中包含了验证结果，及其相关信息。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasErrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FieldError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFieldErrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FieldError")]),t._v(" error "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefaultMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("更优雅的改进方案：结合全局异常处理，当 "),s("code",[t._v("result.hasErrors() == true")]),t._v(" 时，在 Controller 中直接抛出异常，由 Controller 的异常处理类来解析 BindingResult 中的异常信息，并返回对应的错误信息给客户端。")])])}),[],!1,null,null,null);a.default=n.exports}}]);