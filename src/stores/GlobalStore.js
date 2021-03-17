/**
 * Global Store Component
 * @author Money Jain
 * @flow
 */

import Constant from '../utilities/Constant';

class GlobalStore {
  getSongsData = async () => {
    try {
      const response = await fetch(Constant.URL.GET_SONGS);
      if (response.status === 200) {
        const responseJson = await response.json();
        // console.log('responseJson', responseJson);
        return {success: true, data: responseJson};
      } else {
        return {success: false};
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default new GlobalStore();
