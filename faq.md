---
title: FAQ
layout: page
order: 6
---
{% assign sorted_faqs = site.faqs | sort:"order" %}
{% for faq in sorted_faqs %}
<div id="{{ faq.slug }}" class="faq-group">
  <h2 class="faq-head">{{ faq.title }}{% include anchor.html slug=faq.slug %}</h2>
  <div class="faq-content">{{ faq.content }}</div>
</div>
{% endfor %}
