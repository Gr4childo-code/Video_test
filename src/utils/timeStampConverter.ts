export const timeStampConverter = (timestamp: number): string => {
  const minutes = Math.floor(timestamp / 60);

  // Calculate remaining seconds after minutes
  const remainingSeconds = timestamp % 60;
  const seconds = Math.floor(remainingSeconds);

  // Calculate milliseconds
  const milliseconds = Math.floor((remainingSeconds - seconds) * 1000);

  // Format with leading zeros where needed
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMilliseconds = milliseconds.toString().padStart(3, '0');

  return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};
