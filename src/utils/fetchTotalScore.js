import axios from 'axios';

// Make a GET request to fetch total score for User 1
const fetchTotalScore = async () => {
  try {
    const response = await axios.get('http:localhost:5001/api/private/getScore');
    const data = response.data;
    console.log('Total Score:', data.totalScore);
    // Use the total score data as needed
  } catch (error) {
    console.error('Error fetching total score:', error.message);
  }
};

// Call the fetchTotalScore function
fetchTotalScore();
