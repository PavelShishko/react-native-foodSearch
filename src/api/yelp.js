import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer omTUz4DAAtEF-8m-qBmX2aS98Z_GpeQYKOnUuUP2UBf1crPc0n8qrRvhune-PnLXoII-efY1vbO2qoCItdKC2isQKCG9tDQUmHWR5XjNKno-FJ9ak3q9aV3D5F6-Y3Yx",
  },
});
