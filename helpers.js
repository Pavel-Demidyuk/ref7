export function timeToString(delta) {
    let minutes = Math.floor(delta / 1000 / 60)
            .toString()
            .padStart(2, '0'),
        seconds = (Math.floor(delta / 1000) % 60).toString().padStart(2, '0'),
        ms = (Math.floor(delta) % 1000).toString().padStart(3, '0');
    return `${minutes}:${seconds}.${ms}`;
}

export function extractID(id) {
  return id.split('-')[1]
}