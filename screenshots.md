---
title: Screenshots
layout: default
class: screenshots
order: 4
---
{% assign sorted_screenshots = site.screenshots | sort:"order" %}
{% for screenshot in sorted_screenshots %}
<section id="{{ screenshot.slug }}" class="{{ screenshot.class }}">
  <div class="wrapper">
    <h2>{{ screenshot.title }}{% include anchor.html slug=screenshot.slug %}</h2>
    {{ screenshot.content }}
  </div>
</section>
{% endfor %}
