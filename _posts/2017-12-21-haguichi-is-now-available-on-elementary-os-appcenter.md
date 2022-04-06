---
title: Haguichi Is Now Available on Elementary OS AppCenter
date: 2017-12-21T23:57:45+0100
author: ztefn
layout: post
permalink: /news/haguichi-is-now-available-on-elementary-os-appcenter/
tags: [appcenter, indicator, packaging, ppa]
---
Christmas presents are early this year: **Haguichi has been published on AppCenter!**
  
This means <a href="https://elementary.io/" target="_blank">elementary OS</a> users now have the pleasure to install Haguichi in a fast and simple way. By clicking the button below, for example.

[<img class="aligncenter" src="https://appcenter.elementary.io/badge.svg" alt="Get it on AppCenter" />](https://appcenter.elementary.io/com.github.ztefn.haguichi)

<img style="float: right;" src="https://raw.githubusercontent.com/ztefn/haguichi/elementary-loki/data/screenshots/1.png" alt="Haguichi on elementary OS" />The version shipped through AppCenter is specially crafted to fit in with elementary OS even better than before. It&#8217;s equipped with a colored headerbar for instant recognizability and has received other small visual tweaks.

For the moment, there is one thing missing compared to the vanilla version. That is the indicator in the panel. Currently, this is a separate package and that&#8217;s not very practical for distribution through AppCenter. So my plan is to integrate the indicator into Haguichi itself in one of the next releases.

I hope you elementary OS users out there like it! In case you have some questions, requests, ideas or other feedback you can either leave a comment below, <a href="https://github.com/ztefn/haguichi/issues" target="_blank">open an issue on GitHub</a> or use one of the other [contact](/about/#contact) options.

_PS: If you already have Haguichi installed using the PPA repository and want to remove it (so that you only have the AppCenter version), you can do so by entering the following commands in a terminal:_<br>
<code class="user clipboard">sudo apt update</code><br>
<code class="user clipboard">sudo apt install ppa-purge</code><br>
<code class="user clipboard">sudo ppa-purge ppa:webupd8team/haguichi</code>
