---
layout: default
title: Curriculum vitæ
---
<h1>Curriculum vitæ</h1>


<ul>
    {% for skill in site.data.cv.skills %}
    <li>
       {{ skill }}
    </li>
    {% endfor %}
</ul>
