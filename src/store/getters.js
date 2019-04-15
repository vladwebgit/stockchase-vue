import _ from 'lodash';

export default {
  opinions(state) {
    return _.values(state.opinions);
  },

  numTotalOpinions(state) {
    return state.numTotalOpinions;
  },

  date(state) {
    return state.date;
  },

  adjacentDates(state) {
    return state.adjacentDates;
  },

  olderDate(state) {
    return state.olderDate;
  },

  newerDate(state) {
    return state.newerDate;
  },

  user(state) {
    return state.user;
  },

  loggedIn(state) {
    return !!state.user.email;
  },

  adFree(state) {
    return state.user.ad_free;
  },

  shouldShowAd(getters) {
    return getters.user.loaded && !getters.adFree;
  },

  topPicks(state) {
    return state.topPicks;
  },

  trendingStocks(state) {
    return state.trendingStocks;
  },

  discoverPosts(state) {
    return state.discoverPosts;
  },

  latestExperts(state) {
    return state.latestExperts;
  },

  newestExperts(state) {
    return state.newestExperts;
  },

  newestCompanies(state) {
    return state.newestCompanies;
  },

  blogPosts(state) {
    return state.blogPosts;
  },

  latestComment(state) {
    return state.latestComment;
  },

  marketCallGuests(state) {
    return state.marketCallGuests;
  },

  premiumCompanies(state) {
    return state.premiumCompanies;
  },

  topExperts(state) {
    return state.topExperts;
  },

  worstExperts(state) {
    return state.worstExperts;
  },

  experts(state) {
    return state.experts;
  },

  totalExperts(state) {
    return state.totalExperts;
  },

  searchedExperts(state) {
    return state.searchedExperts;
  },

  numDisqusComments(state) {
    return state.numDisqusComments;
  },

  company(state) {
    return state.company;
  },
};
