---
name: LiveBoats
repo: https://github.com/LiveBoats/app
technologies:
    - name: Cordova
      url: https://cordova.apache.org
    - name: JavaScript
---
Lors du "Hackathon Smart Port Vallée de la Seine 2016" au Havre, mon équipe et moi-même avons prototypé une application mobile.

Notre constat de départ est simple, lorsque l'on se promène en bord de mer, on peut voir passer tout un tas de bateaux, mais que d'où viennent-ils ? Où vont-ils ? Que transportent-ils ?

Notre idée, à donc été de créer une application mobile qui permettrait, en temps réel, d'en apprendre plus sur les bateaux à proximité le tout en réalité augmentée.

Pour ce hackathon, l'organisation avait mis toutes sortes de ressources à disposition, nous avons pu découvrir le "Système d'identification automatique" (aussi appelé "AIS") qui permet aux bateaux d'émettre tout un tas d'informations.

Ces informations sont lisibles par n'importe qui et sont agrégées par  des entreprises comme [MarineTraffic][marine-traffic] par exemple, qui ensuite propose des API pour interroger toutes ces données.

En utilisant le GPS inclut dans la quasi-majorité des ordiphones, on peut récupérer la position de l'utilisateur ainsi que son orientation afin de déterminer à propos de quels bateaux l'utilisateur souhaite en apprendre un peu plus.

Le tout affiché par dessus le flux de la caméra arrière pour la réalité augmentée !

Ce projet à été récompensé par le [prix AIVP][blog-aivp]. :trophy:

[marine-traffic]: https://www.marinetraffic.com
[blog-aivp]: https://www.aivp.org/2016/11/24/hackathon-lapplication-pour-observer-les-bateaux-primee-par-laivp/