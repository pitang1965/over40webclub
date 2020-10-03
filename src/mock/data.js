import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Over 40 Web Club', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: '40代以上のみなさまへ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'こちらは',
  name: 'Over 40 Web Club',
  subtitle: 'Web開発の勉強をしている40歳以上の方のためのオンラインコミュニティです。',
  cta: 'より詳しく',
};

// ABOUT DATA
export const aboutData = {
  img: 'icon-512x512.png',
  paragraphOne:
    'Web開発の勉強をしている40歳以上の方が、情報交換したり、助けあったり、交流を深めたりするためのオンラインコミュニティです。',
  paragraphTwo: '無料で非公開となっています。',
  paragraphThree: '趣旨をご理解いただける方は誰でも参加できます。',
  resume: 'https://twitter.com/messages/59996143-59996143?recipient_id=59996143&text=', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '中高年専門コミュニティ',
    info: '20代、30代の方が集まるコニュニティとは違います。',
    info2: '皆様の自己紹介が濃く、時に苦く、ちょっとジーンときてしまうことも。',
    url: 'https://twitter.com/messages/59996143-59996143?recipient_id=59996143&text=',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '主なチャンネル',
    info:
      '2020-09-28にできたコミュニティで随時改良していきますが、現在以下のチャンネルがございます。',
    info2:
      '自己紹介、今日やること、将来の夢、質問、学習報告、好きな音楽、雑談、うまくいかなかった報告・・・',
    url: 'https://github.com/pitang1965/over40webclub/issues/1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '当クラブのルール',
    info: '技術を競い合ったりマウントするのではなく・・・',
    info2: '興味を持ったことをじっくり学べるようお互いにサポートしていきます。',
    url: 'https://pitang1965.github.io/over40webclub-tos/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '私達のコミュニティに入りたいですか？ いいですね！',
  btn: 'ご連絡をお待ちしています',
  email: 'http://www.twitter.com/messages/compose?recipient_id=59996143',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pitang1965',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/pitang1965',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pitang1965',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
