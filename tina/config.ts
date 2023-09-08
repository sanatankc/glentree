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
        defaultItem: () => ({
          // title: "Home",
          heroImages: {
            position: 'top'
          },
        }),
        fields: [
          {
            type: "rich-text",
            name: "title",
            label: "Title",
          },
          {
            type: 'object',
            list: true,
            label: 'Hero Images',
            name: 'heroImages',
            ui: {
              defaultItem: {
                position: 'top'
              }
            },
            fields: [
              {
                type: 'image',
                name: 'image_desktop',
                label: 'Desktop Image',
              },
              {
                type: 'image',
                name: 'image_mobile',
                label: 'Mobile Image',
              },
              {
                type: 'string',
                name: 'position',
                label: 'Position',
              },
            ],
          }
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
            label: "What's happening At Glentree",
            list: true,
            fields: [{ type: "image", name: "image", label: "image" }],
          },
          {
            type: "object",
            name: "showcase",
            label: "Around The Campus",
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            list: true,
            fields: [{ type: "image", name: "image", label: "image" },{ type: "string", name: "title", label: "title" }],
          },
                
        ],
      },
      {
        name: "mandatoryPublicDisclosure",
        label: "Mandatory Public Disclosure",
        path: "src/content/mandatoryPublicDisclosure",
        fields: [
          {
            type: "object",
            list: true,
            label: "Disclosure", 
            name: "disclosure",
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "rich-text", name: "disclosure", label: "Disclosure" },
            ]
          }
        ]
      }
    ],
  },
});
