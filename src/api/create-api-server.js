import db from '../../models'
import * as c from '../constants'
const Opinion = db.Opinion

export function createAPI () {
  return {
    async fetchDailyOpinions (date) {
      const recentDate = await Opinion.getRecentOpinionDate()
      if (date === 'recent') {
        date = recentDate
      } else if (!/^\d{4}\-\d{2}\-\d{2}/.test(date)) {
        return Promise.reject({ code: 404 })
      }

      return {
        date,
        opinions: await Opinion.getOpinionsByDate(date),
        adjacentDates: await Opinion.getAdjacentOpinionDates(date),
      }
    },

    async fetchDailyMarketComments (date) {
      const recentDate = await Opinion.getRecentMarketCommentDate()
      if (date === 'recent') {
        date = recentDate
      } else if (!/^\d{4}\-\d{2}\-\d{2}/.test(date)) {
        return Promise.reject({ code: 404 })
      }

      return {
        date,
        opinions: await Opinion.getMarketCommentsByDate(date),
        adjacentDates: await Opinion.getAdjacentMarketCommentDates(date),
      }
    },

    async getOpinionUrl (id) {
      const opinion = await Opinion.findById(id)

      if (!opinion) return Promise.reject({ code: 404 })

      const date = opinion.date
      const isOpinion = opinion.company_id !== 1970

      const opinions = isOpinion ? await Opinion.getOpinionsByDate(date) : await Opinion.getMarketCommentsByDate(date)
      const opinionIndex = opinions.findIndex(o => o.id == id)
      const pageIndex = Math.floor(opinionIndex / c.PER_PAGE) + 1

      return isOpinion
        ? `/opinions/${date}/${pageIndex}#${id}`
        : `/opinions/market/${date}/${pageIndex}#${id}`
    }
  }
}
