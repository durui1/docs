(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{671:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"entity-对象转-json-时的一个异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entity-对象转-json-时的一个异常"}},[t._v("#")]),t._v(" @Entity 对象转 JSON 时的一个异常")]),t._v(" "),s("p",[t._v("在 RESTful 风格的项目中，当 Web 层将 Service 层返回的 Entity 对象转换成 JSON 格式字符串时，有可能会报如下错误:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fasterxml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jackson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("databind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("InvalidDefinitionException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("No")]),t._v(" serializer found "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hibernate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pojo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bytebuddy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ByteBuddyInterceptor")]),t._v(" and no properties discovered "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanSerializer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("avoid")]),t._v(" exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" disable "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SerializationFeature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FAIL_ON_EMPTY_BEANS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("through reference chain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childdream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Price")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HibernateProxy")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FGboGgyG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hibernateLazyInitializer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("直接分析原因的话，是因为 jackson 库在将 Entity 序列化为 JSON 格式字符串时，发现其中有一个名为 "),s("code",[t._v("hibernateLazyInitializer")]),t._v(" 为 null 。这种情况许下下，jackson 不知道该如何处理这个属性，因此它就抛出异常抱错。")]),t._v(" "),s("p",[t._v("但是，问题是我们的 Entity 中好似并没有 "),s("code",[t._v("hibernateLazyInitializer")]),t._v(" 属性!")]),t._v(" "),s("p",[t._v("这里的关键还是也延迟加载有关。实际上 Hibernate 并未真的去直接使用我们的 Entity，而是利用类似于 AOP 代理机制，去创建并使用了 Entity 的代理对象。从 Service 层返回到 Web 层的并不是真正的 Entity 对象，而是 Entity 的代理对象。")]),t._v(" "),s("p",[t._v("Entity 的代理对象中有这个 "),s("code",[t._v("hibernateLazyInitializer")]),t._v(" 属性！")]),t._v(" "),s("p",[t._v("解决掉这个异常有两种办法：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在 Entity 的头上标注 "),s("code",[t._v('@JsonIgnoreProperties(value = {"hibernateLazyInitializer"})')]),t._v(" 。")]),t._v(" "),s("p",[t._v("实际上就是在告诉 jackson，去序列化 Entity 时忽略调其中的 "),s("code",[t._v("hibernateLazyInitializer")]),t._v(" 属性。")])]),t._v(" "),s("li",[s("p",[t._v("在 Spring Boot 配置文件中配置 "),s("code",[t._v("spring.jackson.serialization.FAIL_ON_EMPTY_BEANS=false")]),t._v(" 。")]),t._v(" "),s("p",[t._v("这是在告诉 jackson，去序列化对象时，如果遇到为 null 的属性不要抛出异常，而是继续序列化。")]),t._v(" "),s("p",[t._v("这种情况下，Web 层返回给前端的 JSON 数据中会多一项："),s("code",[t._v('hibernateLazyInitializer=""')]),t._v(" 。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);