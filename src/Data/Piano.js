import pianoDroit from "./piano_droit.jpg";
import pianoQueue from "./piano_queu.jpg";
import pianoElec from "./piano_electrique.jpg";

const data = [
  {
    name: "Piano à queue",
    price: 1200,
    feature: [
      "88 touches",
      "3 pédales",
      "Longeur : 151 cm",
      "Largeur : 146 cm",
      "Poids : 261kg",
      "Finition : Noir brillant",
    ],
    src: pianoQueue,
    alt: "Piano à queue",
    TopSelling: true,
    id: 1,
    description: "Un super jolie piano pour petits et grands",
  },
  {
    name: "Piano droit",
    price: 852,
    feature: [
      "88 touches",
      "3 pédales",
      "Longeur : 151 cm",
      "Largeur : 146 cm",
      "Poids : 261kg",
      "Finition : Noir brillant",
    ],
    src: pianoDroit,
    alt: "Piano droit",
    TopSelling: true,
    id: 2,
    description: "Un super jolie piano pour petits et grands",
  },

  {
    name: "Piano electrique",
    price: 486,
    feature: [
      "88 touches",
      "3 pédales",
      "Longeur : 151 cm",
      "Largeur : 146 cm",
      "Poids : 261kg",
      "Finition : Noir brillant",
    ],
    src: pianoElec,
    alt: "Piano à queue",
    TopSelling: true,
    id: 3,
    description: "Un super jolie piano pour petits et grands",
  },
];

export default data;
