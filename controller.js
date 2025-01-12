// Handle Timestamp requests
const getTimestamp = (req, res) => {
    const { date } = req.params;
  
    // If no date is provided, return the current timestamp
    if (!date) {
      const now = new Date();
      return res.json({ unix: now.getTime(), utc: now.toUTCString() });
    }
  
    // Check if the date is a valid Unix timestamp (milliseconds since epoch)
    if (/^\d+$/.test(date)) {
      const unixDate = new Date(parseInt(date));
      // Ensure the date is valid
      if (!isNaN(unixDate)) {
        return res.json({ unix: date, utc: unixDate.toUTCString() });
      }
    }
  
    // Check if the date is a valid UTC format (ISO 8601 string)
    const utcDate = new Date(date);
    if (!isNaN(utcDate)) {
      return res.json({ unix: utcDate.getTime(), utc: utcDate.toUTCString() });
    }
  
    return res.status(400).json({ error: "Invalid date format" });
  };
  
  module.exports = { getTimestamp };
  