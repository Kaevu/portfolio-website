'use client';

import { useEffect, useState } from 'react'

type Video = {
  title: string
  videoId: string
  thumbnail: string
}

const channelId = 'UCwVevVbti5Uuxj6Mkl5NHRA'
const podcastName = 'Lemonade Stand'

export default function LatestPodcast() {
  const [episodes, setEpisodes] = useState<Video[]>([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await fetch(`/api/youtube?channelId=${channelId}&podcastName=${encodeURIComponent(podcastName)}`)

      if (!res.ok) {
        console.error('Failed to fetch video data')
        return
      }

      const data = await res.json()
      setEpisodes(data.slice(0, 3)) // Take top 3
    }

    fetchEpisodes()
  }, [])

  if (!episodes.length) return <div>Loading episodes...</div>

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 p-4 space-y-4 w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
        Latest Episodes
      </h2>
      {episodes.map((video, i) => (
        <a
          key={i}
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col md:flex-row gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full md:w-48 h-28 object-cover rounded"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-md font-semibold text-gray-800 dark:text-white line-clamp-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Watch now →
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}


