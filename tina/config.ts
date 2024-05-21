import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const heroSection = [
  {
    type: "rich-text",
    name: "titleHero",
    required: false,
    label: "Title (Hero Section)",
  },
  {
    type: "rich-text",
    name: "descriptionHero",
    required: false,
    label: "Description (Hero Section)",
  },
  {
    type: "image",
    required: false,
    name: "imageHero",
    label: "Hero Image",
  },
  {
    type: "string",
    required: false,
    name: "imageHeroAlt",
    label: "Hero Image Alt Tag",
  },
];

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
        name: "home",
        label: "Home",
        path: "src/content/home",
        defaultItem: () => ({
          // title: "Home",
          heroImages: {
            position: "top",
          },
        }),
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          {
            type: "rich-text",
            name: "title",
            label: "Title",
          },
          {
            type: "object",
            name: "whyGlentree",
            label: "Why Glentree",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Tag",
              },
            ],
          },
          {
            type: "object",
            name: "campus",
            label: "Campus",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "rich-text",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "campusCards",
                label: "Campus Image Cards",
                list: true,
                fields: [
                  {
                    type: "boolean",
                    name: "ribbon",
                    label: "Corner Ribbon",
                  },
                  {
                    type: "string",
                    name: "ribbonHeader",
                    label: "Image header Ribbon text",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "imageAlt",
                    label: "Image Alt Tag",
                  },
                  {
                    type: "string",
                    name: "imagelink",
                    label: "Image Link",
                  },
                  {
                    type: "string",
                    name: "imageTitle",
                    label: "Image Title",
                  },
                  {
                    type: "string",
                    name: "imageDescription",
                    label: "Image Description",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            list: true,
            label: "Hero Images",
            name: "heroImages",
            ui: {
              defaultItem: {
                position: "top",
              },
            },
            fields: [
              {
                type: "image",
                name: "image_desktop",
                label: "Desktop Image",
              },
              {
                type: "image",
                name: "image_mobile",
                label: "Mobile Image",
              },
              {
                type: "string",
                name: "position",
                label: "Position",
              },
            ],
          },
          {
            type: "object",
            name: "career",
            label: "Career Section",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt description",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "paragraph",
                label: "Paragraph",
              },
              {
                type: "string",
                name: "buttonName",
                label: "Button Name",
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Url",
              },
            ],
          },
          {
            type: "object",
            list: true,
            label: "Testimonials",
            name: "testimonials",
            ui: {
              itemProps: (item) => ({
                label: item?.author,
              }),
            },
            fields: [
              {
                type: "image",
                name: "testimonial_picture",
                label: "Testimonial Picture",
              },
              {
                type: "string",
                name: "testimonial_picture_alt",
                label: "Testimonial Picture (Alt Tag)",
              },
              {
                type: "rich-text",
                name: "testimonial",
                label: "Testimonial",
              },
              {
                type: "string",
                name: "author",
                label: "Author",
              },
              {
                type: "string",
                name: "role",
                label: "Role",
              },
              {
                type: "string",
                name: "embedId",
                label: "Youtube Embed Id",
              },
            ],
          },
          {
            type: "object",
            list: false,
            label: "Big Admission CTA",
            name: "bigAdmissionCTA",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "body",
                label: "Body",
              },
              {
                type: "string",
                name: "primaryCTAText",
                label: "Primary CTA Text",
              },
              {
                type: "string",
                name: "primaryCTALink",
                label: "Primary CTA Link",
              },
              {
                type: "string",
                name: "secondaryCTAText",
                label: "Secondary CTA Text",
              },
              {
                type: "string",
                name: "secondaryCTALink",
                label: "Secondary CTA Link",
              },
            ],
          },

          {
            type: "object",
            name: "founderNote",
            label: "Founder's Note",
            list: true,
            fields: [
              {
                type: "rich-text",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },

              {
                type: "string",
                name: "personName",
                label: "Person Name",
              },
              {
                type: "string",
                name: "personRole",
                label: "Person Role",
              },
              {
                type: "string",
                name: "videoLink",
                label:
                  "Add button video URL for example https://www.youtube.com/watch?v=vU3yC0Xt6Rk",
              },
              {
                type: "string",
                name: "buttonName",
                label: "Button Name",
              },
            ],
          },

          {
            type: "object",
            list: true,
            label: "FAQs",
            name: "faqs",
            ui: {
              itemProps: (item) => ({
                label: item?.question,
              }),
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
              },
              {
                type: "rich-text",
                name: "answer",
                label: "Answer",
              },
            ],
          },
          {
            type: "object",
            name: "familyTree",
            label: "Glentree Family Tree",
            list: true,
            fields: [
              {
                type: "rich-text",
                name: "sectionheading",
                label: "Section Heading",
              },
              {
                type: "object",
                name: "familyList",
                label: "Family List",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "imageAlt",
                    label: "Image Alt Tag",
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Url",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Us",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            name: "founderDesk",
            label: "Founder's Desk Banner",
            list: true,
            fields: [
              {
                type: "rich-text",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },

              {
                type: "string",
                name: "personName",
                label: "Person Name",
              },
              {
                type: "string",
                name: "personRole",
                label: "Person Role",
              },
              {
                type: "string",
                name: "videoLink",
                label:
                  "Add button video URL for example https://www.youtube.com/watch?v=vU3yC0Xt6Rk",
              },
              {
                type: "string",
                name: "buttonName",
                label: "Button Name",
              },
            ],
          },
          {
            type: "object",
            name: "founderDeskMembers",
            label: "Founder's Desk Members details",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Person Image",
              },
              {
                type: "string",
                name: "name",
                label: "Person Name",
              },
              {
                type: "string",
                name: "title",
                label: "Person Role",
              },
              {
                type: "string",
                name: "message",
                label: "Message",
              },
              {
                type: "string",
                name: "linkedin",
                label: "Linkedin URL",
              },
            ],
          },
          {
            type: "object",
            name: "missions",
            label: "Our Mission Section",
            list: true,
            fields: [
              {
                type: "rich-text",
                name: "header",
                label: "Header",
              },
              {
                type: "object",
                name: "missions",
                label: "Our Mission lists",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Image detail (ALT)",
                  },
                  {
                    type: "rich-text",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "career",
            label: "Career Section",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt description",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "paragraph",
                label: "Paragraph",
              },
              {
                type: "string",
                name: "buttonName",
                label: "Button Name",
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Url",
              },
            ],
          },
        ],
      },
      {
        name: "curriculum",
        label: "Curriculum",
        path: "src/content/curriculum",
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Description Tag",
          },
          ...heroSection,
          {
            type: "object",
            list: true,
            label: "Academics",
            name: "academics",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "grade",
                label: "Grade",
              },
              {
                type: "object",
                list: true,
                name: "concepts",
                label: "Concepts",
                ui: {
                  itemProps: (item) => ({
                    label: item?.concept,
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "concept",
                    label: "Concept",
                  },
                ],
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Tag",
              },
              {
                type: "boolean",
                name: "newlyAdded",
                label: "Newly Added",
              },
            ],
          },
          {
            type: "object",
            name: "lflCurriculum",
            label: "LFL Curriculum",
            list: true,
            fields: [
              {
                type: "string",
                name: "subTitle",
                label: "Sub Title",
              },
              {
                type: "rich-text",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "paragraph",
                label: "Paragraph",
              },
              {
                type: "object",
                name: "cardDetails",
                label: "Card Details",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Card Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Image Alt field",
                  },
                  {
                    type: "rich-text",
                    name: "title",
                    label: "Card Title",
                  },
                  {
                    type: "rich-text",
                    name: "cardDescription",
                    label: "Card Description",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "clubs",
        label: "Clubs",
        path: "src/content/clubs",
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            list: true,
            label: "Clubs",
            name: "clubs",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "thumbnail",
                label: "Thumbnail Image",
              },
              {
                type: "string",
                name: "thumbnailAlt",
                label: "Thumbnail Alt Tag",
              },
            ],
          },
        ],
      },
      {
        name: "coscholastics",
        label: "Co-scholastics",
        path: "src/content/coscholastics",
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            list: true,
            label: "Co-scholastic Activities",
            name: "coscholastics",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "thumbnail",
                label: "Thumbnail Image",
              },
              {
                type: "string",
                name: "thumbnailAlt",
                label: "Thumbnail Alt Tag",
              },
            ],
          },
        ],
      },
      {
        name: "afterschool",
        label: "After School Activities",
        path: "src/content/afterschool",
        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            list: true,
            label: "AfterSchool Programs",
            name: "afterschool",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "thumbnail",
                label: "Thumbnail Image",
              },
              {
                type: "string",
                name: "thumbnailAlt",
                label: "Thumbnail Alt Tag",
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
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            name: "heroImages",
            label: "Hero Slide Images (Only for Bannerghatta campus)",
            list: true,
            ui: {
              defaultItem: {
                position: "center",
              },
              itemProps: (item) => ({
                label: item?.alt,
              }),
            },
            fields: [
              {
                type: "image",
                name: "image_desktop",
                label: "Desktop Image",
              },
              {
                type: "image",
                name: "image_mobile",
                label: "Mobile Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt tag",
              },
              {
                type: "string",
                name: "position",
                label: "Position",
              },
            ],
          },
          {
            type: "string",
            name: "virtualCampusLink",
            label: "VirtualCampusLink",
            required: false,
          },
          {
            type: 'object',
            name: 'principalMessage',
            label: 'Principal Message',
            fields: [
              {
                type: "string",
                label: "Section Subtitle",
                name: "sectionSubtitle",
              },
              {
                type: "string",
                label: "Section Title",
                name: "sectionTitle",
              },
              {
                type: "string",
                label: "Principal Name",
                name: "principalName",
              },
              {
                type: "image",
                label: "Principal Image",
                name: "principalImage",
              },
              {
                type: "string",
                label: "Principal Image Alt Tag",
                name: "principalImageAlt",
              },
              {
                type: "rich-text",
                label: "Principal Message",
                name: "principalMessage",
              },
            ],
          },
          {
            type: "string",
            name: "campusTourEmbedId",
            label: "Campus Tour Video (Embed Id)",
            required: false,
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
                label: item?.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                list: true,
                name: "bulletPoints",
                label: "Bullet Points",
                ui: {
                  itemProps: (item) => ({
                    label: item?.bulletPoint,
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "bulletPoint",
                    label: "Bullet Point",
                  },
                ],
              },
              {
                type: "object",
                list: true,
                label: "Gallery",
                name: "gallery",
                ui: {
                  itemProps: (item) => ({
                    label: item?.title,
                  }),
                },
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "altTag", label: "Alt Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },

          {
            type: "object",
            name: "newsLetter",
            label: "NewsLetter",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Tag",
              },
              {
                type: "image",
                name: "newsLetter",
                label: "News Letter",
              },
            ],
          },
          {
            type: "object",
            name: "earthlab",
            label: "Earth Lab",
            list: true,
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "SubTitle",
              },
              {
                type: "rich-text",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "object",
                name: "list",
                label: "Video Title List",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "videotitle",
                    label: "Video Title",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "scholarship",
            label: "Scholarship",
            list: true,
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "rich-text",
                name: "heading",
                label: "Heading",
              },
              {
                type: "object",
                name: "scholarshipList",
                label: "Scholarship List",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Image title (alt tag)",
                  },
                  {
                    type: "rich-text",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "list",
                    label: "Item List",
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "showcase",
            label: "What's happening At Glentree",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            list: true,
            fields: [
              { type: "image", name: "image", label: "image" },
              { type: "string", name: "title", label: "Title" },
            ],
          },
          {
            type: "object",
            name: "contactUs",
            label: "Contact Us",
            fields: [
              {
                type: "string",
                name: "phoneNo",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "mapEmbedLink",
                label: "Google Maps Embed Link",
              },
              {
                type: "string",
                name: "address",
                label: "Address",
              },
              {
                type: "string",
                name: "workingHours",
                label: "Working Hours",
              },
            ],
          },
        ],
      },
      {
        name: "admissions",
        label: "Admissions",
        path: "src/content/admissions",

        fields: [
          {
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          ...heroSection,
          {
            type: "object",
            list: true,
            label: "Admission Process",
            name: "admissionProcess",
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Step",
              }),
            },
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
            ],
          },
          {
            type: "object",
            list: true,
            label: "Key Information",
            name: "keyInformation",
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Information",
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
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
            type: "string",
            name: "titleTag",
            label: "Title Tag",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          {
            type: "object",
            list: true,
            label: "Disclosure",
            name: "disclosure",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "rich-text", name: "disclosure", label: "Disclosure" },
            ],
          },
        ],
      },
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "titleTag", label: "Title tag" },
          { type: "rich-text", name: "caption", label: "Caption" },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
          },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: "image", name: "thumbnail", label: "Thumbnail" },
          { type: "rich-text", name: "blog", label: "Blog" },
        ],
      },
      {
        name: "updates",
        label: "Updates",
        path: "src/content/Updates",
        fields: [
          // {
          //   type: 'string',
          //   name: 'titleTag',
          //   label: 'Title Tag',
          // },
          // {
          //   type: 'string',
          //   name: 'metaDescription',
          //   label: 'Meta Description',
          // },
          {
            type: "object",
            list: true,
            label: "Updates",
            name: "updates",
            ui: {
              itemProps: (item) => ({
                label: item?.title,
              }),
            },
            fields: [
              { type: "image", name: "thumbnail", label: "Thumbnail" },
              { type: "string", name: "alt", label: "Alt tag" },
              { type: "string", name: "title", label: "title" },
              { type: "string", name: "videoLink", label: "Video Link" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "datetime",
                name: "publishedDate",
                label: "Published Date",
              },
            ],
          },
        ],
      },
      {
        name: "scholarships",
        label: "Scholarships",
        path: "src/content/scholarships",
        fields: [
          // {
          //   type: 'string',
          //   name: 'titleTag',
          //   label: 'Title Tag',
          // },
          // {
          //   type: 'string',
          //   name: 'metaDescription',
          //   label: 'Meta Description',
          // },
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionDescription",
            label: "Section Description",
          },
          {
            type: "object",
            list: true,
            label: "Scholarship Details",
            name: "scholarships",
            ui: {
              itemProps: (item) => ({
                label: item?.title.map((title) => title.text).join(" "),
              }),
            },
            fields: [
              {
                type: "object",
                list: false,
                name: "title",
                label: "Title",
                fields: [
                  {
                    type: "boolean",
                    name: "highlight",
                    label: "Highlight",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
              {
                type: "object",
                list: true,
                name: "eligibility",
                label: "Eligibility",
                fields: [
                  {
                    type: "string",
                    name: "criterion",
                    label: "Criterion",
                  },
                ],
              },
              {
                type: "object",
                list: true,
                name: "documentsRequired",
                label: "Documents Required",
                fields: [
                  {
                    type: "string",
                    name: "document",
                    label: "Document",
                  },
                ],
              },
              {
                type: "object",
                list: true,
                name: "benefits",
                label: "Benefits",
                fields: [
                  {
                    type: "string",
                    name: "benefit",
                    label: "Benefit",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
