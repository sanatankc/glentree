import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

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
          },
          {
            type: 'object',
            list: true,
            label: 'Testimonials',
            name: 'testimonials',
            ui: {
              itemProps: (item) => ({
                label: item?.author
              }),
            },
            fields: [
              {
                type: 'image',
                name: 'testimonial_picture',
                label: 'Testimonial Picture',
              },
              {
                type: 'string',
                name: 'testimonial_picture_alt',
                label: 'Testimonial Picture (Alt Tag)',
              },
              {
                type: 'rich-text',
                name: 'testimonial',
                label: 'Testimonial',
              },
              {
                type: 'string',
                name: 'author',
                label: 'Author',
              },
              {
                type: 'string',
                name: 'role',
                label: 'Role',
              },
              {
                type: 'string',
                name: 'embedId',
                label: 'Youtube Embed Id',
              },
            ],
          },
          {
            type: 'object',
            list: false,
            label: 'Big Admission CTA',
            name: 'bigAdmissionCTA',
            fields: [
              {
                type: 'string',
                name: 'subtitle',
                label: 'Subtitle',
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
              },
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body',
              },
              {
                type: 'string',
                name: 'primaryCTAText',
                label: 'Primary CTA Text',
              },
              {
                type: 'string',
                name: 'primaryCTALink',
                label: 'Primary CTA Link',
              },
              {
                type: 'string',
                name: 'secondaryCTAText',
                label: 'Secondary CTA Text',
              },
              {
                type: 'string',
                name: 'secondaryCTALink',
                label: 'Secondary CTA Link',
              },
            ],
          },
          {
            type: 'object',
            list: true,
            label: 'FAQs',
            name: 'faqs',
            ui: {
              itemProps: (item) => ({
                label: item?.question
              })
            },
            fields: [
              {
                type: 'string',
                name: 'question',
                label: 'Question',
              },
              {
                type: 'rich-text',
                name: 'answer',
                label: 'Answer',
              },
            ],
          },
        ]
      },
      {
        name: 'curriculum',
        label: 'Curriculum',
        path: 'src/content/curriculum',
        fields: [
          {
            type: 'object',
            list: true,
            label: 'Academics',
            name: 'academics',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'grade',
                label: 'Grade',
              },
              {
                type: 'object',
                list: true,
                name: 'concepts',
                label: 'Concepts',
                ui: {
                  itemProps: (item) => ({
                    label: item?.concept
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'concept',
                    label: 'Concept',
                  },
                ],
              },
              {
                type: 'image',
                name: 'image',
                label: 'Image',
              },
              {
                type: 'string',
                name: 'imageAlt',
                label: 'Image Alt Tag',
              },
              {
                type: 'boolean',
                name: 'newlyAdded',
                label: 'Newly Added',
              },
            ],
          },
        ],
      },
      {
        name: 'clubs',
        label: 'Clubs',
        path: 'src/content/clubs',
        fields: [
          {
            type: 'object',
            list: true,
            label: 'Clubs',
            name: 'clubs',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'image',
                name: 'thumbnail',
                label: 'Thumbnail Image',
              },
              {
                type: 'string',
                name: 'thumbnailAlt',
                label: 'Thumbnail Alt Tag',
              },
            ],
          },
        ],
      },
      {
        name: 'coscholastics',
        label: 'Co-scholastics',
        path: 'src/content/coscholastics',
        fields: [
          {
            type: 'object',
            list: true,
            label: 'Co-scholastic Activities',
            name: 'coscholastics',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'image',
                name: 'thumbnail',
                label: 'Thumbnail Image',
              },
              {
                type: 'string',
                name: 'thumbnailAlt',
                label: 'Thumbnail Alt Tag',
              },
            ],
          },
        ],
      },
      {
        name: 'afterschool',
        label: 'After School Activities',
        path: 'src/content/afterschool',
        fields: [
          {
            type: 'object',
            list: true,
            label: 'AfterSchool Programs',
            name: 'afterschool',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'image',
                name: 'thumbnail',
                label: 'Thumbnail Image',
              },
              {
                type: 'string',
                name: 'thumbnailAlt',
                label: 'Thumbnail Alt Tag',
              },
            ],
          },
        ],
      },      
      {
        name: "campus",
        label: "Campus",
        path: "src/content/campus",
        fields: [
          {
            type: 'object',
            name: 'heroImages',
            label: 'Hero Slide Images (Only for Bannerghatta campus)',
            list: true,
            ui: {
              defaultItem: {
                position: 'center'
              },
              itemProps: (item) => ({
                label: item?.alt
              }),
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
                name: 'alt',
                label: 'Alt tag',
              },
              {
                type: 'string',
                name: 'position',
                label: 'Position',
              },
            ],
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
            name: "aroundTheCampus",
            label: "Campus Facilities",
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              { type: "string", name: "description", label: "Description", ui: {component: "textarea"} },
              {
                type: 'object',
                list: true,
                name: 'bulletPoints',
                label: 'Bullet Points',
                ui: {
                  itemProps: (item) => ({
                    label: item?.bulletPoint
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'bulletPoint',
                    label: 'Bullet Point',
                  },
                ],
              },
              { 
                type: "object",
                list: true,
                label: 'Gallery',
                name: 'gallery',
                ui: {
                  itemProps: (item) => ({
                    label: item?.title
                  }),
                },
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "altTag", label: "Alt Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ]
              },
            ],
          },
          {
            type: "object",
            name: "showcase",
            label: "What's happening At Glentree",
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            list: true,
            fields: [{ type: "image", name: "image", label: "image" },{ type: "string", name: "title", label: "Title" }],
          },
          {
            type: 'object',
            name: 'contactUs',
            label: 'Contact Us',
            fields: [
              {
                type: 'string',
                name: 'phoneNo',
                label: 'Phone Number',
              },
              {
                type: 'string',
                name: 'email',
                label: 'Email',
              },
              {
                type: 'string',
                name: 'mapEmbedLink',
                label: 'Google Maps Embed Link',
              },
              {
                type: 'string',
                name: 'address',
                label: 'Address',
              },
              {
                type: 'string',
                name: 'workingHours',
                label: 'Working Hours',
              },
            ],
          },    
        ],
      },
      {
        name: 'admissions',
        label: 'Admissions',
        path: 'src/content/admissions',
        fields: [
          {
            type: 'object',
            list: true,
            label: 'Admission Process',
            name: 'admissionProcess',
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'New Step'
              }),
            },
            fields: [
              {
                type: 'image',
                name: 'image',
                label: 'Image',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'rich-text',
                name: 'description',
                label: 'Description',
              },
            ],
          },
          {
            type: 'object',
            list: true,
            label: 'Key Information',
            name: 'keyInformation',
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'New Information'
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'rich-text',
                name: 'description',
                label: 'Description',
              },
            ],
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
      },
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: "string", name: "title", label: "Title" },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: "rich-text", name: "caption", label: "Caption" },
          { type: "rich-text", name: "blog", label: "Blog" },
        ]
      },
      {
        name: "updates",
        label: "Updates",
        path: "src/content/Updates",
        fields: [
          {
            type: "object",
            list: true,
            label: "Updates", 
            name: "updates",
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            fields: [
              { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
              { type: 'string', name: 'alt', label: 'Alt tag' },
              { type: "string", name: "title", label: "title" },
              { type: 'string', name: 'videoLink', label: 'Video Link' },
              { type: "string", name: "description", label: "Description" },
              { type: "datetime", name: "publishedDate", label: "Published Date" },
            ]
          }
        ]
      },
      {
        name: 'scholarships',
        label: 'Scholarships',
        path: 'src/content/scholarships',
        fields: [
          {
            type: 'string',
            name: 'sectionTitle',
            label: 'Section Title',
          },
          {
            type: 'string',
            name: 'sectionDescription',
            label: 'Section Description',
          },
          {
            type: 'object',
            list: true,
            label: 'Scholarship Details',
            name: 'scholarships',
            ui: {
              itemProps: (item) => ({
                label: item?.title.map((title) => title.text).join(' '),
              })
            },
            fields: [
              {
                type: 'object',
                list: true,
                name: 'title',
                label: 'Title',
                fields: [
                  {
                    type: 'boolean',
                    name: 'type',
                    label: 'Type',
                  },
                  {
                    type: 'string',
                    name: 'text',
                    label: 'Text',
                  },
                ],
              },
              {
                type: 'rich-text',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'object',
                list: true,
                name: 'eligibility',
                label: 'Eligibility',
                fields: [
                  {
                    type: 'string',
                    name: 'criterion',
                    label: 'Criterion',
                  },
                ],
              },
              {
                type: 'object',
                list: true,
                name: 'documentsRequired',
                label: 'Documents Required',
                fields: [
                  {
                    type: 'string',
                    name: 'document',
                    label: 'Document',
                  },
                ],
              },
              {
                type: 'object',
                list: true,
                name: 'benefits',
                label: 'Benefits',
                fields: [
                  {
                    type: 'string',
                    name: 'benefit',
                    label: 'Benefit',
                  },
                ],
              },
            ],
          },
        ],
      }      
    ],
  },
});
