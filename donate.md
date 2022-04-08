---
title: Donate
layout: page
order: 8
---
Support development by making a donation! You can donate any amount you wish by clicking on the button below:

<p><a class="button" href="https://www.paypal.me/ztefn" target="_blank">Donate via PayPal {% include logos/paypal.svg %}</a></p><br>
If you donate €10 or more, you may provide a website URL that your name in the list below should link to for a full year. Donate €25 or more and your link will stay forever!

<h2 id="donations">List of Donations{% include anchor.html slug='donations' %}</h2>
{% assign donations_by_year = site.donations | group_by_exp:"donation", "donation.date | date: '%Y'" %}
{% for year in donations_by_year reversed %}
  <h3>{{ year.name }}</h3>
  <ul>
  {% for donation in year.items reversed %}
    <li>
    {% assign show_website = false %}
    {% if donation.website %}
    {% assign date_untill = donation.date | date: "%s" | plus: 31556926 %}
    {% assign date_now = 'now' | date: "%s" | plus: 0 %}
      {% if donation.amount >= 25 or donation.amount >= 10 and date_now <= date_untill %}
        {% assign show_website = true %}
      {% endif %}
    {% endif %}
    {% if show_website %}<a href="{{ donation.website }}" rel="nofollow" target="_blank">{% endif %}{{ donation.title }}{% if show_website %}</a>{% endif %},
    {% assign amount_split = donation.amount | round: 2 | split: "." %}
    {% assign integral = amount_split[0] %}
    {% assign fractional = amount_split[1] | append: "00" | truncate: 2, "" %}
    {{ donation.currency }}{{ integral }}.{{ fractional }}
    </li>
  {% endfor %}
  </ul>
{% endfor %}
