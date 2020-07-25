import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  index = 0;
  isLast = false;

  items = [
    {
      title: 'Stubenwagen',
      description: 'Ein Stubenwagen ist eine bequeme Schlafmöglichkeit für dein Baby und ist meist kleiner als ein gewöhnliches Kinderbettchen. Dieser ist komplett ausgestattet und besteht aus einem Korb, ein Untergestell mit Rädern oder Rollen und einem Stoffhimmel. Damit kannst du deinem Baby von Raum zu Raum schieben und neben dir im Schlafzimmer platzieren. Der Stoffhimmel sorgt für dein Baby für ein Gefühl der Geborgenheit.',
      img: 'assets/images/babystubenwagen-stubenwagen-babysitter.svg',
      alt: 'babystubenwagen stubenwagen',
      textOrder: 1,
      imgOrder: 2,
      visible: true
    },
    {
      title: 'Beistellbett',
      description: 'Ein Beistelltbett unterscheidet sich gegenüber einem Stubenwagen vom seinem Aufbau. Während bei einem Stubenwagen der Korb Oval und geflochten ist, wird bei einem Beistellbett Holz verwendet und ist auf einer Seite offen. Deswegen wird dieser manchmal auch "Babybalkon" genannt. Dadurch schläft dein Baby ganz nah bei dir und liegt immernoch in seinem eigenen Bett. Das hat auf dein Baby eine beruhigende Wirkung und fühlt sich Geborgen.',
      img: 'assets/images/babystubenwagen-stubenwagen-babysitter-stroller.svg',
      alt: 'babystubenwagen beistellbett',
      textOrder: 2,
      imgOrder: 1,
      visible: false
    },
    {
      title: 'Gitterbett',
      description: 'Das Gitterbett zählt zu den klassichen Schlafmöglichkeiten und erfräut sich einer großen Beliebtheit. Dieser unterscheidet sich von den Stubenwagen und dem Beistellbett von seinem Aufbau und Größe. Die meisten Gitterbettchen haben eine Breite von 70 - 80cm und eine Länge von 120 - 140cm und eignen sich bis zu einem Alter von 4 Jahren für dein Baby. Danach kannst du es zu einem Jugendbett ausbauen lassen und weiterhin nutzen.',
      img: 'assets/images/babystubenwagen-stubenwagen-babysitter-baby.svg',
      alt: 'babystubenwagen gitterbett',
      textOrder: 1,
      imgOrder: 2,
      visible: false
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  nextItem() {
    this.index++;
    // this.index = this.index % this.items.length;
    this.items[this.index].visible = true;
    this.isLast = this.index === this.items.length - 1;
  }

}
