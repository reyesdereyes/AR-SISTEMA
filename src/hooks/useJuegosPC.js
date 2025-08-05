import { useEffect, useState } from 'react';
import supabase from '../config/supabase'; 

export const useJuegosPC = () => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJuegos = async () => {
      // 1. Traemos la relación juego_plataforma para filtrar PC
      const { data: jpData, error: jpError } = await supabase
        .from('juego_plataforma')
        .select('juego_id')
        .eq('plataforma_id', 1); // 1 = PC

      if (jpError) {
        console.error('Error al cargar relaciones:', jpError);
        setLoading(false);
        return;
      }

      const ids = jpData.map((row) => row.juego_id);

      // 2. Traemos los datos de los juegos con esos IDs
      if (ids.length) {
        const { data: juegosData, error: juegosError } = await supabase
          .from('juego')
          .select('id, titulo, lanzamiento, imagen_url')
          .in('id', ids)
          .order('titulo');

        if (juegosError) {
          console.error('Error al cargar juegos:', juegosError);
        } else {
          setJuegos(juegosData);
        }
      }

      setLoading(false);
    };

    fetchJuegos();
  }, []);

  return { juegos, loading };
};