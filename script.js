"use strict";

function addUsersToDOM(users) {
  users.map((user, i) => {
    const image = document.getElementById(`img${i + 1}`);
    const name = document.getElementById(`name${i + 1}`);

    const picture = user.picture.large;
    const fullName = `${user.name.first} ${user.name.last}`;

    image.src = picture;
    image.alt = fullName;
    name.innerText = fullName;
  });

  return true;
}

async function getUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=4");
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function main() {
  const aosOpts = {
    delay: 200,
    duration: 1500,
    once: false,
    mirror: false
  };

  AOS.init(aosOpts);

  const users = await getUsers();
  if (users) {
    addUsersToDOM(users);
  }
}

window.onload = main();
