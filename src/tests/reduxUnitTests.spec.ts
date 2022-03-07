import { store } from '../redux/store';
import * as axios from 'axios';

import MockAdapter from 'axios-mock-adapter'

import {
  CategoryProps,
  selectData,
  setFilters,
  fetchCategoriesAsync,
  fetchTherapistsAsync,
  fetchUpcomingMeetingsAsync
} from '../pages/Home/HomeSlice';
import { PROD_URL, STAGING_URL } from '../shared/utils/constants';
export type MeetingCardProps = {
  date: string,
  time: string,
  title: string,
  meetingLink: string,
}
const getListResponse:MeetingCardProps[] = [{
  
    date: "25 Jan",
    time: "04: 00pm",
    title: "Session between Lakshitha & Dr.Khanchandani",
    meetingLink: "https://meet.google.com/zwb-koam-dgs",
  
}]
const request = (axios as any).create({
  baseURL: process.env.ENV === 'staging' ? STAGING_URL :PROD_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const mockNetworkResponse = () => {
  const mock = new MockAdapter(request)
  mock.onGet(`/upcomingMeetings/fetchData`).reply(200, getListResponse)
}
describe('Upcoming meeting redux state tests', () => {
  beforeAll(() => {   
    mockNetworkResponse() 
  })

  it('Should be able to fetch the upcoming list for a specific user', async () => {
    const result = await store.dispatch(fetchUpcomingMeetingsAsync())
    const meetings = result.payload
    expect(result.type).toBe('upcomingMeetings/fetchData/fulfilled')
    expect(meetings).toEqual(getListResponse)

    const state = store.getState().home.upcomingMeetings
    expect(state[0]).toEqual({ meetings })
  })


  // it('Should be able to filter therapist based on category', async () => {
  //   await store.dispatch(fetchGamesSummary(userId))

  //   store.dispatch(
  //     gamesSlice.actions.updateGameInterest({
  //       interestCount: 1,
  //       userIsInterested: true,
  //       gameKey: 'game_1',
  //     }),
  //   )

  //   let state = store.getState().games
  //   expect(state.games.game_1.interest_count).toBe(1)
  //   expect(state.games.game_1.userIsInterest).toBe(true)

  //   store.dispatch(
  //     gamesSlice.actions.updateGameInterest({
  //       interestCount: -1,
  //       userIsInterested: false,
  //       gameKey: 'game_1',
  //     }),
  //   )
  //   state = store.getState().games
  //   expect(state.games.game_1.interest_count).toBe(0)
  //   expect(state.games.game_1.userIsInterest).toBe(false)
  // })
})

