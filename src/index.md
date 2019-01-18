---
layout: default
title: Accueil
description: Page d'accueil
---
<h1>{{site.name}}</h1>
<p>{{site.description}}</p>

<hr>

<h3>Articles</h3>
<p>
    <img class="tiny-icon" alt="Logo de la syndication du contenu (RSS/Atom)" src="/assets/img/rss.svg">
    <a href="/feed.atom">
        Flux Atom
    </a>
</p>
<ul>
    {% for post in site.posts reversed %}
    <li>
        {{ post.date | date: "%d/%m/%Y" }}
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>
