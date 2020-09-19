---
title: Tags
layout: page
permalink: /news/tag/
exclude: true
---
<ul class="tags">
{% for post_tag in site.post_tags %}
  <li><a class="tag" href="{{ post_tag.url }}">{{ post_tag.title }}</a></li>
{% endfor %}
</ul>
