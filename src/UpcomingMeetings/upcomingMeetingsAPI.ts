import { MeetingCardProps } from "./upcomingMeetingsSlice";

// A mock function to mimic making an async request for data
export function fetchMeetings() {
  return new Promise<{ data: MeetingCardProps[] }>((resolve) =>
    setTimeout(() => resolve({ 
      data:  [
        {
          date: "25 Jan",
          time: "04: 00pm",
          title: "Session between Lakshitha & Dr.Khanchandani",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        },
        {
          date: "04 Feb",
          time: "01: 00pm",
          title: "Session between Lakshitha & Dr.Khanchandani",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        },
        {
          date: "16 Feb",
          time: "05: 00pm",
          title: "Session between Lakshitha & Dr.Khanchandani",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        }
      ]
    }), 1000)
  );
}
