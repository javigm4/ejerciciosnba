//VAMOS A EMPEZAR CREANDO EL SELECTOR

import { Nba } from "./Nba.js";
import "./style.css";
export const crearSelectores = async () => {
  const selector = document.createElement("select");
  selector.classList.add("styled-select");
  const claves = await obtenerClaves(); // Esperar la respuesta antes de llamar a crearOpciones
  crearOpciones(claves, selector);

  document.body.appendChild(selector);
};

const url = "https://nba-latest-news.p.rapidapi.com/articles";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863",
    "x-rapidapi-host": "nba-latest-news.p.rapidapi.com",
  },
};

//--array opciones, donde cojo las opciones del fetch

export const obtenerClaves = async () => {
  try {
    const response = await fetch(url, options);
    const nbaClaves = await response.json();
    return Object.keys(nbaClaves[0]); // cojo las keys de la primera instancia
  } catch (error) {
    console.error("Error al obtener claves de la API:", error);
  }
};

/* const nbaInstancias = nbaData.map((value) => {
    const nbaInstance = new Nba(
      value.team,
      value.source,
      value.player,
      value.limit
    );
    nbaInstance.setTeam(value.team);
    nbaInstance.setSource(value.source);
    nbaInstance.setPlayer(value.player);
    nbaInstance.setLimit(value.limit);
    return nbaInstance;
  });

  return nbaInstancias;*/

export const crearOpciones = (array, select) => {
  const optionAll = document.createElement("option");
  optionAll.value = "all";
  optionAll.textContent = "All";
  select.appendChild(optionAll);

  array.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
  });
};

crearSelectores();
