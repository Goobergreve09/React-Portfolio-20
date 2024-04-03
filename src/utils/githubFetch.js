export async function fetchGitHubUserData(username) {
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;
    const eventsUrl = `https://api.github.com/users/${username}/events`;
  
    try {
      // Fetch user data
      const userResponse = await fetch(userUrl);
      if (!userResponse.ok) {
        throw new Error('Network response for user data was not ok');
      }
      const userData = await userResponse.json();
  
      // Fetch repositories data
      const reposResponse = await fetch(reposUrl);
      if (!reposResponse.ok) {
        throw new Error('Network response for repositories was not ok');
      }
      const reposData = await reposResponse.json();
  
      // Fetch events data
      const eventsResponse = await fetch(eventsUrl);
      if (!eventsResponse.ok) {
        throw new Error('Network response for events was not ok');
      }
      const eventsData = await eventsResponse.json();
  
      return { user: userData, repos: reposData, events: eventsData };
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }
  
  