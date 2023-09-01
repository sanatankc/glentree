import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "staging";

export default defineConfig({
  branch,
  clientId: "8b588526-21ee-4f45-b047-bac58fdad52f", // Get this from tina.io
  token: "517ca57aaa53235b5783e0aae9e2ed6ab9f2d38a", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: "Home",
        path: "src/content/home",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
        ]
      },
      {
        name: "campus",
        label: "Campus",
        path: "src/content/campus",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "image",
            name: "bannerBg",
            label: "Banner Image",
           
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "virtualCampusLink",
            label: "VirtualCampusLink",
            required: true,
          },
         
          {
            type: "string",
            name: "affiliationNo",
            label: "AffiliationNo",
            required: true,
          },
          {
            type: "object",
            name: "galleryImages",
            label: "Gallery Images",
            list: true,
            fields: [{ type: "image", name: "image", label: "image" }],
          },
          {
            type: "object",
            name: "showcase",
            label: "ShowCase",
            list: true,
            fields: [{ type: "image", name: "image", label: "image" },{ type: "string", name: "title", label: "title" }],
          },
                
        ],
      },
    ],
  },
});
