const collaborators = [
  {
    name: 'Sandra Altvater',
    languages: ['de'],
    image: 'Sandra-Altvater.jpg',
    desc: 'Profesora de educación especial, Sonderschule Rosenhain, Graz.',
    country: 'au',
    facebook: 'abeneguilogopedia',
    instagram: 'abeneguilogopedia',
  },
  {
    name: 'Pablo Salinas Gracia',
    languages: ['de'],
    image: 'Pablo-Salinas-Gracia.jpg',
    desc: 'Profesor de educación especial,  Sonderschule Rosenhain, Graz.',
    country: 'au'
  },
  {
    name: 'Barbara Salinas-Horngacher',
    languages: ['de'],
    image: 'Barbara-Salinas-Horngacher.jpg',
    desc: 'Lectora de didáctica de lenguas extranjeras,  Karl-Franzens-Universität, Graz.',
    country: 'au'
  },
  {
    name: 'Aiala Grajirena Juanena',
    languages: ['eu'],
    image: 'she.jpg',
    desc: 'P.T maistra.',
    country: 'es'
  },
  {
    name: 'Ane Cuesta Muguruza',
    languages: ['eu'],
    image: 'she.jpg',
    desc: 'P.T maistra.',
    country: 'es'
  },
  {
    name: 'Marina Argote Larrauri',
    languages: ['eu'],
    image: 'she.jpg',
    desc: 'H.H maistra.',
    country: 'es'
  },
  {
    name: 'Onintze Aguirre Méndez',
    languages: ['eu'],
    image: 'she.jpg',
    desc: 'Gizarte Integrazio, Gautena.',
    country: 'es'
  },
  {
    name: 'Marisa Lorenzo Rodríguez',
    languages: ['gl'],
    image: 'marisa.jpg',
    desc: 'Maestra de pedagogía terapéutica.',
    country: 'es'
  },
  {
    name: 'Nitzan Cohen',
    languages: ['he'],
    image: 'nitzan.jpg',
    desc: 'Ph.D. Speech Therapist and Educator. Kaye College. Beer Sheva.',
    country: 'is'
  },
  {
    name: 'Laura Pedrós Cuadra',
    languages: ['en'],
    twitter: 'lapku',
    image: 'Laura_Pedros.jpg',
    desc: 'Profesora de Inglés.',
    country: 'es'
  },
  {
    name: 'Claudia Adelina Benegui',
    languages: ['ro'],
    image: 'she.jpg',
    desc: 'Logopeda en A. Benegui Logopedia.',
    url: 'http://www.abeneguilogopedia.com',
    facebook: 'abeneguilogopedia',
    instagram: 'abeneguilogopedia',
    country: 'es'
  },
  {
    name: 'Gulnara Ibragimova',
    languages: ['ru'],
    image: 'Gulnara_400x400.jpg',
    instagram: 'mom_box_tratata',
    country: 'ru'
  },
  {
    name: 'Irina Tekotskaya (Ирина Текоцкая)',
    languages: ['ru'],
    image: 'Irina-Tekotskaya.jpg',
    desc: 'Speech therapist. Caritas education center for social service. President of the AAC association. ',
    url: 'http://caritas-edu.ru',
    facebook: '100000802752066',
    country: 'ru'
  },
  {
    name: 'Vladimirova Alesandra ((Владимирова Александра))',
    languages: ['ru'],
    image: 'Vladimirova-Alesandra.jpg',
    desc: 'Speech therapist. Saint-Petersburg. ',
    country: 'ru'
  },
  {
    name: 'ICT-AAC',
    languages: ['hr'],
    image: 'ict-aac-logo.png',
    url: 'http://www.ict-aac.hr/',
    facebook: 'ictaac',
    twitter: 'ictaac',
    country: 'hr'
  },
    {
    name: 'Ermira Shabani',
    languages: ['sq'],
    image: 'ermire-shabani.jpg',
    facebook: 'ermiraash',
    desc: 'Psychologist. Kosovo - ',
    country: 'sq'
  },
  {
    name: 'Mia Marčec',
    desc: 'Prof. logoped, working in Centar za odgoj i obrazovanje Tomislav Špoljar, Varaždin. ',
    languages: ['hr'],
    image: 'mia.jpg',
    country: 'hr'
  },
  {
    name: 'Klara Kapeš',
    desc: 'Prof. logoped, working in Centar za odgoj i obrazovanje Tomislav Špoljar, Varaždin. ',
    languages: ['hr'],
    image: 'klara.jpg',
    country: 'hr'
  },
  {
    name: 'Emili Kuhar',
    desc: 'Prof. logoped, working in Centar za odgoj i obrazovanje Tomislav Špoljar, Varaždin. ',
    languages: ['hr'],
    image: 'Emili-Kuhar.jpg',
    country: 'hr'
  },
  {
    name: 'Ivana Klapež',
    desc: 'prof. defektolog-logoped,  working in Centar za odgoj i obrazovanje Tomislav Špoljar, Varaždin. ',
    languages: ['hr'],
    image: 'ivana.jpg',
    country: 'hr'
  },
  {
    name: 'Juan Daniel Burró Aláez',
    languages: ['en'],
    desc: 'Arasaac developer.',
    image: 'juanda.jpeg',
    github: 'juanda99',
    twitter: 'juandawrite',
    country: 'es'
  },
  {
    name: 'David Romero Corral  ',
    languages: ['en'],
    image: 'david-romero-320.jpg',
    desc: 'Arasaac coordinator. ',
    facebook: 'david.romerocorral',
    country: 'es'
  },
  {
    name: 'José Manuel Marcos Rodrigo',
    languages: ['es'],
    image: 'Jose_Manuel.jpg',
    desc: 'Arasaac coordinator. ',
    facebook: 'josemanuelmarcosrodrigo',
    country: 'es'
  },
  {
    name: 'Katalin Révész',
    languages: ['hu'],
    image: 'katalin.png',
    desc: 'Special education teacher, Pilis.',
    instagram: 'revesz.kata',
    country: 'hu'
  },
  {
    name: 'Timea Ulrich',
    languages: ['hu'],
    image: 'Timea-Ulrich.jpg',
    desc: 'Special Needs Teacher in the Field of Autism Spectrum Disorders.',
    country: 'hu'
  },
  {
    name: 'Olga Świeża',
    languages: ['pl'],
    image: 'Olga_Swieza.jpg',
    desc: 'Maestra de educación especial, pedagoga. Fundación SYNAPSIS, Varsovia.',
    url: 'https://synapsis.org.pl',
    facebook: 'fundacja.synapsis',
    country: 'pl'
  },
  {
    name: 'Pilar Marcos Lázaro',
    languages: ['en'],
    image: 'pilar-marcos.jpg',
    desc: 'PhD Walsh Scholar at Teagasc. University College Dublin.',
    linkedIn: 'pilar-marcos-lázaro-989a308a',
    country: 'ir'
  },
  {
    name: 'Rui Fernandes',
    languages: ['pt'],
    image: 'rui-fernandes.jpg',
    desc: 'CANTIC (CRTIC-Amadora).',
    url: 'http://www.cantic.org.pt',
    country: 'pt'
  },
  {
    name: 'Sandra Marques',
    languages: ['pt'],
    image: 'she.jpg',
    desc: 'Responsável pelo Núcleo de Inovação, Investigação e Desenvolvimento da  FENACERCI.',
    url: 'https://www.linkedin.com/in/sandra-marques-13689019/',
    country: 'pt'
  },
  {
    name: 'Sébastien Vermandel',
    languages: ['fr'],
    image: 'he.jpg',
    desc: 'Head Engineer. APF Lab – le Hub.',
    url: '',
    country: 'fr'
  },
  {
    name: 'Aurélie Régent',
    languages: ['fr'],
    image: 'she.jpg',
    desc: 'Speech Therapist. APF Lab – le Hub. ',
    url: '',
    country: 'fr'
  },
  {
    name: 'Thierry Danigo',
    languages: ['fr'],
    image: 'he.jpg',
    desc: 'Ergothérapeute Conseil. APF Lab - le Hub. ',
    url: '',
    country: 'fr'
  },
  {
    name: 'Marie Cañete',
    languages: ['fr'],
    image: 'marie.jpg',
    desc: 'Psychopédagogue et institutrice spécialisée. Logopède, Institut Médicoéducatif (IME) - Sireuil ',
    url: '',
    country: 'fr'
  }, 

  {
    name: 'Meri Nolcheva',
    languages: ['mk'],
    image: 'meri-nolcheva.jpg',
    desc: 'Special educator and rehabilitator. SES "D-r Zlatan Sremec" - Skopje. ',
    url: 'http://www.zlatansremec.edu.mk/',
    facebook: 'zlatansremec',
    country: 'mk'
  },
  {
    name: 'Jasmina Troshanska',
    languages: ['mk'],
    image: 'jt.jpg',
    desc: 'Professor in Special Education and Rehabilitation. Association  "Blue Firefly". ',
    url: 'http://www.sinasvetulka.mk/',
    facebook: 'autismmacedonia',
    country: 'mk'
  },
  {
    name: 'Olga Serra Pellicer',
    languages: ['ca'],
    image: 'she.jpg',
    country: 'es'
  },
  {
    name: 'Susanna Giner Segura',
    languages: ['ca'],
    image: 'susanna.jpg',
    country: 'es',
    desc: 'Logopeda Escola d\'Educació Especial Alba. Reus. ',
  },
  {
    name: 'Marta Donés Martínez',
    languages: ['ca'],
    image: 'marta-dones.jpg',
    country: 'es',
    desc: 'Educadora social. Educadora de Educación Especial en centro público. ',
  },
  {
    name: 'Maria Grazia Fiore',
    languages: ['it'],
    image: 'maria-grazia.jpg',
    desc: 'Docente di scuola primaria, esperto nei processi formativi. Bari. ',
    url: 'https://visualforall.com/',
    facebook: 'mariagrazia.fiore.71',
    country: 'it'
  },
  {
    name: 'Nicoletta Wojciechowski',
    languages: ['it'],
    image: 'NicolettaW.jpg',
    desc: 'Educatrice, architetto. Lodi. ',
    url: 'https://visualforall.com/',
    facebook: 'nicoletta.wojciechowski',
    country: 'it'
  },
  {
    name: 'Labrini Tsokana',
    languages: ['el'],
    image: 'labrini-tsokana.jpg',
    desc: 'Speech Therapist. ',
    instagram: 'labrini_tsokana', 
    country: 'el'
  },
  {
    name: 'Didacticmom',
    languages: ['bg'],
    image: 'she.jpg',
    desc: ' ',
    url: 'https://dondecreceresaprender.blogspot.com',
    instagram: 'didacticmom', 
    facebook: 'didacticmom',
    country: 'bg'
  },
]

export default collaborators
