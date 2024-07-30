import { IFilter } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL || "http://localhost:3000/api/client";
export async function getAllCategories(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const name = query.search ? query.search : "";
  const accessToken = cookies().get("token")?.value;

  if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/categories?page=${page}&limit=${limit}&name=${name}`,
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
export async function getCategoryById(id: string) {
  try {
    const res = await axios.get(`${API_URL}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
}
