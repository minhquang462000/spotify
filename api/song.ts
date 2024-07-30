import { IFilter } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL || "http://localhost:3000/api/client";
export async function getAllProduct(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const name = query.search ? query.search : "";
  const category = query.category ? query.category : "";
  const albums = query.album ? query.album : "";
  const artist = query.artist ? query.artist : "";
  const accessToken = cookies().get("token")?.value;

  if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/songs?page=${page}&limit=${limit}&name=${name}&category=${category}&albums=${albums}&artist=${artist}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}
export async function getProductById(id: string) {
  try {
    const res = await axios.get(`${API_URL}/songs/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
}
