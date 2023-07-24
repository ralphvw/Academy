import axios from "axios";

const fn = async () => {
  axios.get(`https://api.github.com/users/milligosh`).then(() => {
    console.log(data)
  })
  console.log("Downloading.......");
};

async function asyncfn() {
  console.log("Downloading......");
  const data = await axios.get(`https://api.github.com/users/milligosh`);
  console.log(data);
}

asyncfn();
