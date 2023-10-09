import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Beranda",
    path: "/",
  },
  {
    id: "category",
    label: "Kategori",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blog",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Pencarian",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "Aplikasi",
    label: "Aplikasi",
  },
  {
    value: "Data",
    label: "Data",
  },
  {
    value: "Software",
    label: "Software",
  },
  {
    value: "Teknologi",
    label: "Teknologi",
  },
  {
    value: "Sains",
    label: "Sains",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Judul",
    placeholder: "Masukkan Judul Blog",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Deskripsi",
    placeholder: "Masukkan Deskripsi Blog",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Kategori",
    placeholder: "Pilih Kategori Blog",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCQontXV0Rim--VAgPzG1C36EVVLoekIcU",
  authDomain: "projek-web-blog.firebaseapp.com",
  projectId: "projek-web-blog",
  storageBucket: "projek-web-blog.appspot.com",
  messagingSenderId: "405091685335",
  appId: "1:405091685335:web:4cab879ba7c70253b03192",
  measurementId: "G-KDJ1Z43ESC"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}
