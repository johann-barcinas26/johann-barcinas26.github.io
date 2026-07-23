// Add / edit your real projects here. `image` and `video` are both optional —
// use a video for a demo clip, an image for a screenshot, or leave both out
// for a placeholder box.
//
// `longDescription` and `gallery` feed the "View project" popup:
// - longDescription: a fuller write-up (falls back to `description` if omitted)
// - gallery: array of { type: 'image' | 'video', src } shown in the popup's
//   carousel (falls back to a single item built from `image`/`video` if omitted)
const projects = [
  {
    // barpath project
    id: 'barpath',
    title: 'BarPath',
    description:
      'A virutal lifting coach that analyzes your form and provides feedback to help you lift safely and effectively.',
    longDescription:
      'BarPath tracks your barbell path during lifts using computer vision, then gives feedback on form issues like bar drift, uneven tempo, and range of motion. Built to help lifters train safely without needing a coach in the room.',
    image: '/barpathicon.jpg',
    video: null,
    gallery: [],
    tags: ['Accessibility', 'Education'],
    link: null,
  },
  {
    // gomoku project
    id: 'gomoku',
    title: 'Gomoku',
    description: 'A simple implementation of the Gomoku board game.',
    longDescription:
      'A longer write-up of this project: the problem it solves, how it works, and what you learned building it.',
    image: null,
    video: null,
    gallery: [],
    tags: ['OS', 'C'],
    link: null,
  },
  {
    // block bot project
    id: 'block-bot',
    title: 'Autonomous Block Bot',
    description: 'Short description of what this project does and why you built it.',
    longDescription:
      'A longer write-up of this project: the problem it solves, how it works, and what you learned building it.',
    image: '/WholeBot.JPG',
    video: null,
    gallery: [
      { type: 'image', src: '/SunctionCup.JPG' },
      { type: 'image', src: '/Skeleton.JPG' },
      { type: 'image', src: '/WholeBot.JPG' }
    ],
    tags: ['Tag One', 'Tag Two'],
    link: null,
  },

    {
    // nametag project
    id: 'nametag',
    title: 'Name Tag',
    description: 'Short description of what this project does and why you built it.',
    longDescription:
      'A longer write-up of this project: the problem it solves, how it works, and what you learned building it.',
    image: '/nametag.JPG',
    video: null,
    gallery: [
      { type: 'video', src: '/nametag_vid.MOV' },
      { type: 'image', src: '/nametag.JPG' }
    ],
    tags: ['Tag One', 'Tag Two'],
    link: null,
  },
]

export default projects
