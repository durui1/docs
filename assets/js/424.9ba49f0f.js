(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{793:function(n,e,t){"use strict";t.r(e);var a=t(47),v=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-解压版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-解压版"}},[n._v("#")]),n._v(" Nginx 解压版")]),n._v(" "),t("p",[n._v('Nginx（"engine x"）是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP/POP3/SMTP 代理服务器。 Nginx 是由 Igor Sysoev 为俄罗斯访问量第二的 Rambler.ru 站点开发的，第一个公开版本 0.1.0 发布于 2004 年 10 月 4 日。其将源代码以类 BSD 许可证的形式发布，因它的稳定性、丰富的功能集、示例配置文件和低系统资源的消耗而闻名。2011 年 6 月 1 日，nginx 1.0.4 发布。')]),n._v(" "),t("h2",{attrs:{id:"下载-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-安装"}},[n._v("#")]),n._v(" 下载/安装")]),n._v(" "),t("p",[n._v("从官网 "),t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[t("em",[n._v("http://nginx.org/en/download.html")]),t("OutboundLink")],1),n._v(" 下载最新的文档版。例如："),t("code",[n._v("nginx-1.18.0")]),n._v(" 。")]),n._v(" "),t("p",[n._v("解压 "),t("em",[t("code",[n._v("nginx-1.18.0.zip")])]),n._v(" 到本地目录。"),t("small",[n._v("按惯例，路径中不要有中文，最好不要有空格。")]),n._v("例如："),t("code",[n._v("D:\\ProgramFiles\\nginx-1.18.0")]),n._v(" 。")]),n._v(" "),t("p",[n._v("解压后，可到看到如下内容：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("nginx-1.18.0\n│── conf        配置文件目录\n├── contrib\n├── docs\n├── html        类似 tomcat 的 webapps\n├── logs        日志目录\n├── temp\n└── nginx.exe   启动程序\n")])])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[n._v("#")]),n._v(" 启动")]),n._v(" "),t("p",[n._v("启动 Nginx 的方式有 2 种：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("直接双击 "),t("code",[n._v("nginx.exe")]),n._v("。双击后一个黑色的弹窗一闪而过。")])]),n._v(" "),t("li",[t("p",[n._v("打开 cmd 命令窗口，切换到 nginx 解压目录下，输入命令 "),t("code",[n._v("nginx.exe")]),n._v(" 或者 "),t("code",[n._v("start nginx")]),n._v(" 。")])])]),n._v(" "),t("p",[n._v("检查 Nginx 是否启动成功的方式也有 2 种：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("直接在浏览器地址栏输入网址 "),t("a",{attrs:{href:"http://localhost:80",target:"_blank",rel:"noopener noreferrer"}},[t("em",[n._v("http://localhost:80")]),t("OutboundLink")],1),n._v(" 。你会看到欢迎页面。")])]),n._v(" "),t("li",[t("p",[n._v("在 cmd 命令窗口输入命令 "),t("code",[n._v('tasklist /fi "imagename eq nginx.exe"')]),n._v(" 。你会看到类似如下页面：")]),n._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("映像名称    PID     会话名      会话#   内存使用\n=========== ======= =========== ======= ============\nnginx.exe   17220   Console     8       7,148 K\nnginx.exe   17660   Console     8       7,508 K\n")])])])])]),n._v(" "),t("h2",{attrs:{id:"关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[n._v("#")]),n._v(" 关闭")]),n._v(" "),t("p",[n._v("如果使用 cmd 命令窗口启动 nginx，关闭 cmd 窗口是"),t("strong",[n._v("不能")]),n._v("结束 nginx 进程的。")]),n._v(" "),t("p",[n._v("可使用两种方法关闭 nginx：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("输入 "),t("code",[n._v("nginx")]),n._v(" 命令："),t("code",[n._v("nginx -s stop")]),t("small",[n._v("（快速停止 nginx）")]),n._v("或 "),t("code",[n._v("nginx -s quit")]),t("small",[n._v("（完整有序的停止 nginx）")]),n._v("。")])]),n._v(" "),t("li",[t("p",[n._v("使用 "),t("code",[n._v("taskkill")]),n._v(" 命令：   "),t("code",[n._v("taskkill /f /t /im nginx.exe")]),n._v(" 。")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);