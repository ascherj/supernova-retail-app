import axios from "axios";
const url = process.env.FEC_API_URL;

const getProductList = () => {
  return axios.get(`${url}/products`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    }
  });
};

const getProductInfo = (id = 37315) => {
  return axios.get(`${url}/products/${id}`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    }
  });
};

const getProductStyles = (id = 37315) => {
  return axios.get(`${url}/products/${id}/styles`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    }
  });
};

const getRelatedProducts = (id = 37315) => {
  return axios.get(`${url}/products/${id}/related`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    }
  });
};

const getQA = (id = 37315) => {
  return axios.get(`${url}/qa/questions`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    },
    params: {
      product_id: id,
      page: 1,
      count: 5
    }
  });
};

const getReviewMetaData = (id = 37315) => {
  return axios.get(`${url}/reviews/meta`, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    },
    params: {
      product_id: id
    }
  });
};

const getReviewsOfProduct = (id = 37315, sortString = "relevant", count = 20) => {
  return axios.get(
    `${url}/reviews`,
    {
      headers: {
        Authorization: process.env.GITHUB_API_TOKEN
      },
      params: {
        product_id: id,
        page: 1,
        count,
        sort: sortString
      }
    }
  );
};

const reportReview = (reviewId) => {
  return axios.put(`${url}/reviews/report/${reviewId}`);
};

const postReview = (
  id = 37315,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics
) => {
  return axios.post(`${url}/reviews/${id}`, {
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics,
  });
};

const getCart = (userToken) => {
  return axios.get(`${url}/cart/${userToken}`);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`${url}/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  });
};

const getSpecificAnswers = (questionId) => {
  return axios.get(`${url}/qa/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`${url}/qa/questions`, {
    body: text,
    name: name,
    email: email,
    product_id: id
  }, {
    headers: {
      Authorization: process.env.GITHUB_API_TOKEN
    }
  });
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  return axios.post(`${url}/qa/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/report`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnswers: getSpecificAnswers,
  askQuestion: askQuestion,
  answerQuestion: answerQuestion,
  markQAsHelpful: markQAsHelpful,
  reportQuestion: reportQuestion,
  markAnsAsHelpful: markAnsAsHelpful,
  reportAns: reportAns,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct,
  postReview: postReview,
  reportReview: reportReview,
  getCart: getCart,
  addToCart: addToCart,
};

export default apiMaster;
