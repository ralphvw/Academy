import axios from "axios";

const fn = async () => {
  axios.get(`https://api.github.com/users/milligosh`).then((data) => {
    console.log(data)
  })
  console.log(".....");
};

async function asyncfn() {
  const data = await axios.get(`https://api.github.com/users/milligosh`);
  console.log(data);
  console.log('....');
}

asyncfn();
