import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vergleich-schlafmoeglichkeiten',
  templateUrl: './vergleich-schlafmoeglichkeiten.component.html',
  styleUrls: ['./vergleich-schlafmoeglichkeiten.component.css']
})
export class VergleichSchlafmoeglichkeitenComponent implements OnInit {

  index = 0;
  isLast = false;

  items = [
    {
      title: 'Stubenwagen',
      description: 'Der Stubenwagen ist besonders beliebt bei den Eltern und wird als Erstausstattung im Vergleich zum Beistell- und Gitterbett bevorzugt. Die meisten Stubenwagen gibt es schon als Komplett-Set und damit gerade am Anfang sehr zu empfehlen. Der wesentliche unterschied liegt darin, dass der Stubenwagen mit Rollen bzw. Rädern ausgestattet ist. Damit kannst du dein Baby in jeden Raum schieben und ist dadurch immer ganz nah bei dir.',
      category: 'Stubenwagen',
      link: 'https://amzn.to/31HhsPf',
      fallback: 'assets/images/vergleich-schlafmoeglichkeiten/Stubenwagen.png',
      alt: 'stubenwagen',
      sicherheit: 'Die Sicherheitsmaßnahmen für ein Stubenwagen sind hoch. Diese werden stabil und standfest gebaut und zeigen Ihre Stärke bei der hohen Verarbeitung. Um Verletzungsgefahren für dein Baby zu vermeiden, haben die meisten Stubenwagen keine scharfe Ecken und Kanten. Alle Materialien sind zudem Schadstofffrei. Das Nestchen ist weich gepolstert und bietet maximalen Schutz und Komfort. Stubenwagen mit geflochteten Korb bieten meistens ein Stoffhimmel der Luftdurchlässig ist. Mit diesen Anforderungen an den Stubenwagen wird maximale Sicherheit gewährleistet',
      merkmale: ['Besitzt Räder oder Rollen', 'Komplett-Set verfügbar', 'Perfekt für die ersten Monate', 'Geborgenheit und Schutz durch engen Korb'],
      images: [
        { type: 'image/webp', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Stubenwagen.webp' },
        { type: 'image/png', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Stubenwagen.png' }
      ]
    },
    {
      title: 'Beistellbett',
      description: 'Das Beistellbett ist im Grunde gleich wie der Stubenwagen und lässt sich bequem überall transportieren. Dieser ist größer als der Stubenwagen und ist auf einer Seite offen. Damit hat dein Baby mehr platz zum Schlafen und ist trotzdem immer in deiner Nähe. Die   offene Seite hat den Vorteil, dass das Beistellbett direkt an das Elternbett befestigt werden kann.',
      category: 'Beistellbett',
      link: 'https://amzn.to/31Ily9V',
      fallback: 'assets/images/vergleich-schlafmoeglichkeiten/Beistellbett.png',
      alt: 'beistellbett',
      sicherheit: 'Das Beistellbett ist bekannt für seine Langlebigkeit dank seiner robusten Verarbeitung und wird gerne bis zum 6 Monat verwendet. Jedoch gibt es wie bei allen Schlafmöglichkeiten einiges zu beachten. Ein gutes Beistellbett zeichnet sich durch seine mindest- und maximal-Abstände zwischen den Gitterstäben aus. Seine Anforderungen an das Material muss frei von Schadstoffen sein. Wenn das Beistellbett aus Stoff ist, achtet darauf, dass dieser Luftdurchläßig ist, damit dein Baby nachts atmen kann.',
      merkmale: ['Von Geburt an zu verwenden', 'Direkt an Elternbett befestigen', 'Empfohlen von Kinderärzten und Hebammen', 'Robust dank starken Holz', 'Fördert den gesuchen Schlaf', 'Schützt vor Kindstod'],
      images: [
        { type: 'image/webp', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Beistellbett.webp' },
        { type: 'image/png', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Beistellbettn.png' },
      ]
    },
    {
      title: 'Gitterbett',
      description: 'Das Gitterbett kann neben den Stubenwagen als Ergänzung hinzugezogen werden, da es größer und länger nutzbar für dein Baby ist. Die Höhe des Bettes lässt sich verstellen und kann damit länger als 6 Monate genutzt werden. Dadurch ist es perfekt geeignet für ein festen Schlafplatz im Kinderzimmer. Die Gitterstäbe bieten für dein Baby Sicherheit und kann den ganzen Raum erblicken.',
      category: 'Gitterbett',
      link: 'https://amzn.to/2SwxUOi',
      fallback: 'assets/images/vergleich-schlafmoeglichkeiten/Gitterbett.png',
      alt: 'gitterbett',
      sicherheit: 'Für den Gitterbett wurde vom Verbraucherinformationssystem Bayern wichtige Aspekte der Sicherheit zusammengetragen. Ein Gitterbett hat einen einheitlichen mindestabstand zwischen den Gittern. Dieser beträgt mindestens 4,5 cm und unter Belastung nicht mehr als 6,5cm betragen. Wenn ein Gitterbett mit Rollen ausgestattet ist, dann sind zwei Rollen mit Bremsen ausgestattet bzw. feststellbar sein. Für maximale Standfestigkeit wird das Gitterbett aus Vollholz, teilmassiv oder aus MDF mit einer pflegeleichten Melaminbeschichtung gefertigt.',
      merkmale: ['Verwendbar bis zum 4. Lebensjahr', 'Abmessungen standardisiert', 'Höhenverstellbarer Bettenboden für maximalen Komfort', 'Erweiterbar zum Jugendbett', 'Hohe Sicherheit für den Schlaf'],
      images: [
        { type: 'image/webp', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Gitterbett.webp' },
        { type: 'image/png', imagePath: 'assets/images/vergleich-schlafmoeglichkeiten/Gitterbett.png' },
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

}
