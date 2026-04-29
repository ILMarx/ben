const PEOPLE = [
  {
    id: "andrea-mattia-marcelli",
    name: "Andrea Mattia Marcelli",
    academicTitle: "Prof., Habil., Ph.D.",
    affiliation: "Universitas Mercatorum, Italy",
    orcid: "https://orcid.org/0000-0002-9297-4536",
    roles: ["board", "digital-chapter"],
    roleLabels: {
      board: "President",
      "digital-chapter": "Digital Chapter Coord."
    },
    bio: "Associate Professor of Education with more than a decade of experience in the Italian Academia and previous scholarly experience in Australia. His research focuses on heritage education in an ecopedagogical perspective, with particular attention to ultraperipheral and remote regions, and on migration studies connected to the phenomenon of Unaccompanied Minors in Europe.",
    bioHtml: "Associate Professor of Education with more than a decade of experience in the Italian Academia and previous scholarly experience in Australia. His research focuses on heritage education in an ecopedagogical perspective, with particular attention to ultraperipheral and remote regions, and on migration studies connected to the phenomenon of Unaccompanied Minors in Europe.",
    picture: "assets/images/people/andrea-mattia-marcelli.png",
    picturePosition: "50% 20%",
    emailUser: "andrea.marcelli",
    emailDomain: "unimercatorum.it"
  },
  {
    id: "rita-minello",
    name: "Rita Minello",
    academicTitle: "Prof., Habil., Ph.D.",
    affiliation: "Università degli Studi Niccolò Cusano, Italy",
    orcid: "https://orcid.org/0000-0001-5623-7347",
    roles: ["board", "gorizia-chapter"],
    roleLabels: {
      board: "Secretary",
      "gorizia-chapter": "Gorizia Chapter Coord."
    },
    bio: "Associate Professor of Education, Rita boasts five decades of experience in education and training, of which 27 spent in the Academia. During her tenure, Rita coordinated various university courses in education. She currently directs the scientific journal Formazione & insegnamento and is member of prestigious scientific and editorial committees.",
    bioHtml: "Associate Professor of Education, Rita boasts five decades of experience in education and training, of which 27 spent in the Academia. During her tenure, Rita coordinated various university courses in education. She currently directs the scientific journal <em>Formazione &amp; insegnamento</em> and is member of prestigious scientific and editorial committees.",
    picture: "assets/images/people/rita-minello.png",
    picturePosition: "50% 20%",
    emailUser: "rita.minello",
    emailDomain: "unicusano.it"
  },
  {
    id: "mario-rossi",
    name: "Mario Rossi",
    academicTitle: "Ph.D.",
    affiliation: "Affiliation to be confirmed",
    orcid: "",
    roles: ["board"],
    roleLabels: {
      board: "Board member"
    },
    bio: "Placeholder profile for a future member of the Borderland Education Network governance. This entry is used to preserve the layout while the appointment is being finalised.",
    bioHtml: "Placeholder profile for a future member of the Borderland Education Network governance. This entry is used to preserve the layout while the appointment is being finalised.",
    picture: "assets/images/people/placeholder.png",
    picturePosition: "50% 20%",
    emailUser: "",
    emailDomain: ""
  },
  {
    id: "andreyanna-ivanchenko",
    name: "Andreyanna Ivanchenko",
    academicTitle: "Prof., Ph.D., Dr. Psychol. Sci.",
    affiliation: "M. Dragomanov Ukrainian State University, Kyiv, Ukraine; Interregional Academy of Personnel Management, Kharkiv, Ukraine",
    orcid: "https://orcid.org/0000-0001-8470-4328",
    roles: ["scientific-committee"],
    roleLabels: {
      "scientific-committee": "Scientific Committee member"
    },
    bio: "Full Professor of Psychology at M. Dragomanov Ukrainian State University in Kyiv and at the Kharkiv Institute of the Interregional Academy of Personnel Management. She holds a Ph.D. in General Psychology and a Doctor of Psychological Sciences degree. Her research focuses on creativity, self-development, crisis psychology, psycho-emotional trauma, stress resistance, psychosomatics, psycholinguistics, interpersonal relations, and alexithymia.",
    bioHtml: "Full Professor of Psychology at M. Dragomanov Ukrainian State University in Kyiv and at the Kharkiv Institute of the Interregional Academy of Personnel Management. She holds a Ph.D. in General Psychology and a Doctor of Psychological Sciences degree. Her research focuses on creativity, self-development, crisis psychology, psycho-emotional trauma, stress resistance, psychosomatics, psycholinguistics, interpersonal relations, and alexithymia.",
    picture: "assets/images/people/andreyanna-ivanchenko.png",
    picturePosition: "50% 20%",
    emailUser: "andreyan",
    emailDomain: "libero.it"
  },
  {
    id: "vitalii-lunov",
    name: "Vitalii Lunov",
    academicTitle: "Assoc. Prof., Ph.D., D.H.C.",
    affiliation: "Bogomolets National Medical University, Ukraine; G.S. Kostiuk Institute of Psychology, NAES of Ukraine",
    orcid: "https://orcid.org/0000-0002-7085-8454",
    roles: ["scientific-committee"],
    roleLabels: {
      "scientific-committee": "Scientific Committee member"
    },
    bio: "Associate Professor of General and Medical Psychology at Bogomolets National Medical University and leading research fellow at the G.S. Kostiuk Institute of Psychology of the National Academy of Educational Sciences of Ukraine. His work focuses on clinical and health psychology, psychotherapy, psychoanalytic psychology, neuropsychology, psychodiagnostics, experimental psychology, and research methodology.",
    bioHtml: "Associate Professor of General and Medical Psychology at Bogomolets National Medical University and leading research fellow at the G.S. Kostiuk Institute of Psychology of the National Academy of Educational Sciences of Ukraine. His work focuses on clinical and health psychology, psychotherapy, psychoanalytic psychology, neuropsychology, psychodiagnostics, experimental psychology, and research methodology.",
    picture: "assets/images/people/vitalii-lunov.png",
    picturePosition: "50% 20%",
    emailUser: "vitalii.lunov",
    emailDomain: "gmail.com"
  },
  {
    id: "scientific-committee-placeholder-2",
    name: "Scientific Committee Member 2",
    academicTitle: "Ph.D.",
    affiliation: "Affiliation to be confirmed",
    orcid: "",
    roles: ["scientific-committee"],
    roleLabels: {
      "scientific-committee": "Scientific Committee member"
    },
    bio: "Placeholder profile for a future member of the Scientific Committee.",
    bioHtml: "Placeholder profile for a future member of the Scientific Committee.",
    picture: "assets/images/people/placeholder.png",
    picturePosition: "50% 20%",
    emailUser: "",
    emailDomain: ""
  },
  {
    id: "scientific-committee-placeholder-3",
    name: "Scientific Committee Member 3",
    academicTitle: "Ph.D.",
    affiliation: "Affiliation to be confirmed",
    orcid: "",
    roles: ["scientific-committee"],
    roleLabels: {
      "scientific-committee": "Scientific Committee member"
    },
    bio: "Placeholder profile for a future member of the Scientific Committee.",
    bioHtml: "Placeholder profile for a future member of the Scientific Committee.",
    picture: "assets/images/people/placeholder.png",
    picturePosition: "50% 20%",
    emailUser: "",
    emailDomain: ""
  },
  {
    id: "scientific-committee-placeholder-4",
    name: "Scientific Committee Member 4",
    academicTitle: "Ph.D.",
    affiliation: "Affiliation to be confirmed",
    orcid: "",
    roles: ["scientific-committee"],
    roleLabels: {
      "scientific-committee": "Scientific Committee member"
    },
    bio: "Placeholder profile for a future member of the Scientific Committee.",
    bioHtml: "Placeholder profile for a future member of the Scientific Committee.",
    picture: "assets/images/people/placeholder.png",
    picturePosition: "50% 20%",
    emailUser: "",
    emailDomain: ""
  }
];
