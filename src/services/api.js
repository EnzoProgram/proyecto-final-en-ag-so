import axios from 'axios';

const API_URL = 'https://685342680594059b23d080f9.mockapi.io/api/turnos';

export const turnosApi = {
  listar: async () => {
    const response = await axios.get(`${API_URL}/turnos`);
    return response.data;
  },

  obtenerPorId: async (id) => {
    const response = await axios.get(`${API_URL}/turnos/${id}`);
    return response.data;
  },

  crear: async (turno) => {
    const response = await axios.post(`${API_URL}/turnos`, turno);
    return response.data;
  },

  actualizar: async (id, turno) => {
    const response = await axios.put(`${API_URL}/turnos/${id}`, turno);
    return response.data;
  },

  eliminar: async (id) => {
    const response = await axios.delete(`${API_URL}/turnos/${id}`);
    return response.data;
  }
};