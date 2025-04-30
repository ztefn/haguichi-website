---
title: Download
layout: default
class: download
order: 3
---
<section id="flathub" class="primary center-text">
  <div class="wrapper">
    <h1>{{ page.title | escape }}</h1>
    <p>Get the latest release for any Linux distribution via Flathub.</p>
    <p><a class="button" href="https://flathub.org/apps/com.github.ztefn.haguichi" target="_blank" alt="Get it on Flathub">{% include graphics/flathub-badge.svg %}</a></p>
  </div>
</section>
<section id="distributions" class="center-text">
  <div class="wrapper">
    <h2>Distribution Specific Packages{% include anchor.html slug='distributions' %}</h2>
  </div>
</section>
{% assign sorted_downloads = site.downloads | sort:"order" %}
{% for download in sorted_downloads %}
<section id="{{ download.slug }}" class="download-group">
  <div class="wrapper">
    {% if download.logo %}
      <div class="logo">{% include {{ download.logo }} %}</div>
    {% endif %}
    <h3 class="download-head">{{ download.title }}{% include anchor.html slug=download.slug %}</h3>
    <div class="download-content">{{ download.content }}</div>
  </div>
</section>
{% endfor %}
<section id="source-tarball" class="primary inverted">
  <div class="wrapper">
    <h2 class="center-text">Source Tarball{% include anchor.html slug='source-tarball' %}</h2>
    <p>To build Haguichi from source download the <a href="https://launchpad.net/haguichi/1.5/1.5.2/+download/haguichi-1.5.2.tar.xz" target="_blank">source tarball</a> and extract it. Open the text file named <b>INSTALL.md</b> and follow the instructions within.</p>
  </div>
</section>
<section id="old-versions" class="primary">
  <div class="wrapper">
    <h2 class="center-text">Old Versions{% include anchor.html slug='old-versions' %}</h2>
    <p>For downloads from earlier releases visit the <a href="https://launchpad.net/haguichi/+download" target="_blank">downloads archive</a> on Launchpad. These versions are only available as source tarball and they are <b>not recommended for production use</b>, just for archeology and nostalgia.</p>
  </div>
</section>
