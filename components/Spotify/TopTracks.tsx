import Track from "./Track"
import type { Song } from "./types"

const topTracks: Song[] = [
  {
    artist: "DJ Leftover Sushi",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "I Probably Shouldn't Have Eaten That",
  },
  {
    artist: "The Venmo Requests",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "Everyone Owes Me $50",
  },
  {
    artist: "The Group Chat Historians",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "Remember When You Said That?",
  },
  {
    artist: "DJ Overdraft",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "Drinks Were on Me (But They Shouldn’t Have Been)",
  },
  {
    artist: "Missing AirPods",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "Check Find My One More Time",
  },
  {
    artist: "Processing Refund",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "3 Month 7-10 Business Days",
  },
  {
    artist: "Horizontal Shower",
    songUrl: "https://youtu.be/dQw4w9WgXcQ?si=RfcDcxh4b8kE1er3",
    title: "I’ll Just Lay Here",
  },
]

export default function TopTracks() {
  return (
    <section className="py-7">
      <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        Spotify Top Songs
      </p>
      {topTracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </section>
  )
}

