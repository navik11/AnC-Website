import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Wings",
    newTab: false,
    path: "/#features",
  },
  // {
// <<<<<<< HEAD
  //   id: 2.1,
  //   title: "Blogs",
  //   newTab: false,
  //   path: "/blog",
// =======
  //  id: 2.1,
  //  title: "Blogs",
  //  newTab: false,
  // path: "/blog",
// >>>>>>> 08da51a8d0f861991d586837a15cf19c8a5456a9
  // },
  // {
  //   id: 2.3,
  //   title: "Resources",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Links",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Career Development Wing",
        newTab: false,
        path: "/wings/cdev", //change
      },
      {
        id: 34,
        title: "Research Wing",
        newTab: false,
        path: "/wings/research", //change
      },
      {
        id: 35,
        title: "International Relations",
        newTab: false,
        path: "/wings/internationalRelations", //change
      },
      {
        id: 35.1,
        title: "Academics Wing",
        newTab: false,
        path: "/wings/UGacads", //change
      },
      {
        id: 37,
        title: "Outreach and Finance",
        newTab: false,
        path: "/wings/outreach_finance", //change
      },
      {
        id: 38,
        title: "Product Club",
        newTab: false,
        path: "/wings/productclub",
      }
    ],
  },
  {
    id: 4,
    title: "Know Your Faculty",
    newTab: false,
    path: "/KnowYourFaculty",
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/team",
  }
];

export default menuData;