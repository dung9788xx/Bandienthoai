const productHomeDefaultIcon = 'https://cdn.tgdd.vn/Products/Images/522/233257/huawei-t10s-600x600-600x600.jpg';
const productDetailDefaultIcon = 'https://cdn.tgdd.vn/Products/Images/522/233257/huawei-t10s-600x600-600x600.jpg';
const toTopIcon = `${process.env.PUBLIC_URL}/toTop.png`;
const imageBanner = [{ id: 1, image: '/imageBanner1.png' }, { id: 2, image: '/imageBanner2.png' },
  { id: 2, image: '/imageBanner3.png' }];

const images = {
  productDetail: {
    productDetailDefaultIcon,
  },
  home: {
    imageBanner,
    toTopIcon,
    productHomeDefaultIcon,
  },
};

export default images;
