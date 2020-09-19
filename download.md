---
title: Download
layout: default
order: 3
---
<section>
  <div class="wrapper">
    <h1 style="margin-bottom: 0.4em;">{{ page.title | escape }}</h1>
  </div>
</section>
{% assign sorted_downloads = site.downloads | sort:"order" %}
{% for download in sorted_downloads %}
<section id="{{ download.slug }}" class="download-group">
  <div class="wrapper">
    {% if download.logo %}
      <div class="logo">{% include {{ download.logo }} %}</div>
    {% endif %}
    <h2 class="download-head">{{ download.title }}{% include anchor.html slug=download.slug %}</h2>
    <div class="download-content">{{ download.content }}</div>
  </div>
</section>
{% endfor %}
