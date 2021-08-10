// import axios from "axios";
// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// export const getPlacesData = async (sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, {
//       params: {
//         bl_latitude: sw.lat,
//         tr_latitude: ne.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//       },
//       headers: {
//         "x-rapidapi-key": "a8497c2842msh1eba1e53ea39134p17a7e7jsnd41abbc0229f",
//         "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "RapidAPI key",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};