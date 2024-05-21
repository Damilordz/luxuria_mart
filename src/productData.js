// Array of Objects for store products
const products = [
  {
    id: 1,
    title: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 109.99,
    images: {
      White: require("./assets/images/product_images/air_force_1/white.jpeg"),
      Black: require("./assets/images/product_images/air_force_1/black.jpeg"),
      Yellow: require("./assets/images/product_images/air_force_1/yellow.jpeg"),
    },
    colors: ["White", "Black", "Yellow"],
  },
  {
    id: 2,
    title: "Nike Sportswear Tech Fleece Windrunner",
    description:
      "Blending 2 of our most iconic looks, this full-zip hoodie draws design inspiration.",
    price: 54.99,
    images: {
      Gray: require("./assets/images/product_images/tech_fleece_windrunner/gray.jpeg"),
      Milk: require("./assets/images/product_images/tech_fleece_windrunner/milk.jpeg"),
      Green: require("./assets/images/product_images/tech_fleece_windrunner/green.jpeg"),
    },
    colors: ["Gray", "Milk", "Green"],
  },

  {
    id: 3,
    title: "Luka 2 'Trick Shot'",
    description:
      "Trick or treat? Luka's shots are often a bit of both, and this special edition Luka 2 celebrates those otherworldly buckets.",
    price: 77.99,
    images: {
      White: require("./assets/images/product_images/Luka_Trick_Shot/white.jpeg"),
      Black: require("./assets/images/product_images/Luka_Trick_Shot/black.jpeg"),
      Yellow: require("./assets/images/product_images/Luka_Trick_Shot/yellow.jpeg"),
    },
    colors: ["White", "Black", "Yellow"],
  },
  {
    id: 4,
    title: "Nike Sportswear Tech Fleece",
    description:
      "These comfy joggers bring back the signature slim fit you know for a tailored look. Our premium, smooth-on-both-sides fleece.",
    price: 44.99,
    images: {
      Red: require("./assets/images/product_images/tech_fleece_joggers/red.jpeg"),
      Blue: require("./assets/images/product_images/tech_fleece_joggers/blue.jpeg"),
      Gray: require("./assets/images/product_images/tech_fleece_joggers/gray.jpeg"),
    },
    colors: ["Red", "Blue", "Gray"],
  },
  {
    id: 5,
    title: "Air Jordan Legacy 312 Low",
    description:
      "Celebrate MJ's legacy with this shout-out to Chicago's 312 area code. it's a modern mash-up that reps the best.",
    price: 145.99,
    images: {
      Red: require("./assets/images/product_images/legacy312_low/red.jpeg"),
      Blue: require("./assets/images/product_images/legacy312_low/blue.jpeg"),
      Black: require("./assets/images/product_images/legacy312_low/black.jpeg"),
    },
    colors: ["Red", "Blue", "Black"],
  },
  {
    id: 6,
    title: "Men's Golf T-Shirt",
    description:
      "Whether you're enjoying a game of mini golf, hitting the local par-3 or fulfilling a bucket list course—this classic-fit.",
    price: 26.49,
    images: {
      Black: require("./assets/images/product_images/Mens_Golf_TShirt/black.jpeg"),
      White: require("./assets/images/product_images/Mens_Golf_TShirt/white.jpeg"),
      Green: require("./assets/images/product_images/Mens_Golf_TShirt/green.jpeg"),
    },
    colors: ["Black", "Green", "White"],
  },
  {
    id: 7,
    title: "Jordan Max Aura 5",
    description:
      "When you need a shoe that's ready 24/7, it's gotta be the Max Aura 5. Inspired by the AJ3, this pair of kicks puts a modern spin.",
    price: 71.99,
    images: {
      White: require("./assets/images/product_images/jordan_max_5/white.jpeg"),
      Yellow: require("./assets/images/product_images/jordan_max_5/yellow.jpeg"),
      Black: require("./assets/images/product_images/jordan_max_5/black.jpeg"),
    },
    colors: ["White", "Yellow", "Black"],
  },
  {
    id: 8,
    title: "Nike Icon Air Force 1",
    description:
      "Who says sneakerhead style can't extend beyond your feet? With a design that nods to a shoe that changed history.",
    price: 22.99,
    images: {
      Black: require("./assets/images/product_images/icon_air_force/black.jpeg"),
      Brown: require("./assets/images/product_images/icon_air_force/brown.jpg"),
      White: require("./assets/images/product_images/icon_air_force/white.jpeg"),
    },
    colors: ["Black", "Brown", "White"],
  },
  {
    id: 9,
    title: "Nike Dunk Low",
    description:
      "All that glitters is definitely the Dunk Low. From backboards to skateboards, it's your emblem of tried-and-tested style.",
    price: 109.99,
    images: {
      Black: require("./assets/images/product_images/nike_dunk_low/black.jpeg"),
      Blue: require("./assets/images/product_images/nike_dunk_low/blue.jpeg"),
      Red: require("./assets/images/product_images/nike_dunk_low/red.jpeg"),
    },
    colors: ["Black", "Blue", "Red"],
  },
  {
    id: 10,
    title: "Nike Cortez Textile",
    description:
      "You spoke. We listened. Based on your feedback, we've revamped the original Cortez while maintaining the retro.",
    price: 79.99,
    images: {
      Red: require("./assets/images/product_images/nike_cortez/red.jpeg"),
      Blue: require("./assets/images/product_images/nike_cortez/blue.jpg"),
      Green: require("./assets/images/product_images/nike_cortez/green.jpeg"),
    },
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 11,
    title: "Nike Free Metcon 5",
    description:
      "When your workouts wade into the nitty-gritty, the Nike Free Metcon 5 can meet you in the depths.",
    price: 119.99,
    images: {
      Purple: require("./assets/images/product_images/metcon_5/purple.jpg"),
      Black: require("./assets/images/product_images/metcon_5/black.jpeg"),
      White: require("./assets/images/product_images/metcon_5/white.jpeg"),
    },
    colors: ["Purple", "Black", "White"],
  },
  {
    id: 12,
    title: "Nike Pegasus Trail 4 GORE-TEX",
    description:
      "DWet weather never stopped you before, so why should it stop you now?",
    price: 144.99,
    images: {
      Black: require("./assets/images/product_images/pegasus_trail/black.jpeg"),
      Brown: require("./assets/images/product_images/pegasus_trail/brown.jpeg"),
      Green: require("./assets/images/product_images/pegasus_trail/green.jpg"),
    },
    colors: ["Black", "Brown", "Green"],
  },
];

export default products;
