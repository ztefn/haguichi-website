---
title: Home
layout: default
class: index
order: 1
---
{% assign sorted_sections = site.sections | sort:"order" %}
{% for section in sorted_sections %}
<section id="{{ section.slug }}" class="{{ section.class }}">
  <div class="wrapper">
    {{ section.content }}
  </div>
</section>
{% endfor %}
