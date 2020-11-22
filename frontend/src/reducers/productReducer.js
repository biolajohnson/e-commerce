import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_RESET,
  PRODUCT_REVIEW_FAIL,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
  PRODUCT_REVIEW_RESET,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
} from "../constants/productConstants";

export const productsListReducer = (
  state = { products: [] },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload.products,
        pages: payload.pages,
        page: payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        product: payload,
        success: true,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (
  state = { product: {} },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        success: true,
        loading: false,
        product: payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_UPDATE_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const productReviewReducer = (
  state = { product: {} },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_REVIEW_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case PRODUCT_REVIEW_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopReducer = (
  state = { products: [] },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_TOP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_TOP_SUCCESS:
      return {
        products: payload,
        loading: false,
      };
    case PRODUCT_TOP_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
