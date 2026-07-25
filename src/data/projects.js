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
      'An iOS lifting coach app that analyzes your form from video and gives AI-generated feedback, built with a friend using Swift.',
    longDescription:
      "BarPath is an iOS app built with my friend Matt that acts as a virtual lifting coach. Matt led the front-end, including Firebase Google authentication, workout logging, and the navigation flow into form analysis via live camera or a pre-recorded video. Using Apple's AVFoundation and Vision frameworks, the app analyzes lifting form and returns a letter grade along with specific feedback on what went wrong. We started with pre-written feedback responses, then integrated the Anthropic API to generate that feedback dynamically.",
    image: '/barpathicon.jpg',
    video: null,
    gallery: [
      { type: 'video', src: '/apppreview.mp4' }
    ],
    tags: ['Swift', 'iOS', 'Computer Vision'],
    link: null,
  },
  {
    // gomoku project
    id: 'gomoku',
    title: 'Gomoku',
    description:
      'A multiplayer Gomoku (five-in-a-row) game built with classmates to learn client-server networking.',
    longDescription:
      'Gomoku is a five-in-a-row strategy game, similar to Connect 4 but requiring five in a row instead of four. Built with classmates to learn client-server networking, we wrote both the client and server programs from scratch using TCP/IP and web sockets, supporting multiple concurrent game sessions. The server also handled persistent player accounts, tracking login and win/loss records across sessions.',
    image: '/win.png',
    video: null,
    gallery: [
      { type: 'image', src: '/win.png' },
      { type: 'image', src: '/offboard.png' },
      { type: 'image', src: '/gmooku.png' },
      { type: 'image', src: '/PlayerRegister.png' },
      { type: 'image', src: '/serverimage.png' },
    ],
    tags: ['OS', 'C'],
    link: null,
  },
  {
    // block bot project
    id: 'block-bot',
    title: 'Autonomous Block Bot',
    description:
      'An Embedded Systems capstone bot that autonomously locates, picks up, and stacks colored blocks using computer vision and a vacuum gripper.',
    longDescription:
      'Built for our Embedded Systems course, this autonomous robot searches for colored blocks using real-time video processing, identifies and navigates toward them, and picks them up with a vacuum-controlled suction cup before stacking them on a nearby platform. The system combined a Raspberry Pi and a micro:bit to control servo and stepper motors, with logic written in Python and Unix. Beyond the technical build, the project also walked us through a full engineering project lifecycle — planning, risk mitigation, PERT charts, and Gantt charts.',
    image: '/WholeBot.JPG',
    video: null,
    gallery: [
      { type: 'image', src: '/SunctionCup.JPG' },
      { type: 'image', src: '/Skeleton.JPG' },
      { type: 'image', src: '/WholeBot.JPG' }
    ],
    tags: ['Python', 'Embedded Systems', 'Raspberry Pi'],
    link: null,
  },

    {
    // nametag project
    id: 'nametag',
    title: 'ARM Cortex Display Board',
    description:
      'A custom-built ARM Cortex microcontroller board programmed in embedded C, originally built to display my name on an LCD.',
    longDescription:
      'Built for my Microcontrollers class, this project involved designing and assembling a circuit board around an ARM Cortex microcontroller from individual ICs, paired with an LCD display. It was originally programmed in embedded C to display my name, then extended to perform simple math logic operations.',
    image: '/nametag.JPG',
    video: null,
    gallery: [
      { type: 'video', src: '/nametag_vid.mp4' },
      { type: 'image', src: '/nametag.JPG' },
      { type: 'video', src: '/sevenseg.mp4' }
    ],
    tags: ['Embedded C', 'ARM', 'Microcontrollers'],
    link: null,
  },
]

export default projects
