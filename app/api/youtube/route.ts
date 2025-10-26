// app/api/youtube/route.ts
// app/api/youtube/route.ts

import xml2js from 'xml2js';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url ?? '', `http://${req.headers.host}`);
  const channelId = searchParams.get('channelId');
  const podcastName = searchParams.get('podcastName');

  console.log('channelId:', channelId);  // Log channelId
  console.log('podcastName:', podcastName);  // Log podcastName

  if (!channelId || !podcastName) {
    return new Response(
      JSON.stringify({ error: 'Missing channelId or podcastName parameter' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(rssUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed. Status: ${response.status}`);
    }

    const xml = await response.text();
    const result = await xml2js.parseStringPromise(xml);
    const entries = result.feed.entry;
    console.log(entries)

    const filteredEntries = entries.filter((entry: any) => {
      const title = entry.title[0];
      const duration = entry['yt:duration']?.[0];

      return title.includes(podcastName) && (!duration || parseInt(duration) > 60); 
    });

    if (filteredEntries.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No valid podcast episodes found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const latestThree = filteredEntries.slice(0, 3).map((entry: any) => {
      const videoId = entry['yt:videoId'][0];
      const title = entry.title[0];
      const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      return { videoId, title, thumbnail };
    });
    
    return new Response(
      JSON.stringify(latestThree),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
    
  } catch (error: any) {
    console.error('Error fetching or parsing RSS feed:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch or parse feed', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


