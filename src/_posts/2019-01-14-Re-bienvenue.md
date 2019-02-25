---
layout: post
title: Re-bienvenue !
description: Désolé, je n'ai pas pu m'empêcher de tout casser...
category: meta
date: 2019-01-14
---

Pardon, je n'ai pas pu m'empêcher de tout casser pour tout refaire "à la main"…

Nous nous retrouvons donc sur ce blog tout neuf pour de nouvelles aventures ! Cette nouvelle année 2019 est une occasion parfaite pour un nouveau départ, j'espère pouvoir alimenter ce [cybercarnet][definition-blog] autant que possible.

Pour remplacer Ghost, mon choix s'est donc porté sur [Jekyll][jekyll], qui en plus de disposer d'un documentation claire et précise, est très flexible et donc permet de créer tout types de sites plutôt facilement.

Un petit problème que j'ai rencontré et que personne d'autre ne semble avoir, c'est de pouvoir inclure **certains** fichiers depuis des paquets NPM. Comme, par exemple, la police [IBM Plex][ibm-plex], ou encore les [icônes][tiny-icons] que j'utilise en pied de page. La solution la plus basique étant de copier le dossier `node_modules` à côté du site Jekyll généré, ce qui n'est ni très élégant, ni très optimal. J'ai donc utilisé [Gulp][gulp], créé quelques tâche pour copier les quelques fichiers, une tâche pour lancer un serveur HTTP pour la prévisualisation et TADA 🎉 !

Si vous tenez vraiment à savoir comment tout est implémenté, vous pouvez consulter mon [`gulpfile`][gulpfile].

J'espère pouvoir continuer à améliorer ce site pour y ajouter ma biographie ou encore mon <acronym title="Curriculum vitae">CV</acronym>.

N'hésitez pas à me faire vos retours sur les réseaux sociaux, pour que je puisse améliorer ce blog !

[definition-blog]: https://fr.wikipedia.org/wiki/Blog
[jekyll]: https://jekyllrb.com
[ibm-plex]: https://github.com/IBM/plex
[tiny-icons]: https://github.com/edent/SuperTinyIcons
[gulp]: https://gulpjs.com/
[gulpfile]: https://github.com/MattMattV/blog/blob/dd12c728413a4d3c060501b00eb6b31dabee0c75/gulpfile.js