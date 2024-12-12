const people = [
  {
    name: "Itachi",
    image:
      "https://i.pinimg.com/736x/e1/1a/c0/e11ac0f5655e23c127b0781d5cd0fc87.jpg",
    occupation: "Akatsuki",
  },
  {
    name: "Sasuke",
    image:
      "https://i.pinimg.com/736x/41/63/10/4163104774e930f09ee7d268cff03bd4.jpg",
    occupation: "Shadow Hokage",
  },
  {
    name: "Jiraya",
    image:
      "https://i.pinimg.com/736x/5c/cd/84/5ccd8497e8d29c191c298a4c173c1e43.jpg",
    occupation: "Sanin",
  },
  {
    name: "Naruto",
    image:
      "https://i.pinimg.com/736x/ee/da/6b/eeda6bc5da067515ccf67a65b7dfd7cd.jpg",
    occupation: "Hokage",
  },
  {
    name: "Shikamaru",
    image:
      "https://i.pinimg.com/736x/87/be/47/87be47e35daed8d8eaffaf9b76001709.jpg",
    occupation: "Hokage Assistance",
  },
  {
    name: "Minato",
    image:
      "https://i.pinimg.com/736x/2d/82/b9/2d82b99a0293d02b44af9d2a7436b8a2.jpg",
    occupation: "Dead Hokage",
  },
  {
    name: "Guy",
    image:
      "https://i.pinimg.com/736x/df/ed/3b/dfed3b9b89acf8d23ed471a4423e19bf.jpg",
    occupation: "8 Gate Ninja",
  },
  {
    name: "Hinata",
    image:
      "https://i.pinimg.com/736x/9c/ef/b8/9cefb8d70a53fcbe07a42e65a2018e9e.jpg",
    occupation: "Princess",
  },
  {
    name: "Boruto",
    image:
      "https://i.pinimg.com/736x/4f/5d/af/4f5dafa2b01f4d527cdc749f5537764a.jpg",
    occupation: "Hokage Son",
  },
  {
    name: "Sarade",
    image:
      "https://i.pinimg.com/736x/7b/02/67/7b0267ce7f781805f33a40b970ef82fa.jpg",
    occupation: "Shadow Hokage daughter",
  },
];

let body = document.getElementById("body");
console.log("hello");

people.forEach((person) => {
  let card = document.createElement("div");
  card.classList.add("card");
  body.appendChild(card);

  let image = document.createElement("img");
  image.src = person.image;
  card.appendChild(image);

  let name = document.createElement("h2");
  name.textContent = person.name;
  card.appendChild(name);

  let occupation = document.createElement("p");
  occupation.textContent = person.occupation;
  card.appendChild(occupation);
});

const req = new XMLHttpRequest();
req.open("GET", "https://catfact.ninja/facts");

req.onload = () => {
    const response = JSON.parse(req.responseText);
    console.log(response.data); // Log the cat fact
};

req.send();
