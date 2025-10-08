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
<section id="distributions">
  <div class="wrapper center-text">
    <h2>Distribution Specific Packages{% include anchor.html slug='distributions' %}</h2>
  </div>
  {% assign sorted_downloads = site.downloads | sort:"order" %}
  {% for download in sorted_downloads %}
  <div class="download-group">
    <details class="wrapper">
      <summary>
        <div class="logo">{% include {{ download.logo }} %}</div>
        <h3 class="download-head"><span>{{ download.title }}</span>{% include anchor.html slug=download.slug %}</h3>
      </summary>
      <div id="{{ download.slug }}" class="download-content">{{ download.content }}</div>
    </details>
  </div>
  {% endfor %}
</section>
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
