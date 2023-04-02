const typeImages = [
  {
    //2-2	2-2, 1-1, 1-2, 2-1, 2-3, 2-4, 2-5, 4-5, 6-2	9장
    type: 1,
    represent: require('@/assets/bratabase/2/2-2.png'),
    subImages: [
      { id: 4, path: require('@/assets/bratabase/2/2-2.png') },
      { id: 1, path: require('@/assets/bratabase/1/1-1.png') },
      { id: 2, path: require('@/assets/bratabase/1/1-2.png') },
      { id: 3, path: require('@/assets/bratabase/2/2-1.png') },
      { id: 5, path: require('@/assets/bratabase/2/2-3.png') },
      { id: 6, path: require('@/assets/bratabase/2/2-4.png') },
      { id: 7, path: require('@/assets/bratabase/2/2-5.png') },
      { id: 15, path: require('@/assets/bratabase/4/4-5.png') },
      { id: 22, path: require('@/assets/bratabase/6/6-2.png') },
    ],
  },
  {
    // 3-1	3-1, 3-2, 3-3, 4-1, 4-2, 4-6, 5-1	7장
    type: 2,
    represent: require('@/assets/bratabase/3/3-1.png'),
    subImages: [
      { id: 8, path: require('@/assets/bratabase/3/3-1.png') },
      { id: 9, path: require('@/assets/bratabase/3/3-2.png') },
      { id: 10, path: require('@/assets/bratabase/3/3-3.png') },
      { id: 11, path: require('@/assets/bratabase/4/4-1.png') },
      { id: 12, path: require('@/assets/bratabase/4/4-2.png') },
      { id: 16, path: require('@/assets/bratabase/4/4-6.png') },
      { id: 17, path: require('@/assets/bratabase/5/5-1.png') },
    ],
  },
  {
    // 6-1	6-1, 5-2, 5-3, 5-4, 6-3, 6-4, 6-5, 8-1, 8-2, 8-3	10장
    type: 3,
    represent: require('@/assets/bratabase/6/6-1.png'),
    subImages: [
      { id: 21, path: require('@/assets/bratabase/6/6-1.png') },
      { id: 18, path: require('@/assets/bratabase/5/5-2.png') },
      { id: 19, path: require('@/assets/bratabase/5/5-3.png') },
      { id: 20, path: require('@/assets/bratabase/5/5-4.png') },
      { id: 23, path: require('@/assets/bratabase/6/6-3.png') },
      { id: 24, path: require('@/assets/bratabase/6/6-4.png') },
      { id: 25, path: require('@/assets/bratabase/6/6-5.png') },
      { id: 29, path: require('@/assets/bratabase/8/8-1.png') },
      { id: 30, path: require('@/assets/bratabase/8/8-2.png') },
      { id: 31, path: require('@/assets/bratabase/8/8-3.png') },
    ],
  },
  {
    // 7-3	7-3, 4-4, 7-1, 7-2, 9-1, 9-2, 22-2, 22-3	8장
    type: 4,
    represent: require('@/assets/bratabase/7/7-3.png'),
    subImages: [
      { id: 28, path: require('@/assets/bratabase/7/7-3.png') },
      { id: 14, path: require('@/assets/bratabase/4/4-4.png') },
      { id: 26, path: require('@/assets/bratabase/7/7-1.png') },
      { id: 27, path: require('@/assets/bratabase/7/7-2.png') },
      { id: 32, path: require('@/assets/bratabase/9/9-1.png') },
      { id: 33, path: require('@/assets/bratabase/9/9-2.png') },
      { id: 76, path: require('@/assets/bratabase/22/22-2.png') },
      { id: 77, path: require('@/assets/bratabase/22/22-3.png') },
    ],
  },
  {
    // 12-1	12-1, 4-3, 10-1, 12-2, 12-3, 12-4, 12-5, 12-6, 12-7, 19-3	10장
    type: 5,
    represent: require('@/assets/bratabase/12/12-1.png'),
    subImages: [
      { id: 37, path: require('@/assets/bratabase/12/12-1.png') },
      { id: 13, path: require('@/assets/bratabase/4/4-3.png') },
      { id: 34, path: require('@/assets/bratabase/10/10-1.png') },
      { id: 38, path: require('@/assets/bratabase/12/12-2.png') },
      { id: 39, path: require('@/assets/bratabase/12/12-3.png') },
      { id: 40, path: require('@/assets/bratabase/12/12-4.png') },
      { id: 41, path: require('@/assets/bratabase/12/12-5.png') },
      { id: 42, path: require('@/assets/bratabase/12/12-6.png') },
      { id: 43, path: require('@/assets/bratabase/12/12-7.png') },
      { id: 69, path: require('@/assets/bratabase/19/19-3.png') },
    ],
  },
  {
    // 14-1	14-1, 13-1, 14-2, 14-3, 14-4, 14-5, 16-2, 19-1, 19-4	9장
    type: 6,
    represent: require('@/assets/bratabase/14/14-1.png'),
    subImages: [
      { id: 46, path: require('@/assets/bratabase/14/14-1.png') },
      { id: 44, path: require('@/assets/bratabase/13/13-1.png') },
      { id: 47, path: require('@/assets/bratabase/14/14-2.png') },
      { id: 48, path: require('@/assets/bratabase/14/14-3.png') },
      { id: 49, path: require('@/assets/bratabase/14/14-4.png') },
      { id: 50, path: require('@/assets/bratabase/14/14-5.png') },
      { id: 56, path: require('@/assets/bratabase/16/16-2.png') },
      { id: 67, path: require('@/assets/bratabase/19/19-1.png') },
      { id: 70, path: require('@/assets/bratabase/19/19-4.png') },
    ],
  },
  {
    // 11-1	11-1, 11-2, 15-1, 15-2, 15-3, 15-4, 17-5, 18-1	8장
    type: 7,
    represent: require('@/assets/bratabase/11/11-1.png'),
    subImages: [
      { id: 35, path: require('@/assets/bratabase/11/11-1.png') },
      { id: 36, path: require('@/assets/bratabase/11/11-2.png') },
      { id: 51, path: require('@/assets/bratabase/15/15-1.png') },
      { id: 52, path: require('@/assets/bratabase/15/15-2.png') },
      { id: 53, path: require('@/assets/bratabase/15/15-3.png') },
      { id: 54, path: require('@/assets/bratabase/15/15-4.png') },
      { id: 65, path: require('@/assets/bratabase/17/17-5.png') },
      { id: 66, path: require('@/assets/bratabase/18/18-1.png') },
    ],
  },
  {
    // 22-1	22-1, 13-2, 17-4, 22-4, 22-5, 22-6, 22-7, 23-1, 23-2, 23-4, 23-6, 24-7	12장
    type: 8,
    represent: require('@/assets/bratabase/22/22-1.png'),
    subImages: [
      { id: 75, path: require('@/assets/bratabase/22/22-1.png') },
      { id: 45, path: require('@/assets/bratabase/13/13-2.png') },
      { id: 64, path: require('@/assets/bratabase/17/17-4.png') },
      { id: 78, path: require('@/assets/bratabase/22/22-4.png') },
      { id: 79, path: require('@/assets/bratabase/22/22-5.png') },
      { id: 80, path: require('@/assets/bratabase/22/22-6.png') },
      { id: 81, path: require('@/assets/bratabase/22/22-7.png') },
      { id: 82, path: require('@/assets/bratabase/23/23-1.png') },
      { id: 83, path: require('@/assets/bratabase/23/23-2.png') },
      { id: 85, path: require('@/assets/bratabase/23/23-4.png') },
      { id: 87, path: require('@/assets/bratabase/23/23-6.png') },
      { id: 94, path: require('@/assets/bratabase/24/24-7.png') },
    ],
  },
  {
    // 16-4	16-4, 16-1, 16-3, 16-5, 16-6, 19-2, 20-1, 20-2, 20-3, 23-3, 23-5, 24-2	12장
    type: 9,
    represent: require('@/assets/bratabase/16/16-4.png'),
    subImages: [
      { id: 58, path: require('@/assets/bratabase/16/16-4.png') },
      { id: 55, path: require('@/assets/bratabase/16/16-1.png') },
      { id: 57, path: require('@/assets/bratabase/16/16-3.png') },
      { id: 59, path: require('@/assets/bratabase/16/16-5.png') },
      { id: 60, path: require('@/assets/bratabase/16/16-6.png') },
      { id: 68, path: require('@/assets/bratabase/19/19-2.png') },
      { id: 71, path: require('@/assets/bratabase/20/20-1.png') },
      { id: 72, path: require('@/assets/bratabase/20/20-2.png') },
      { id: 73, path: require('@/assets/bratabase/20/20-3.png') },
      { id: 84, path: require('@/assets/bratabase/23/23-3.png') },
      { id: 86, path: require('@/assets/bratabase/23/23-5.png') },
      { id: 89, path: require('@/assets/bratabase/24/24-2.png') },
    ],
  },
  {
    // 24-1	24-1, 17-1, 17-2, 17-3, 21-1, 24-3, 24-4, 24-5, 24-6	9장
    type: 10,
    represent: require('@/assets/bratabase/24/24-1.png'),
    subImages: [
      { id: 88, path: require('@/assets/bratabase/24/24-1.png') },
      { id: 61, path: require('@/assets/bratabase/17/17-1.png') },
      { id: 62, path: require('@/assets/bratabase/17/17-2.png') },
      { id: 63, path: require('@/assets/bratabase/17/17-3.png') },
      { id: 74, path: require('@/assets/bratabase/21/21-1.png') },
      { id: 90, path: require('@/assets/bratabase/24/24-3.png') },
      { id: 91, path: require('@/assets/bratabase/24/24-4.png') },
      { id: 92, path: require('@/assets/bratabase/24/24-5.png') },
      { id: 93, path: require('@/assets/bratabase/24/24-6.png') },
    ],
  },
];

export default typeImages;
