const INITIAL_STATE = {
  sections: [
    {
      title: 'Mixing',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/xSYBPqN/SSL-SiX.webp',
      id: 1,
      linkUrl: 'mixing-info'
    },
    {
      title: 'Mastering',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/vjd1hS5/Portico-II.webp',
      id: 2,
      linkUrl: 'mastering-info'
    },
    {
      title: 'RX Repair',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/1vcRzxz/RX8.webp',
      id: 3,
      linkUrl: 'repair-info'
    },
    {
      title: 'Fresh Beats',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/20zwsy5/MPC.webp',
      size: 'large',
      id: 4,
      linkUrl: 'beats-for-sale'
    },
    {
      title: 'ABOUT',
      subTitle: 'See More',
      imageUrl: 'https://i.ibb.co/9yxNWLK/Banner-Background.webp',
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