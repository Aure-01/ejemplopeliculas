import { useState, useEffect } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({enCartelera: [
        {
          id: 1, titulo: 'Spider-Man: Far from Home',
          poster: 'https://i.etsystatic.com/18242346/r/il/4088a1/1929824362/il_fullxfull.1929824362_lmi6.jpg'
        }, 
        {
          id: 2, titulo: 'Moana',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg'
        }
      ],
    proximosEstrenos: [
      {
        id: 3, titulo: 'Soul',
        poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_FMjpg_UX1000_.jpg'
      }  
    ]})
    }, 500);
    return () => clearTimeout(timerId);
  })

    return(
        <>
        <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />
          <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}