function getRandomDateInCurrentMonth(hoursRange) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; 
  const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();

  const randomDay = Math.floor(Math.random() * daysInCurrentMonth) + 1;

  const randomHours = Math.floor(Math.random() * 24);
 
  const formattedDateStart = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(randomDay).padStart(2, '0')}T${String(randomHours).padStart(2, '0')}:00:00.000Z`;

  const formattedDateEnd = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(randomDay).padStart(2, '0')}T${String(randomHours + hoursRange).padStart(2, '0')}:00:00.000Z`;

  return {
    StartTime: formattedDateStart,
    EndTime: formattedDateEnd
  };
}


export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(2),
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(4),
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(2),
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    ...getRandomDateInCurrentMonth(4),
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    ...getRandomDateInCurrentMonth(10),
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(5),
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    ...getRandomDateInCurrentMonth(5),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    ...getRandomDateInCurrentMonth(3),
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(3),
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    ...getRandomDateInCurrentMonth(4),
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    ...getRandomDateInCurrentMonth(2),
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    ...getRandomDateInCurrentMonth(2),
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(6),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    ...getRandomDateInCurrentMonth(5),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    ...getRandomDateInCurrentMonth(4),
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    ...getRandomDateInCurrentMonth(3),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    ...getRandomDateInCurrentMonth(1),
    CategoryColor: '#7fa900',
  },
];