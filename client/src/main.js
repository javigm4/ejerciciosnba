//VAMOS A EMPEZAR CREANDO EL SELECTOR

import { Nba } from "./Nba.js";
import "./style.css";
//creamos el container

export const crearSelectores = async () => {
  const selector = document.createElement("select");
  selector.classList.add("styled-select");

  const claves = await obtenerSources(); // Esperar la respuesta antes de llamar a crearOpciones
  crearOpciones(claves, selector);

  document.body.appendChild(selector);

  selector.addEventListener("change", () => {
    const elementoSeleccionado = selector.value;
    crearDivs(elementoSeleccionado);
  });
};

//---cosas para el fetch------------------------------------------------------

const url1 = "http://localhost:3000/sources";
const options1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863",
    "x-rapidapi-host": "nba-latest-news.p.rapidapi.com",
  },
};

//--array opciones, donde cojo las opciones del fetch-------------------------

export const obtenerSources = async () => {
  try {
    const response = await fetch(url1, options1);
    const sources = await response.json();
    return sources; //retornamos el objeto sources
  } catch (error) {
    console.error("Error al obtener las fuentes:", error);
  }
};

export const crearOpciones = (array, select) => {
  array.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion.id; // Usamos 'id'
    option.textContent = opcion.name; // Usamos 'name'
    select.appendChild(option);
  });
};

//crear las informaciones
const url2 = "https://nba-latest-news.p.rapidapi.com/articles";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863",
    "x-rapidapi-host": "nba-latest-news.p.rapidapi.com",
  },
};

export const crearCartas = async (elementoSeleccionado) => {
  const response = await fetch(url2, options2);
  const info = await response.json();

  //vamos a crear un array con todo y despues lo filtramos
  const arrayCartas = info.map((card) => {
    const nuevaCarta = new Nba(card.title, card.source, card.url);
    nuevaCarta.setSource(card.source);
    nuevaCarta.setTitle(card.title);
    nuevaCarta.setUrl(card.Url);
  });

  //ahora que tenemos arraycartas, vamos a filtrarlo por el source del elemento seleccionado

  const cartasFiltradas = arrayCartas.filter((card) => {
    nba.getSource() === elementoSeleccionado || elementoSeleccionado === "all";
  });

  //y creamos las cartas (voy a hacer solo el titulo de momento)

  cartasFiltradas.forEach((carta) => {
    //creamos el titulo
    const tituloCarta = document.createElement("span");
    tituloCarta.classList.add("card-title");
    containerCard.appendChild(tituloCarta);
  });
};

export const crearDivs = async () => {
  const container = document.createElement("div");
  container.classList.add(container);
  document.body.appendChild(container);

  const containerFiltro = document.createElement("div");
  containerFiltro.classList.add("continer-filter");
  container.appendChild(containerFiltro);
};
