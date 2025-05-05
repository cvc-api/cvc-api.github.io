import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function DownloadCounter() {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const badgeUrl = `https://static.pepy.tech/badge/CaliforniaVirtualCampusAPI`;

    fetch(badgeUrl)
      .then((res) => res.text())
      .then((svg) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svg, 'image/svg+xml');
        const targetText = doc.querySelector('text[y="140"][textLength="170"]');
        if (targetText) {
          setDownloadCount(Number(targetText.textContent));
        } else {
          setDownloadCount(-1);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setDownloadCount(-1);
        setLoading(false);
      });
  }, []);

  return (
    <div className='mt-12 flex flex-col'>
        <div
        className={`transition-opacity duration-1000 ease-in-out flex flex-col h-1 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {loading ? 
        (
            <>
            <span className='text-3xl text-transparent font-bold'>300</span>
            <span className='text-lg text-white'>Downloads</span>
            </>
        ) : (
            <>
            {downloadCount! >= 0 ? (
                <CountUp end={downloadCount!} duration={5} className='text-3xl text-white font-bold' />
            ) : (
                // Failed to retrieve data
                <CountUp end={357} duration={5} className='text-3xl text-white font-bold' />
            )}
            <span className='text-lg text-white'>Downloads</span>
            </>
        )}
      </div>
    </div>
  );
}
