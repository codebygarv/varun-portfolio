export const portfolioContent = {
  about: {
    hero: {
      tagline: "Code. Create. Play.",
    },
    long: "I’m a passionate Game Developer with over 2.5 years of experience in designing, developing, and optimizing interactive gaming experiences. I specialize in creating engaging gameplay systems, implementing mechanics, and bringing creative ideas to life through code.\n\nThroughout my journey, I’ve worked with modern game development tools and frameworks, gaining hands-on experience in building games from concept to deployment. I enjoy solving complex problems, improving performance, and crafting smooth, immersive user experiences.\n\nI’m always eager to learn new technologies, experiment with innovative ideas, and collaborate with teams to build high-quality games. My goal is to create experiences that not only entertain but also leave a lasting impact on players.",
  },
  experience: [
    {
      role: 'Game Developer',
      company: 'Sunovatech',
      period: '2025 – Present',
      desc: 'Designing and implementing advanced AR/VR gameplay systems using Unreal Engine 5, with a strong focus on immersive interaction, real-time performance optimization, and scalable architecture. Developing intuitive user experiences for virtual and augmented environments, including motion controls, spatial interactions, and realistic physics. Collaborating with cross-functional teams to deliver high-quality, production-ready AR/VR applications that enhance user engagement and realism.',
      current: true,
    },
    {
      role: 'Game Developer',
      company: 'Zatun',
      period: '2023 – 2025',
      desc: 'Contributed to full-cycle game development, from prototyping to deployment. Developed core gameplay mechanics, optimized performance, and enhanced user experience through efficient debugging and system design. Worked with modern tools and pipelines to deliver polished and engaging gaming experiences.',
      current: false,
    },
  ],
  education: [
    {
      degree: 'Master of Technology in Computer Science',
      institution: 'Kurukshetra University',
      period: '2024 – 2026',
      desc: "Master's degree focusing on core gameplay systems, interactive narrative, and engine architecture. Participated in multiple game jams, leading the programming efforts using Unreal Engine and C++.",
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Kurukshetra University',
      period: '2019 – 2024',
      desc: "Bachelor's degree focusing on core gameplay systems, interactive narrative, and engine architecture. Participated in multiple game jams, leading the programming efforts using Unreal Engine and C++.",
    }

  ],
  skills: [
    {
      category: "Game Engineering",
      items: [
        { name: "Unreal Engine 5", focus: "Blueprints & Optimization", color: "#8c52ff" },
        { name: "Gameplay Programming", focus: "Mechanics & Systems", color: "#00d4ff" },
        { name: "Physics & Mechanics", focus: "Interaction Design", color: "#FEDF9E" },
      ]
    },
    {
      category: "Technical & Design",
      items: [
        { name: "Level Design", focus: "Environment & Flow", color: "#4ade80" },
        { name: "UI/UX Implementation", focus: "Interfaces & HUDs", color: "#ff6b9d" },
        { name: "Debugging & Optimization", focus: "Performance Tuning", color: "#8c52ff" },
      ]
    },
  ],
  socials: {
    youtube: "https://www.youtube.com/@IanBellGamesStudio",
    linkedin: "https://www.linkedin.com/in/varun-thakral-ab03bb251",
    github: "#", // Placeholder as not provided
  },
  contact: {
    email: "varunthakral999@gmail.com",
    location: "Kurukshetra, HR",
    phone: "+91 9588710931",
  },
  microcopy: {
    viewWork: "Explore the Archives",
    letsConnect: "Inquire for Collaboration",
    downloadResume: "Resume",
  },
  projects: [
    {
      id: "down-and-out",
      type: "Professional",
      title: "Down & Out",
      role: "Game Developer",
      duration: "1 year",
      platforms: ["steam vr", "meta quest 2&3", "PS4VR", "PS5VR2"],
      responsibility: "Player setup, gameplay, AI, UI, PlayStation porting.",
      link: "https://store.steampowered.com/app/1450060/Down_and_Out/",
      image: "https://i.ibb.co/PGBRzJg0/Screenshot-2026-01-11-224815.png",
      bgCover: "https://i.ibb.co/PGBRzJg0/Screenshot-2026-01-11-224815.png",
      description: "A first-person VR open-world brawler featuring physics-driven combat, adaptive AI systems, and immersive interaction mechanics, developed for PC VR and PlayStation VR platforms.",
      technicalContributions: [
        {
          category: "Gameplay Systems",
          points: [
            "Implemented core gameplay systems using event-driven architecture and modular components.",
            "Designed interaction flows using trigger volumes, collision events, and gameplay state handling.",
            "Built combat systems leveraging physics-based interactions and animation-driven responses."
          ]
        },
        {
          category: "Player Systems (VR)",
          points: [
            "Developed hybrid player architecture using both Character and Pawn classes (Unreal Engine).",
            "Integrated motion controller input, hand presence, and interaction systems for immersive VR gameplay.",
            "Managed camera and tracking using VR Origin setups and HMD-based positioning."
          ]
        },
        {
          category: "AI Systems",
          points: [
            "Designed and implemented AI using Unreal Engine's AI framework (Behavior Trees, Blackboard, Pawn Sensing, State Trees).",
            "Built reactive enemy systems capable of adapting to player combat patterns.",
            "Structured AI into modular states such as engage, evade, patrol, and alert for scalability."
          ]
        },
        {
          category: "UI Systems (VR)",
          points: [
            "Developed UI using UMG (Unreal Motion Graphics) for HUD, menus, and in-world UI.",
            "Implemented 3D Widgets / World Space UI for VR interaction.",
            "Optimized UI performance for VR rendering constraints."
          ]
        },
        {
          category: "PlayStation VR Porting",
          points: [
            "Contributed to platform adaptation and release pipeline for PSVR/PSVR2.",
            "Followed Sony Technical Requirements (TRC/TCR compliance).",
            "Performed platform-specific optimization and controller remapping."
          ]
        }
      ],
      techStack: ["Unreal Engine (Blueprints, C++)", "Behavior Trees", "Blackboard", "State Tree", "Pawn Sensing", "Motion Controllers", "HMD tracking", "World-space UI", "UMG", "PlayStation Dev Dashboard"],
      color: "#8c52ff"
    },
    {
      id: "scp-project-pneuma",
      type: "Professional",
      title: "SCP: Project Pneuma",
      role: "Game Developer",
      duration: "1.5 year",
      platforms: ["PC", "Steam", "Playstation5", "Xbox"],
      responsibility: "Player setup, gameplay, AI, UI, Asset management, Game Mechanics, optimization, Code integration, debugging, Profiling.",
      link: "https://store.steampowered.com/app/3872430/SCP_Project_Pneuma/",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2147&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/1nzYDJ-gTSIDUMSjN0YeC8Alx0hcEE73Q/view?usp=sharing",
      description: "A cinematic single-player psychological survival horror game built in Unreal Engine, featuring narrative-driven exploration, stealth-based survival, and encounters with adaptive SCP entities.",
      technicalContributions: [
        {
          category: "Gameplay Systems",
          points: [
            "Implemented core gameplay systems using event-driven architecture and modular Blueprint/C++ components.",
            "Designed mechanics for stealth, resource management, and environmental interaction.",
            "Developed gameplay triggers using Trigger Volumes, Overlap Events, and Custom Collision Channels."
          ]
        },
        {
          category: "Player Systems",
          points: [
            "Developed hybrid player architecture supporting both First-Person and Third-Person perspectives.",
            "Implemented camera systems (FP/TP switching, dynamic handling) and input mapping."
          ]
        },
        {
          category: "Optimization & Profiling",
          points: [
            "Performed performance analysis using Unreal Insights and Stat Commands.",
            "Implemented World Partition, Level Streaming, and LOD systems for scalable open-world performance.",
            "Optimized rendering efficiency through Frustum and Occlusion Culling."
          ]
        },
        {
          category: "Asset Management & Tooling",
          points: [
            "Established structured asset pipeline and naming conventions.",
            "Debugged systems using Behavior Tree Debugger and Gameplay Debugger."
          ]
        }
      ],
      techStack: ["Unreal Engine (Blueprints, C++)", "Behavior Trees", "Blackboard", "State Tree", "Pawn Sensing", "UMG", "World Partition", "Level Streaming", "Unreal Insights"],
      color: "#ff4d4d"
    },
    {
      id: "great-train-outlaws",
      type: "Professional",
      title: "GTO: Great Train Outlaws",
      role: "Game Developer",
      duration: "1 year",
      platforms: ["VR", "Meta Quest 3", "PICO Ultra 4", "Arcade LBE"],
      responsibility: "Player setup, gameplay, AI, Game Mechanics, Code integration.",
      link: "https://deployreality.com/synthesisvr/games/great-train-outlaws",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2050&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/1nzYDJ-gTSIDUMSjN0YeC8Alx0hcEE73Q/view?usp=sharing",
      description: "A location-based multiplayer VR (LBVR) Wild West shooter designed for arcade setups, supporting up to 4-player cooperative gameplay on moving train environments.",
      technicalContributions: [
        {
          category: "Multiplayer Networking",
          points: [
            "Implemented multiplayer architecture using Unreal Engine's Client-Server model.",
            "Developed Actor replication for player states, weapons, and AI synchronization.",
            "Optimized session management for LAN-based local arcade deployment."
          ]
        },
        {
          category: "VR Interaction (LBVR)",
          points: [
            "Developed VR player systems tailored for free-roam environments with full-body spatial tracking.",
            "Implemented physics-based grabbing, weapon handling (recoil, hit detection), and gesture systems."
          ]
        },
        {
          category: "AI Systems",
          points: [
            "Built various AI archetypes: Biker AI (traversal), Horse-mounted AI (synced with train), and Boss AI (multi-phase).",
            "Designed AI behaviors to support co-op multiplayer combat scenarios."
          ]
        }
      ],
      techStack: ["Unreal Engine (Blueprints, C++)", "Networking (Client-Server)", "Replication", "Behavior Trees", "Hand Tracking", "Free-roam tracking"],
      color: "#ffd700"
    },
    {
      id: "death-rush",
      type: "Personal",
      title: "Death Rush: Zombie Apocalypse",
      role: "Game Developer",
      duration: "6 months",
      platforms: ["Android", "PC"],
      responsibility: "Player setup, gameplay, AI, UI, Game Mechanics, Code integration, API Integration, Level Design, Optimization, Ad mob Integration.",
      link: "https://play.google.com/store/apps/details?id=com.Zombie.hunter.DeathRush",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/12ouREzYsw7hXzE1TG_JVF7uVzcn5kSwW/view?usp=sharing",
      description: "A mobile Third-person zombie survival shooter featuring wave-based combat, progression systems, and AdMob monetization.",
      technicalContributions: [
        {
          category: "Mobile Optimization",
          points: [
            "Reduced draw calls and improved rendering efficiency for mobile platforms.",
            "Optimized AI and gameplay logic to ensure stable FPS on low-end Android devices."
          ]
        },
        {
          category: "Monetization & API",
          points: [
            "Integrated Google AdMob (Banner, Interstitial, Rewarded Video) with gameplay-triggered events.",
            "Integrated Third-party SDKs for analytics and monetization."
          ]
        },
        {
          category: "Core Systems",
          points: [
            "Built Inventory system, wave-based spawning, and difficulty scaling logic.",
            "Optimized touch controls for responsive mobile gameplay."
          ]
        }
      ],
      techStack: ["Unreal Engine", "Blueprints", "C++", "AdMob SDK", "Behavior Trees", "UMG", "Android Optimization"],
      color: "#00ff00"
    },
    {
      id: "metaverse-prototype",
      type: "Personal",
      title: "School & Museum Metaverse",
      role: "Game Developer",
      duration: "Prototype",
      platforms: ["PC"],
      responsibility: "Player setup, gameplay, AI, UI, Level Design, Optimization.",
      link: "https://drive.google.com/file/d/1A1KkLMBqw63pxwjGky4hh2rzJJDUrxC-/view",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/1Rehx8Xx8EsHJdWdfHAjUWEPRVPBc92_D/view?usp=sharing",
      description: "Developed interactive metaverse environments for educational and cultural purposes, featuring NPC interactions and HUD interfaces.",
      technicalContributions: [
        {
          category: "Environment & AI",
          points: [
            "Developed player systems including movement and interaction mechanics.",
            "Worked on NPC setup for basic behaviors and world interaction.",
            "Assisted in organizing level elements for metaverse prototypes."
          ]
        }
      ],
      techStack: ["Unreal Engine (Blueprints)", "UMG", "PC"],
      color: "#00d4ff"
    },
    {
      id: "arch-viz",
      type: "Personal",
      title: "Architectural Visualization",
      role: "Game Developer",
      duration: "Prototype",
      platforms: ["PC"],
      responsibility: "Player setup, Texture Inventory, UI, Runtime Material switch.",
      link: "https://www.youtube.com/watch?v=P6OmDA0Qa2c",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/1SDxG60AyIwJSf-8Jg2Tuor9Wa0QnV5XG/view?usp=sharing",
      description: "An interactive arch-viz project focusing on real-time customization and user-driven exploration of interior spaces.",
      technicalContributions: [
        {
          category: "Interactive Features",
          points: [
            "Built runtime material switching system for dynamic surface customization.",
            "Designed a texture inventory system for real-time interior design choices.",
            "Developed smooth navigation systems for architectural walkthroughs."
          ]
        }
      ],
      techStack: ["Unreal Engine (Blueprints)", "UMG", "Material Parameters"],
      color: "#FEDF9E"
    },
    {
      id: "jungle-level-design",
      type: "Personal",
      title: "Level Design: Jungle Environment",
      role: "Game Developer",
      duration: "Prototype",
      platforms: ["PC"],
      responsibility: "Level Design, lighting, environment composition.",
      link: "https://drive.google.com/drive/folders/1vdOA53pYNmUSyQY25BRooZh1e2pTf-b0?usp=sharing",
      image: "https://images.unsplash.com/photo-1440778303588-4355ec920b39?q=80&w=2070&auto=format&fit=crop",
      bgCover: "https://drive.google.com/file/d/1U1ePdfubIj6M2zrvdOldIRatXzsjyVJf/view?usp=sharing",
      description: "A jungle-themed environment focused on natural exploration, featuring realistic outdoor elements and dynamic lighting.",
      technicalContributions: [
        {
          category: "Environment Composition",
          points: [
            "Created layouts for vegetation, terrain, and natural pathways.",
            "Implemented day-night cycle using Ultra Dynamic Sky (UDS).",
            "Designed focal points like lakes and ponds to guide player exploration."
          ]
        }
      ],
      techStack: ["Unreal Engine", "Ultra Dynamic Sky", "Foliage Tool"],
      color: "#4ade80"
    }
  ]
};
