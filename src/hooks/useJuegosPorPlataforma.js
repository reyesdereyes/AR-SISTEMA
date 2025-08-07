import { useEffect, useState } from 'react';
import supabase from '../config/supabase';

export const useJuegosPorFiltro = (plataformaNombre, categoriaNombre) => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        setLoading(true);

        // Obtener id de plataforma
        const { data: platData, error: platError } = await supabase
          .from('plataforma')
          .select('id')
          .eq('nombre', plataformaNombre)
          .single();
        if (platError || !platData) {
          setJuegos([]);
          setLoading(false);
          return;
        }

        // Si no hay categoría, hacer consulta simple
        if (!categoriaNombre) {
          const { data, error } = await supabase
            .from('juego_plataforma')
            .select('juego(*)')
            .eq('plataforma_id', platData.id);
          if (error) throw error;
          setJuegos(data.map(item => item.juego));
          setLoading(false);
          return;
        }

        // Obtener id de categoría
        const { data: catData, error: catError } = await supabase
          .from('categoria')
          .select('id')
          .eq('nombre', categoriaNombre)
          .single();
        if (catError || !catData) {
          setJuegos([]);
          setLoading(false);
          return;
        }

        // Obtener juegos que tengan ambas relaciones en juego_plataforma y juego_categoria
        // 1. Obtener IDs de juegos que están en plataforma seleccionada
        const { data: juegosPlataforma, error: err1 } = await supabase
          .from('juego_plataforma')
          .select('juego_id')
          .eq('plataforma_id', platData.id);
        if (err1) throw err1;

        // 2. Obtener IDs de juegos que están en categoría seleccionada
        const { data: juegosCategoria, error: err2 } = await supabase
          .from('juego_categoria')
          .select('juego_id')
          .eq('categoria_id', catData.id);
        if (err2) throw err2;

        // 3. Calcular intersección de IDs
        const juegosPlatIds = new Set(juegosPlataforma.map(jp => jp.juego_id));
        const juegosCatIds = new Set(juegosCategoria.map(jc => jc.juego_id));
        const juegosIdsFiltrados = [...juegosPlatIds].filter(id => juegosCatIds.has(id));

        if (juegosIdsFiltrados.length === 0) {
          setJuegos([]);
          setLoading(false);
          return;
        }

        // 4. Finalmente, obtener detalles completos de los juegos filtrados
        const { data: juegosData, error: err3 } = await supabase
          .from('juego')
          .select('*')
          .in('id', juegosIdsFiltrados);
        if (err3) throw err3;

        setJuegos(juegosData);
      } catch (error) {
        console.error('Error al cargar juegos:', error);
        setJuegos([]);
      } finally {
        setLoading(false);
      }
    };

    if (plataformaNombre) fetchJuegos();
  }, [plataformaNombre, categoriaNombre]);

  return { juegos, loading };
};
