const INITIAL_STATE = {
  sections: [
    {
      title: 'Mixing',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/6YhddCZ/SSL-SiX.jpg',
      id: 1,
      linkUrl: 'mixing-info'
    },
    {
      title: 'Mastering',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/HDksNjy/Portico-II.jpg',
      id: 2,
      linkUrl: 'mastering-info'
    },
    {
      title: 'Audio Repair',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/64tycvy/RX8.png',
      id: 3,
      linkUrl: 'mastering-info'
    },
    {
      title: 'Beats',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/LSsMqfR/MPC.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'production-info'
    },
    {
      title: 'ABOUT',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/PF8fV3H/Banner-Background.webp',
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