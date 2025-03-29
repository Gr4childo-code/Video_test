export const timeStampConverter = (timestamp: number): string => {
  const minutes = Math.floor(timestamp / 60);

  const remainingSeconds = timestamp % 60;
  const seconds = Math.floor(remainingSeconds);

  const milliseconds = Math.floor((remainingSeconds - seconds) * 1000);

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMilliseconds = milliseconds.toString().padStart(3, '0');

  return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};
