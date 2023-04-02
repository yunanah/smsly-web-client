const reviewQuestion = [
  {
    id: 1,
    question_txt: '구매한 브라의 사이즈는 무엇인가요?',
    column: 'BRA_SIZE',
  },
  {
    id: 2,
    question_txt: '착용감 점수를 매겨주세요.',
    column: 'FIT',
  },
  {
    id: 3,
    question_txt: '몇 번째 후크를 채우셨나요?',
    column: 'HOOK',
  },
  {
    id: 4,
    question_txt: '밑둘레는 어떤 느낌이었나요?',
    column: 'BAND_PRESSURE',
  },
  {
    id: 5,
    question_txt: '밑둘레의 착용감은 만족스러운가요?',
    column: 'BAND_FIT',
    answer_options: [
      { id: 0, content: '불편함' },
      { id: 1, content: '불편하지만 참을 수 있음' },
      { id: 2, content: '좋음' },
    ],
  },
  {
    id: 6,
    question_txt: '불편 사항이 있었던 것에 모두 체크해 주세요.',
    column: 'UNCOM_DETAIL',
    answer_options: {
      cup: [
        { id: 1, content: '컵 넘침' },
        { id: 2, content: '윗컵 들뜸' },
        { id: 3, content: '하컵 들뜸' },
        { id: 4, content: '컵 밀착이 안됨' },
        { id: 5, content: '컵 모양 부적합' },
        { id: 13, content: '부유방이 삐져나옴' },
      ],
      wire: [
        { id: 6, content: '와이어 압박감' },
        { id: 7, content: '와이어가 살을 찌름' },
        { id: 8, content: '와이어가 들뜸' },
        { id: 14, content: '겨드랑이 살이 쓸림' },
      ],
      under: [
        { id: 9, content: '밑둘레 압박감이 느껴짐' },
        { id: 10, content: '밑둘레 고정이 잘 안됨' },
        { id: 15, content: '날개 너비가 좁아서 살이 파고듦' },
      ],
      shoulder: [
        { id: 11, content: '어깨끈이 너무 좁음' },
        { id: 12, content: '어깨끈이 너무 넓음' },
      ],
      etc: { id: 0, content: '전체 해당사항 없음' },
    },
  },
  {
    id: 7,
    question_txt: '원하는 기능을 만족시켰나요?',
    column: ['SATIS_GATHER', 'SATIS_PUSHUP', 'SATIS_SURGE', 'SATIS_ACCBREAST', 'SATIS_ACCBACK'],
    answer_options: [
      [
        { id: 0, content: '기능 없음' },
        { id: 1, content: '골이 적당히 생김' },
        { id: 2, content: '골이 과하게 생김' },
      ],
      [
        { id: 0, content: '기능 없음' },
        { id: 1, content: '조금 올려줌' },
        { id: 2, content: '많이 올려줌' },
      ],
      [
        { id: 0, content: '기능 없음' },
        { id: 1, content: '기능 있음' },
      ],
      [
        { id: 0, content: '기능 없음' },
        { id: 1, content: '기능 있음' },
      ],
      [
        { id: 0, content: '기능 없음' },
        { id: 1, content: '기능 있음' },
      ],
    ],
  },
  {
    id: 8,
    question_txt: '퀄리티는 어땠나요?',
    column: 'QUALITY',
    answer_options: [
      { id: 2, content: '만족스러움' },
      { id: 1, content: '보통' },
      { id: 0, content: '불만족스러움' },
    ],
  },
  {
    id: 9,
    question_txt: '전반적인 만족도는 몇 점인가요?',
    column: 'TOTAL_SCORE',
  },
  {
    id: 10,
    question_txt: '다른 여성분께 추천하시나요?',
    column: 'RECOMMEND',
    answer_options: [
      { id: 2, content: '추천해요.' },
      { id: 1, content: '그냥 그래요.' },
      { id: 0, content: '비추천해요.' },
    ],
  },
];

module.exports = { reviewQuestion };
