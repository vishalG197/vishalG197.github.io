
import GitHubCalendar from 'react-github-calendar';

const GitHubStats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">GitHub Statistics</h2>
        <div className="space-y-8">
          <div className="flex justify-center react-activity-calendar">
            <GitHubCalendar
              username="yourusername"
              colorScheme="light"
              fontSize={16}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=yourusername&theme=radical"
              alt="GitHub Streak Stats"
              className="w-full rounded-lg shadow-md"
            />
            <img
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=radical"
              alt="Top Languages"
              className="w-full rounded-lg shadow-md"
            />
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
