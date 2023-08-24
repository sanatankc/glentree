import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "staging";

export default defineConfig({
  branch,
  clientId: "456dfaea-a704-4520-a4f6-582676c2eb90", // Get this from tina.io
  token: "b0b6abc51cb2bba93c5c50e1b5cdd6edffcfde69", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "school",
        label: "school",
        path: "src/content/school",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "campus",
        label: "campus",
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
            fields: [{ type: "image", name: "image", label: "My Image" }],
          }
        
        ],
      },
    ],
  },
});
