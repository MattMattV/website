---
layout: default
title: Articles
description: Tous les articles du blog
---
<a href="/">← accueil</a>

# Articles

Liste des catégories :
{% for category in site.categories %}
- [{{category | first}}](#{{category | first}})
{% endfor %}

{% for category in site.categories %}
## {{ category | first }}
{% for post in category.last %}
- {{ post.date | date: "%d/%m/%Y" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
{% endfor %}

<br>
<img class="tiny-icon" alt="Logo de la syndication du contenu (Atom)" src="/assets/img/rss.svg">
<a href="/feed.atom">
    Flux Atom
</a>


