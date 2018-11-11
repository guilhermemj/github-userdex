import api from '@/plugins/api';

const getRemainingPages = async (lastResponse) => {
  if (!api.hasNextPage(lastResponse)) {
    return lastResponse.data;
  }

  return lastResponse.data.concat(await getRemainingPages(await api.getNextPage(lastResponse)));
};

export default getRemainingPages;
