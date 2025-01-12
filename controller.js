// Handle Timestamp requests
const getTimestamp = (req, res) => {
    const { date } = req.params;
  
    // If no date is provided, return the current Unix timestamp and UTC time
    if (!date) {
      const currentDate = new Date();
      return res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
    }
  
    // Check if the provided date is a valid Unix timestamp in milliseconds
    if (/^\d+$/.test(date)) {
      const unixDate = new Date(parseInt(date));
      if (!isNaN(unixDate.getTime())) {
        return res.json({ unix: unixDate.getTime(), utc: unixDate.toUTCString() });
      }
    }
  
    // Attempt to parse the provided date as a valid GMT/UTC date string
    const utcDate = new Date(date);
    if (utcDate.toString() !== 'Invalid Date') {
      return res.json({ unix: utcDate.getTime(), utc: utcDate.toUTCString() });
    }
  
    // If the date is invalid, return an error
    return res.status(400).json({ error: "Invalid Date" });
  };
  
  module.exports = { getTimestamp };
  