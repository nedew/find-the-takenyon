// シーン設定
let sceneConfig = {
  scene1: {
    backgroundImage: 'taut.jpg',
    scenario: [
      [1, 'おーい、そこのキミ！'],
      [1, 'はじめまして、ボクは竹から生まれた『たけにょん』だにょん♪'],
      [1, 'じつは、さっきまで妹の『のこたん』といっしょにこのあたりをあるいていたんだけど、とつぜんうしろから『サル』にぶつかられたんだにょん！'],
      [1, 'なんとか立ちあがったけど、そのサルにのこたんをさらわれてしまったにょん・・・あの子がいないとボクは・・・'],
      [1, '・・・え、キミがのこたんをさがすのをてつだってくれるの？　ありがとうだにょん！　じゃあさっそくだけどボクについてきてにょん！']
    ],
    mission: {
      num: 2,
      title: 'たけにょんをみつけよう！',
      targetImage: 'take2-1-03.png',
      imgPosition: '4.5 1 -0.5',
      rotation: '0 -80 0',
      aspectRatio: '0.6:1' // width:height
    }
  },
  scene2: {
    backgroundImage: 'torii.jpg',
    scenario: [
      [1, 'ここがボクがぶつかられたばしょだにょん。そのときのことを見ていた人がいるとおもうんだけど・・・あ！　あの女の人にはなしをきいてみるにょん！'],
      [1, 'あの！　ボクにぶつかってきたサルがどっちににげていったか見てないにょん？'],
      [2, 'たしか・・・あっちだったとおもいますよ'],
      [1, 'おしえてくれてありがとうだにょん！　キミ、つぎはあっちにいってみるにょん！']
    ],
    mission: {
      num: 2,
      title: '女の人にはなしをきいてみよう！',
      targetImage: 'take2-1-44.png',
      imgPosition: '-4 1.3 5',
      rotation: '0 140 0',
      aspectRatio: '0.5:0.8'
    }
  },
  scene3: {
    backgroundImage: 'illumination.jpg',
    scenario: [
      [1, 'このあたりにサルがいるはずにょん！　さがしてみるにょん！'],
      [3, 'ウキキ！　のこたんをかえしてほしいなら『池』にくるウキ！'],
      [1, 'あ、にげたにょん！　おいかけるにょん！'],
    ],
    mission: {
      num: 2,
      title: 'サルをみつけろ！',
      targetImage: 'take2-1-23.png',
      imgPosition: '2.4 3.6 -5',
      rotation: '0 -20 0',
      aspectRatio: '0.6:1'
    }
  },
  scene4: {
    backgroundImage: 'tikurin.jpg',
    scenario: [
      [1, 'サルににげられてしまったにょん・・・。池にいくまえに、サルのにがてなたべものを買っていくにょん！'],
      [1, 'ちゃんと買えたにょん？　それじゃあ、池にレッツゴーだにょん！'],
    ],
    mission: {
      num: 2,
      title: 'サルのにがてなたべもの\n『トウガラシ』を買っていこう！',
      targetImage: 'take2-1-17.png',
      imgPosition: '5 -0.7 5',
      rotation: '0 215 0',
      aspectRatio: '0.8:1.2'
    }
  }
  // scene5: {
  //   backgroundImage: 'pond.jpg',
  //   scenario: [
  //     [3, 'ウキキ！　オレのナワバリにくるとは、バカなやつらウキ！　おまえたち、やってしまうウキ！'],
  //     [1, 'キミ、さっき買っておいたトウガラシをサルたちになげるにょん！'],
  //     [3, 'ウキ！？　そ、それはトウガラシ！　にげるウキー！'],
  //     [1, 'やったにょん！　サルをおいはらったにょん！　のこたんは・・・あ、いたにょん！　あの子がのこたんだにょん！'],
  //     [1, 'キミのおかげで、のこたんをたすけることができたにょん！　ほんとうにありがとうだにょん！　キミはボクのヒーローだにょん♪', 'nokotan']
  //   ],
  //   mission: {
  //     num: 3,
  //     title: 'サルにトウガラシをなげよう！',
  //     targetImage: 'saru_saruyama_boss_text.png',
  //     imgPosition: '0 1 7',
  //     rotation: '0 -180 0',
  //     aspectRatio: '2:2'
  //   }
  // }
};


// キャラクター
// const personConfig = [
//   {
//     displayName: 'たけにょん',
//     img: 'tatie_takenyon.png',
//     label: 'takenyon',
//     scale: '1 1 1',
//     position: '1 1 1'
//   },
//   {
//     displayName: 'おんなのひと',
//     img: 'tatie_woman.png',
//     label: 'woman',
//     scale: '1 1 1',
//     position: '1 1 1'
//   },
//   {
//     displayName: 'さる',
//     img: 'tatie_saru.png',
//     label: 'saru',
//     scale: '1 1 1',
//     position: '1 1 1'
//   }
// ];