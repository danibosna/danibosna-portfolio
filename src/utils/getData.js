const API = process.env.API;

const getData = async () => {
  const apiURl = API;
  try {
    const response = await fetch(apiURl);
    const data = await response;
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
