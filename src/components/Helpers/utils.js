export function truncateDescription(description, maxLength) {
    if (typeof description != "string") {
        return "Loading...";
    }
    if (description.length <= maxLength) {
      return description;
    }
  
    // find the last space before the maxLength
    let lastSpace = description.lastIndexOf(' ', maxLength);
  
    // if no space found, truncate at maxLength
    if (lastSpace === -1) {
      return description.substring(0, maxLength) + '...';
    }
  
    // truncate at last space
    return description.substring(0, lastSpace) + '...';    
}

export function formatDuration(duration) {
    const totalSeconds = Math.floor(duration / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');
  
    return `${hoursString}:${minutesString}:${secondsString}`;
}

export function convertTime(dateString) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (typeof dateString != "string") {
        return dateString;
    } else {
        const [, monthNum, day] = dateString.split('-');
        const month = months[Number(monthNum) - 1];
        return `${month} ${Number(day)}`;
    }
}