// Feature project data
import {
  weather,
  statusReport,
  calculator,
  portfoliov4,
  textComparator,
  oldPortfolio,
  mancalaAI,
} from '../static/project_desc';
import imgWeather from '../../img/weather_3200.png';
import imgStatusReport from '../../img/statusReport_1600.png';
import imgOldPortfolio from '../../img/oldPortfolio_1600.png';
import imgCalculator from '../../img/calculator_1600.png';
import imgTextComparator from '../../img/textComparator_1600.png';
import imgMancalaAI from '../../img/mancalaAI_1600.png';
import imgPortfolio from '../../img/portfolio_1600.png';

export const projects = [
  {
    title: 'Status Report',
    description:
      'Status Report is the web application to replace spreadsheet-based reporting system in Online Program Development at UW-Madison.',
    tags: ['react', 'mysql', 'express/node'],
    html: statusReport(),
    imgUrl: imgStatusReport,
    github: 'https://github.com/JinwooOh/statusreport',
    demo: '',
  },
  {
    title: 'Weather App',
    description: 'Weather web application. It uses Wunderground API to gather weather information.',
    tags: ['react', 'javascript'],
    html: weather(),
    imgUrl: imgWeather,
    github: 'https://github.com/JinwooOh/weather',
    demo: 'http://jinwoo-oh.com/project/weather/',
  },
  {
    title: 'Portfolio Site',
    description:
      'Single-page application to show my works. It uses React framework to make interactive Uis.',
    tags: ['react', 'javascript', 'express/node', 'html/css'],
    html: portfoliov4(),
    imgUrl: imgPortfolio,
    github: 'https://github.com/JinwooOh/portfolio_v4',
    demo: '',
  },
  {
    title: 'Calculator',
    description: 'Simple calculator web application',
    tags: ['react', 'javascript'],
    html: calculator(),
    imgUrl: imgCalculator,
    github: 'https://github.com/JinwooOh/react_calculator',
    demo: 'https://calculator-react-jin.herokuapp.com/',
  },
  {
    title: 'Old Portfolio',
    description: 'An old version of a portfolio website. It used HTML, CSS, and JQuery.',
    tags: ['html/css'],
    html: oldPortfolio(),
    imgUrl: imgOldPortfolio,
    github: 'https://github.com/JinwooOh/portfolio_v3',
    demo: 'http://jinwoo-oh.com/old_portfolio/portfolio_v3',
  },
  {
    title: 'Text Comparator',
    description:
      'This is the program that can compare two text files and produces the result that shows differences. It uses Longest Common Subsequence algorithm.',
    tags: ['java', 'algorithm'],
    html: textComparator(),
    imgUrl: imgTextComparator,
    github: 'https://github.com/JinwooOh/text-comparison',
    demo: '',
  },
  {
    title: 'Mancala AI',
    description:
      'One of AI class projects. The assignment was creating AI that should beat simple game AI by using Minimax algorithm with SBE function.',
    tags: ['java', 'algorithm', 'machine learning'],
    html: mancalaAI(),
    imgUrl: imgMancalaAI,
    github: 'https://github.com/JinwooOh/minimax_game_playing',
    demo: '',
  },
];
