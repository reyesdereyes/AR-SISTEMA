import { useEffect, useState } from 'react';
import supabase from '../config/supabase';

export const useJuegosPorPlataforma = (plataformaNombre) => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJuegos = async () => {
      // 1. Busca el id de la plataforma por nombre
      const { data: plataformas, error: platError } = await supabase
        .from('plataforma')
        .select('id')
        .eq('nombre', plataformaNombre)
        .single();

      if (platError || !plataformas) {
        setJuegos([]);
        setLoading(false);
        return;
      }

      // 2. Busca los juegos relacionados con esa plataforma
      const { data: jpData, error: jpError } = await supabase
        .from('juego_plataforma')
        .select('juego_id')
        .eq('plataforma_id', plataformas.id);

      if (jpError) {
        setJuegos([]);
        setLoading(false);
        return;
      }

      const ids = jpData.map((row) => row.juego_id);

      if (ids.length) {
        const { data: juegosData, error: juegosError } = await supabase
          .from('juego')
          .select('id, titulo, lanzamiento, imagen_url, precio')
          .in('id', ids)
          .order('titulo');

        setJuegos(juegosError ? [] : juegosData);
      } else {
        setJuegos([]);
      }
      setLoading(false);
    };

    fetchJuegos();
  }, [plataformaNombre]);

  return { juegos, loading };
};