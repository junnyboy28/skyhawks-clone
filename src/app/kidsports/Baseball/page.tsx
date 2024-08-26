'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Baseball() {
  const [selectedOption, setSelectedOption] = useState('Ages');

  const options = ['Ages', 'Included with Purchase', 'What to Bring', 'Schedule', 'Reviews'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4 md:p-8 bg-white max-w-[1050px]">
          <h1 className="text-blue-800 text-center text-2xl md:text-4xl font-bold mt-4 md:mt-8">Skyhawks Baseball Camps</h1>
          <div className="mb-6">
            <Image
              src="/images/hr-iron-cross_1.png"
              alt="Decorative line"
              width={1000}
              height={10}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/wY3jrakwNyI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-8">
              <p className="text-gray-700">
                Skyhawks baseball takes the rich history of the game from Cooperstown to your town. 
                Our progressional curriculum teaches the fundamentals of fielding, catching, throwing, 
                hitting, and base running in a fun, positive environment by local Skyhawks staff. 
                All athletes regardless of skill level will learn new baseball skills along with vital 
                life lessons such as respect, teamwork, and responsibility. All participants will come 
                away with new friends, new skills, and love for the game.
              </p>
              <div className="mt-4">
                <Link href="#" className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500">
                  FIND A PROGRAM
                </Link>
              </div>
            </div>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              {options.map((option) => (
                <li key={option}>
                  <button
                    onClick={() => setSelectedOption(option)}
                    className={`${
                      selectedOption === option
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-800'
                    } transition duration-300 w-full md:w-auto text-left md:text-center`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            {selectedOption === 'Ages' && (
              <div className="text-gray-700">
                <p>Skyhawks offers Baseball camps for children between the ages of 3.5 and 12. The typical age range for a Baseball camp are:</p>
                <ul>
                  <li>Ages 3.5 to 4 (Participant to coach ratio approximately 6:1)</li>
                  <li>Ages 4 to 7 (Participant to coach ratio approximately 8:1)</li>
                  <li>Ages 6 to 12 (Participant to coach ratio approximately 10:1)</li>
                </ul>
              <p>Not every age group is available in every market. To see if there is a camp that is perfect for you, use our &ldquo;find a camp in your area&rdquo; button.</p>
                <p><strong>Groups:</strong> At each camp we place campers into groups based on age and ability.</p>
                <p><strong>Ability:</strong> Skyhawks baseball camps are perfect for the beginning to intermediate level player.</p>
              </div>
            )}
            {selectedOption === 'Included with Purchase' && (
              <div className="text-gray-700">
                <p>Please refer to the program description for items included with purchase.</p>
              </div>
            )}
            {selectedOption === 'What to Bring' && (
              <div className="text-gray-700">
                <p><strong>Food to bring:</strong></p>
                <p>For camps four hours or less: Two snacks and a water bottle.</p>
                <p>For camps over four hours: Lunch, snack, and water bottle.</p>
                <p><strong>Gear to bring:</strong></p>
                <p>Appropriate clothing, water bottle, running shoes, baseball glove, helmet (optional), and sunscreen.</p>
              </div>
            )}
            {selectedOption === 'Schedule' && (
              <div className="text-gray-700">
                <p>Skyhawks offers baseball camps in several different formats. The typical time frames for a baseball camp are:</p>
                <ul>
                  <li>9AM to Noon</li>
                  <li>9AM to 1PM</li>
                  <li>9AM to 3PM</li>
                </ul>
                <p>Below are some sample schedules</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">6 Hour</th>
                        <th className="border border-gray-300 px-4 py-2">4 Hour</th>
                        <th className="border border-gray-300 px-4 py-2">3 Hour</th>
                        <th className="border border-gray-300 px-4 py-2">1 Hour</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">9:00 Welcome</td>
                        <td className="border border-gray-300 px-4 py-2">9:00 Welcome</td>
                        <td className="border border-gray-300 px-4 py-2">9:00 Welcome</td>
                        <td className="border border-gray-300 px-4 py-2">9:00 Welcome</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {selectedOption === 'Reviews' && (
              <div className="text-gray-700">
{[
  {
    text: &ldquo;The two coaches Joey had for Baseball were exceptional. They were engaging, fun, and my son had a great time. He came home with new skills and really enjoyed each day of the week. Also, the coaches were very sensitive to the sun and possible dehydration and sunburns. Not one day did my son get burned or leave there dehydrated. I was very impressed this year with the quality of his experience.&rdquo;,
    author: "Martha C.",
    location: "Longmont, CO"
  },
  {
    text: &ldquo;Brian enjoyed this baseball camp very much. He had a chance to review the basic skills and to practice to improve those skills. His batting is getting better. Thank you.&rdquo;,
    author: "Steve A.",
    location: "Snohomish, WA"
  },
  {
    text: &ldquo;My son had so much fun learning the skills of baseball with his coaches! They let the kids have lots of fun and still keep them all behaving very well. The coaches really made my son feel safe and they were so willing to play with the kids on their level and have fun also! Thanks so much!&rdquo;,
    author: "Christa D.",
    location: "Spokane, WA"
  },
  {
    text: &ldquo;My son loved his coaches and definitely wants to come back next year. He did not know much about baseball when he started, and he left with a very good grasp on the sport and some wonderful skills. Thank you.&rdquo;,
    author: "Carol C.",
    location: "Whidbey Island, WA"
  },
  {
    text: &ldquo;Sophia enjoyed the program very much. It helped to really get her interested in baseball and want to do it again. We will most likely sign her up for it next year again.&rdquo;,
    author: "Tamara H.",
    location: "Billings, MT"
  }
].map(({ text, author, location }) => (
  <div key={text} className="mb-4">
    <p className="italic">&ldquo;{text}&rdquo;</p>
    <p className="text-right text-gray-600">- {author}, {location}</p>
  </div>
))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
