import api from '@/lib/axios';

export const fetchRecentJobDetails = async () => {
  const res = await api.get('');
  return res;
};
