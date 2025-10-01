import axios from 'axios';



export async function getData() {
  const url = "https://denisportfolio.duckdns.org/api/health";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}