const INITIAL_STATE = {
  sections: [
    {
      title: 'Mixing',
      subTitle: 'See More',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FSSL-SiX.webp?alt=media&token=f64f80db-5f21-4fef-bada-a2a99ce409de',
      id: 1,
      linkUrl: 'mixing-info'
    },
    {
      title: 'Mastering',
      subTitle: 'See More',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FPortico-II.webp?alt=media&token=0c0b26e1-1016-433a-8b10-e1b4e13535d5',
      id: 2,
      linkUrl: 'mastering-info'
    },
    {
      title: 'RX Repair',
      subTitle: 'See More',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FRX8.webp?alt=media&token=70c68575-c34b-4f2c-911e-6509da9dd7eb',
      id: 3,
      linkUrl: 'repair-info'
    },
    {
      title: 'Beat Leases',
      subTitle: 'See More',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FMPC.webp?alt=media&token=b6a6c95a-51d2-4c42-b7ee-302671d6cae3',
      size: 'large',
      id: 4,
      linkUrl: 'beats-for-sale'
    },
    {
      title: 'ABOUT',
      subTitle: 'See More',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FBanner-Background.webp?alt=media&token=64576274-d4d7-4723-870d-33f65b651976',
      size: 'large',
      id: 5,
      linkUrl: 'about'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;