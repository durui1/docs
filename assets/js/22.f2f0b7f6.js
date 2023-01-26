(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{391:function(v,_,t){"use strict";t.r(_);var o=t(47),e=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"定位与浮动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位与浮动"}},[v._v("#")]),v._v(" 定位与浮动")]),v._v(" "),t("p",[v._v("浏览器在“摆放”元素时，默认的规则是：按照HTML文档中元素出现的顺序 "),t("strong",[v._v("依次")]),v._v(" “摆放”。换行与否，则取决于元素的盒子类型")]),v._v(" "),t("p",[v._v("这种“依次”的先后关系，让元素排了一个队列，这种逻辑上队列也被称为 "),t("strong",[v._v("文档流")]),v._v(" 。")]),v._v(" "),t("p",[v._v("在 CSS 中通过 "),t("strong",[v._v("position")]),v._v(" 属性表明定位机制。定位机制决定了浏览器“摆放”元素的规则，也就决定了元素在页面上的位置。")]),v._v(" "),t("p",[t("strong",[v._v("position")]),v._v(" 属性有四种取值："),t("code",[v._v("static")]),v._v(" | "),t("code",[v._v("relative")]),v._v(" | "),t("code",[v._v("absolute")]),v._v(" | "),t("code",[v._v("fixed")]),v._v(" 。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("position")]),v._v(" 属性的默认值是 "),t("code",[v._v("static")]),v._v("。这意味着本元素是在"),t("strong",[v._v("文档流")]),v._v("中的，所以本元素在页面上的摆放位置完全按照上述的默认规则摆放。")]),v._v(" "),t("p",[v._v("但凡 "),t("strong",[v._v("position")]),v._v(" 属性值不为 "),t("code",[v._v("static")]),v._v(" 的，则称该元素***脱离*** 了文档流。如果 B 元素“脱离”了文档流，则意味着在逻辑顺序上，A 元素的后一个不再是 B 元素，而是 C 元素。同样，C 元素的前一个不再是 B 元素，而是 A 元素。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("position")]),v._v(" 属性值为 "),t("code",[v._v("relative")]),v._v(" 不仅意味着本元素脱离文档流，还表明本元素的定位为 "),t("strong",[v._v("相对定位")]),v._v("。本元素脱离文档流后，它原来所占据的空间依然保留，所以表面上看起来和 "),t("code",[v._v("static")]),v._v(" 的情况一样。")]),v._v(" "),t("p",[v._v("这种定位之所以叫相对定位，是因为这个元素可"),t("em",[v._v("相对于它原来位置")]),v._v(" 作位移。")]),v._v(" "),t("p",[v._v("配合 "),t("code",[v._v("position: relative;")]),v._v("，有 "),t("strong",[v._v("top")]),v._v("、"),t("strong",[v._v("bottom")]),v._v("、"),t("strong",[v._v("left")]),v._v("、"),t("strong",[v._v("right")]),v._v(" 四个属性可用。要使盒子位置相对于其初始位置垂直上下移动，可使用 "),t("code",[v._v("top")]),v._v(" 或 "),t("code",[v._v("bottom")]),v._v(" 属性；要使盒子相对于其初始位置水平左右移动，可使用 "),t("code",[v._v("left")]),v._v(" 或 "),t("code",[v._v("right")]),v._v(" 属性。这些属性的值通常是像素值。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("position")]),v._v(" 属性值为 "),t("code",[v._v("absolute")]),v._v(" 与 "),t("code",[v._v("relative")]),v._v(" 的情况类似，只不过本元素并不是相对于其初始位置作定位，而是***相对于离它最近的非static祖先作定位*** 。通常这个祖先是 "),t("code",[v._v("relative")]),v._v(" 的。")]),v._v(" "),t("p",[v._v("如果本元素的所有祖先中没有任何一个是非static的，那么它就是相对于 "),t("code",[v._v("<body>")]),v._v(" 元素。")]),v._v(" "),t("p",[v._v("配合 "),t("code",[v._v("position: absolute;")]),v._v("，也是有 "),t("code",[v._v("top")]),v._v("、"),t("code",[v._v("bottom")]),v._v("、"),t("code",[v._v("left")]),v._v("、"),t("code",[v._v("right")]),v._v(" 四个属性可用。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("code",[v._v("position: fixed")]),v._v(" 被称为固定定位，它是的元素总是相对于***窗口*** 做定位。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("当你使用相对定位（relative）、绝对定位（absolute）和固定定位（fixed）时，多个元素的盒子是有可能有重叠部分的。")]),v._v(" "),t("p",[v._v("如果要控制元素的层次，可使用 "),t("code",[v._v("z-index")]),v._v(" 属性。该属性值是一个数字，这个数字越大，这个元素的层次就越靠前（越靠近你眼睛）。这个值可以为正，也可以为负，大小多少并不重要，重要的是在多个元素间表达出层次关系即可。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("float")]),v._v(" 属性最开始的功能是实现***图文混排*** 效果，只不过，它是实际功能远远超出了最初的设想。")]),v._v(" "),t("p",[t("strong",[v._v("float")]),v._v(" 是在 "),t("code",[v._v("position: static;")]),v._v(" 情况下使用，但是使用它的元素，也会脱离文档流。这个脱离了文档流的元素，在页面上会尽可能地向左，或向右排列，直到遇到了其父元素的边界，或遇到了另一个浮动元素。")]),v._v(" "),t("p",[t("strong",[v._v("clear")]),v._v(" 属性用于表明一个元素“要求”其左侧或右侧不允许有浮动元素，浏览器对于这种要求，会考虑让其在浮动元素的下方显示。clear 属性通常用于解决"),t("em",[v._v("浮动元素父元素高度坍塌")]),v._v(" 问题。")])])}),[],!1,null,null,null);_.default=e.exports}}]);